/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./shared/**/*.{js,vue,ts}",
        "./features/**/*.{js,vue,ts}",
        "./layouts/**/*.{js,vue,ts}",
        "./pages/**/*.{js,vue,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};