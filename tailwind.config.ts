import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
     backgroundImage:{
      "gradient-radial":
      "radial-gradient(let(--tw-gradient-stops))",
      "gradient-linear":
      "conic-gradient(from 180deg at 50% 50%, let(--tw-gradient-stops))",
     },
      fontFamily:{
        Sora:[`let(--font-sora)`,`sans-serif`],
      }
    },
  },
  plugins: [],
  darkMode:"class",
};
export default config;
