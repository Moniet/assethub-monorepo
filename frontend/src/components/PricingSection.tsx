"use client"

import React, { useState } from "react"
import { CheckIcon } from "@radix-ui/react-icons"

const cards = [
  {
    title: "Basic",
    summary: "Up to 10 users with 100gb free data!",
    monthlyPrice: "20",
    annualPrice: "200",
    cta: "Pre-register",
    features: [
      "100GB free storage",
      "Mangage Permissions",
      "Upload directly from Slack",
      "Unlimited file search on Slack",
      "Full access to app features",
      "48-hour support response time"
    ]
  },
  {
    title: "Flexible",
    summary: "A plan that scales with your growing business",
    slashPricing: "",
    monthlyPrice: "2",
    annualPrice: "1.6",
    isPerUser: true,
    isPopular: true,
    cta: "Pre-register",
    features: [
      "200GB free storage!",
      "Manage Permissions from Slack",
      "Upload directly from Slack",
      "Unlimited file search on Slack",
      "Full access to web app features",
      "24-hour support response time"
    ]
  },
  {
    title: "Enterprise",
    summary: "Custom pricing based on organisational needs and scale.",
    noPrice: "Let's talk",
    features: [
      "More than 50 users",
      "On-demand customer support",
      "Customizable web app features",
      "Auto-scales with your team",
      "Fine-grained API access"
    ],
    cta: "Contact Us"
  }
]

const PricingCard = ({
  title,
  summary,
  features,
  isPopular,
  monthlyPrice,
  annualPrice,
  isMonthly,
  isPerUser,
  cta,
  onClick,
  noPrice
}: any) => {
  return (
    <div
      className={`flex flex-col gap-7 p-10 rounded-lg border bg-white sm:max-w-[350px] xs:min-w-[300px] md:min-w-[350px] ${
        isPopular
          ? " border-primary-500 lg:scale-110 lg:shadow-lg"
          : " border-slate-200 shadow"
      }`}
    >
      <p
        className={`text-lg font-heading font-bold ${
          isPopular ? "text-primary-500" : "text-primary-900"
        }`}
      >
        {title}
      </p>
      <p className="text-sm text-body font-light text-body">{summary}</p>
      <div className="flex flex-col gap-3">
        {!noPrice && (
          <p className="font-bold font-body text-primary-900 text-3xl">
            ${isMonthly ? monthlyPrice : annualPrice}{" "}
            <span className="text-sm font-medium text-neutral-600">
              /{isPerUser ? "user" : isMonthly ? "month" : "year"}
            </span>
          </p>
        )}
        {noPrice && (
          <p className="font-bold font-body text-primary-900 text-3xl">
            {noPrice}
          </p>
        )}
        <a
          href="#launching"
          onClick={onClick}
          className={`w-full px-4 py-2 text-center rounded  text-sm ${
            isPopular
              ? "bg-primary-500 text-white"
              : "border border-primary-500 text-primary-500"
          }`}
        >
          {cta}
        </a>
      </div>
      <div className="flex flex-col gap-2">
        {features.map((f: string, i: number) => (
          <div
            className="flex gap-2 items-center text-sm text-body font-light"
            key={i}
          >
            <span className="text-primary-500">
              <CheckIcon height={25} width={20} />
            </span>
            {f}
          </div>
        ))}
      </div>
    </div>
  )
}

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="flex flex-col gap-5 w-full height-fit mt-10" id="pricing">
      <div className="p-1 border border-slate-200 rounded-full bg-white flex w-fit mx-auto mb-10 tracking-wide">
        <button
          className={`text-sm font-medium rounded-full py-1 px-3 ${
            isMonthly ? "bg-primary-500 text-white" : "text-neutral-500"
          }`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`text-sm font-medium rounded-full py-1 px-3 ${
            !isMonthly ? "bg-primary-500 text-white" : "text-neutral-500"
          }`}
          onClick={() => setIsMonthly(false)}
        >
          Annually
        </button>
      </div>

      <div className="flex w-full gap-10 justify-center flex-wrap">
        {cards.map((card, i) => {
          return <PricingCard {...card} key={i} isMonthly={isMonthly} />
        })}
      </div>
    </div>
  )
}

export default PricingSection
