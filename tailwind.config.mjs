/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '360px', // Celulares pantalla muy chica
        'sm': '440px', // Celulares
        'md': '768px', // Celulares Horizontal y Tablet Vertical
        'lg': '1024px', // Tablet Horizontal y Laptops
        'xl': '1280px', // Laptops y escritorios chicos
        '2xl': '1536px', // Escritorios grandes
      },
      colors: {
        'firstColor': '#180F22',
        'secondColor': "#FFED89",
        'thirdColor': '#f3f3f3',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'bebas': ['Bebas Neue'],
      },
      backgroundImage: {
        'dager': 'url("/dager2.webp")',
        'mainImage': "url('/dager2.webp')",
      }
    },
  },
  plugins: [],
}
