import { NextResponse } from "next/server"
import zod from "zod"
import { Client, fql } from "fauna"
import { NextApiRequest } from "next"

const validateEmail = zod.string().email()

const faunaClient = new Client({
  secret: process.env.FAUNA_SECRET
})

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
    const exists = () => fql`Users.where(.email == ${email}) `
    const createUser = `
      Users.create(${{ email }}) {
        id,
        ts
      }
    `
    const query = fql`
      if (${exists()} == null) {
        ${createUser}
      }
    `
    await faunaClient.query(query, {
      arguments: {
        email
      }
    })

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
