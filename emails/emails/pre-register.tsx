import * as React from "react"
import {
  Body,
  Html,
  Head,
  Preview,
  Heading,
  Container,
  Section,
  Column,
  Row,
  Text,
  Img,
  Hr,
  Link
} from "@react-email/components"

export default function PreRegister() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>filebloc: Pre-register confirmation</Preview>
        <Container style={container}>
          {/* <Hr /> */}
          <Section style={body}>
            <Img
              src="https://filebloc.com/filebloc-logo.png"
              style={logo}
              alt="Filebloc logo"
              width="125"
              height="auto"
            />
            <Hr />
            <Heading style={heading}>Thank you for pre-registering 🎉</Heading>
            <Section>
              <Text style={para}>
                First off, thanks a lot for your interest in filebloc!
              </Text>
              <Text style={para}>
                We&#39;re working hard on building filebloc and we&#39;ll let
                you know as soon as it&#39;s ready.
              </Text>
              <Text style={para}>
                Once we launch, you will be notified to be one of our very first
                alpha users, helping us improve, add features of you want, and
                cater to your business needs.
              </Text>
              <Text style={para}>
                Hang tight, and we&#39;ll get back to you in a jiffy! 🏃‍♂️
              </Text>
              <Text style={para}>
                In the meantime if you have any questions, reach out to us at{" "}
                <Link
                  style={{ color: "#507EF1" }}
                  href="mailto:info@filebloc.com"
                >
                  info@filebloc.com
                </Link>
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const logo = {
  margin: "0 auto",
  marginTop: "40px",
  marginBottom: "40px"
}

const body = {
  backgroundColor: "#fff",
  border: "solid 1px #d1d1d1",
  boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
  borderRadius: "10px",
  paddingBottom: "30px",
  paddingLeft: "40px",
  paddingRight: "40px",
  marginTop: "50px"
}

const container = {
  paddingTop: "40px"
}

const para = {
  fontSize: "18px",
  color: "#334155",
  margin: "0 auto",
  paddingBottom: "20px"
}

const main = {
  backgroundColor: "#fff",
  fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif"
}

const heading = {
  color: "#0F172A",
  marginTop: "40px"
}
