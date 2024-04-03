/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        "fit-content": "fit-content",
      },
      screens: {
        lm: "1124px",
        mg: "970px",
      },
      spacing: {
        "12/12": "95%",
        18: "70px",
        30: "120px",
        84: "350px",
        86: "380px",
        88: "430px",
        90: "440px",
        98: "400px",
        99: "430px",
        100: "450px",
        105: "470px",
      },
    },
  },
  plugins: [],
};
