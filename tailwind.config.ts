import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-magenta-900": "hsl(300, 43%, 22%)",
        "primary-pink": "hsl(333, 80%, 67%)",
        "secondary-magenta-700": "hsl(303, 10%, 53%)",
        "secondary-magenta-500": "hsl(300, 24%, 96%)",
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
        
      },
      fontWeight: {
        leagueRegular: "400",
        leagueMedium: "500",
        leagueBold: "700",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": `conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))`,
      },
    },
  },
  plugins: [],
};

export default config;
