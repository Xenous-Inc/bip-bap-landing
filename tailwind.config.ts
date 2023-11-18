import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                'blue': '#3D5AFE',
                'green': '#2ECC71'
            },  
            fontFamily:{
                releway: ['Releway', ...fontFamily.sans]
            }
        },
    },
    plugins: [],

};