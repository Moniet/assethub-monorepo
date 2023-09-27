import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        body: "#334155",
        "primary-900": "#0F172A",
        "primary-500": "#507EF1"
      },
      borderRadius: {
        sm: "5px",
        md: "10px",
        lg: "20px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue":
          "linear-gradient(180deg, #4875DA 30.35%, rgba(72, 117, 218, 0.00) 96.31%)"
      },
      fontFamily: {
        body: "var(--font-body), 'Helvetica Neue', sans-serif",
        header: "var(--font-header), 'Helvetica Neue', sans-serif"
      },
      backgroundColor: {
        "trans-white": "rgba(255, 255, 255, 0.10)"
      }
    },
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    }
  },
  plugins: []
}
export default config
