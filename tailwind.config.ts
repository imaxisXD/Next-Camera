import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "millybar-yellow": "#faea18",
        "dimgray": {
          "100": "#515151",
          "200": "rgba(81, 81, 81, 0.82)",
        },
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.8)",
          "200": "rgba(34, 34, 34, 0.45)",
        },
        crimson: "#cd1f2f",
        "navy-blue": "#021689",
        steelblue: "#0394c3",
        gainsboro: "#d9d9d9",
        darkgray: {
          "100": "#afafaf",
          "200": "#a1a1a1",
          "300": "#979797",
        },
        lightgray: "#cfcfcf",
        darkslategray: "#343434",
      },
      spacing: {},
      fontFamily: {
        alata: "Alata",
        hobeaux: "Hobeaux",
        "bebas-neue": "'Bebas Neue'",
        "comic-sans-ms": "'Comic Sans MS'",
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        "81xl": "100px",
        lg: "18px",
        "10xs": "3px",
        "6xl": "25px",
        "3xs": "10px",
        smi: "13px",
        "6xs": "7px",
        "8xs": "5px",
        mini: "15px",
      },
      backgroundImage: {
        "coconut": "url('/background.svg')",
      }
    },
  },
  plugins: [],
}
export default config
