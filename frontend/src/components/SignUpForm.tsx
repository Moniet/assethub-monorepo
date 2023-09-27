"use client"

import React, { FormEventHandler, useState } from "react"

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    ;(e as any)?.preventDefault()

    try {
      const res = await fetch("/preregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      })

      if (res.status === 200) {
        const data = await res.json()
        setSuccess(data.message)
        setEmail("")
        setError("")
      }

      if (res.status >= 400) {
        const data = await res.json()
        setError(data.error || "Something went wrong")
      }
    } catch (err) {
      setError("Something went wrong")
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="gap-5 flex xs:flex-col md:flex-row justify-center xs:w-full sm:w-[350px] md:w-auto"
        id="launching"
      >
        <input
          className="p-2 rounded bg-neutral-100 flex-2 md:w-[350px] xs:w-full text-sm text-body outline-0 focus:border-slate-400 border border-slate-200"
          placeholder="Enter your email"
          type="email"
          required
          aria-label="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          className="bg-primary-500 text-white px-3 py-2 text-white text-sm font-medium rounded whitespace-nowrap xs:w-full md:w-fit"
          type="submit"
        >
          Sign up
        </button>
      </form>
      {success && (
        <p className="text-lg mt-10 text-blue-700 font-light tracking-wide md:w-3/4 xs:w-full">
          🥳 {success}
        </p>
      )}
      {error && (
        <p className="text-lg mt-10 text-red-700 font-light tracking-wide md:w-3/4 xs:w-full">
          🙁 {error}
        </p>
      )}
    </>
  )
}

export default SignUpForm
