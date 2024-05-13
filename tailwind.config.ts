module.exports = {
  content: ["./src/**/**/*.{vue,ts,js,scss}", "./*.{ts,js}"],
  safelist: [
    {
      pattern: /^p(\w?)-/,
      variants: ["xs", "sm", "md", "lg", "xl"],
    },
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: '"Mukta", system-ui, sans-serif;',
      head: '"Poppins", system-ui, sans-serif;',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.375rem",
      "1xl": "1.625",
      "2xl": "2rem",
      "3xl": "2.5rem",
      "4xl": "3rem",
      "5xl": "3.5rem",
      "7xl": "4.375rem",
    },
    extend: {
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
    },
  },
};
