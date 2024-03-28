/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'min': '420px',
      },
      backgroundImage:{
        nav:'linear-gradient(180deg, rgba(10, 54, 65, 0.90) 0%, #0C0B15 41.92%)',
        header:' linear-gradient(180deg, rgba(12, 11, 18, 0.79) 0%, #0C0B12 61.46%)',
        section2:'linear-gradient(180deg, #0C0B12 -3.27%, #0C0B12 15.89%, #0C0B12 35.55%)',
        logo:'linear-gradient(89deg, rgba(21, 135, 231, 0.78) 9.63%, #0C2530 159.75%)',
        button:'linear-gradient(97deg, #1A61ED -8.89%, #11BAE3 78.07%)',
        box:'linear-gradient(90deg, #0C0B12 49.02%, #0C2530 100.88%)',
        circle:' radial-gradient(50% 50% at 50% 50%, rgba(57, 122, 155, 0.47) 0%, #0F1F2A 100%)',
        square:'linear-gradient(270deg, #0D485C 24.19%, #0D3255 110.12%)',
        leftrect:'linear-gradient(90deg, #0C0B12 45%, #0C2530 100.88%)',
        rightrect:' linear-gradient(90deg, #0C0B12 55.81%, #0C242F 106.84%)',
        paragraph:'linear-gradient(90deg, #1A60E4 0%, #1489C7 45.54%)',
        box:' linear-gradient(282deg, #111937 35.38%, #102235 100.06%)',
        smallBox:'linear-gradient(91deg, #111937 0.86%, #0F2835 85.54%)',
        smallCircle:'linear-gradient(109deg, #0E313E 37.27%, #0B1524 159.16%)',
        cube:'linear-gradient(269deg, #0C2430 3.83%, #0B1524 99.67%)',
        footer:'linear-gradient(92deg, #091729 2.08%, #091527 100%)',
        bigbtn:' linear-gradient(180deg, #0B2042 0%, #0B2C42 100%)',
        
      },
      colors:{
        line:'linear-gradient(270deg, #101C36 23.04%, #114554 67.69%, #0F2835 90.29%)'
      },
      fontFamily:{
        inter:['Inter', 'sans-serif'],
        poppins:[ 'Poppins', 'sans-serif'],
        plusJakataSans:['Plus Jakarta Sans', 'sans-serif']
      },
      fontSize:{
        heading:'39.831px',
        para:'7px'
      },
      rotate:{
        139:'-139.101deg',
        43:'-43.943deg'
      }
    },
  },
  plugins: [],
}