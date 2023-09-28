import { NextResponse } from "next/server"
import zod from "zod"
import { Client, fql } from "fauna"
import { NextApiRequest } from "next"
// import PreRegister from "emails/emails/pre-register"
import { render } from "@react-email/render"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"
import { email } from "./email"

const validateEmail = zod.string().email()

const faunaClient = new Client({
  secret: process.env.FAUNA_SECRET
})

const sesClient = new SESClient({
  region: "eu-central-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
  }
})

const sendEmail = async (toAddress: string) => {
  try {
    // const emailHtmlBody = render(<PreRegister />)

    const sendCommand = new SendEmailCommand({
      Destination: {
        CcAddresses: [],
        ToAddresses: [toAddress]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: email
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Filebloc: Thank you for registering 🙌"
        }
      },
      Source: "info@filebloc.com",
      ReplyToAddresses: ["info@filebloc.com"]
    })
    console.log('before email  send')
    await sesClient.send(sendCommand).then(console.log)
    console.log('after email send')
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function POST(request: Request) {
  const { email = "" } = (await request.json()) || { email: "" }

  const isValid = validateEmail.parse(email)

  if (!isValid) {
    return NextResponse.json(
      {
        error: "Please provide a valid email address"
      },
      {
        status: 400
      }
    )
  }

  try {
    console.log({ email })
    const notexists = () => fql`Users.where(.email == ${email}).count() == 0`
    const createUser = () => fql`
      Users.create(${{ email }}) {
        id,
        ts
      }
    `
    const query = fql`
      if (${notexists()}) {
        ${createUser()}
        "user created"
      } else {
        "already exists"
      }
    `
    const action = await faunaClient.query(query, {
      arguments: {
        email
      }
    })

    console.log({ action })

    if (action.data === "user created") {
      await sendEmail(email)
    }

    return NextResponse.json(
      {
        message:
          "Thank you for registering. You will be notified when we release filebloc."
      },
      {
        status: 200
      }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      {
        error: "Something went wrong! Let us know if this continues"
      },
      {
        status: 500
      }
    )
  }
}
