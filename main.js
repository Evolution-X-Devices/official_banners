const fs = require('fs')
const path = require('path')
const readline = require('readline')
const { exec } = require('child_process')

// importing assets to create the .svg files

// A list of devices illustrations used for the banners
const device_types = require('./assets/device_types_array.js')

const data = require('./devices.json')
const json = data.devices

json.map((e, index) => {
  // The svg file that is going to be modified based
  // on the "devices.json" file and get exported as .svg
  let svg_image = `
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 1080">
      <defs>
        <style>
          .cls-1 {
            fill: url(#radial-gradient);
          }
          .cls-2 {
            opacity: 0.58;
          }
          .cls-3 {
            fill: #26292b;
            opacity: 0.57;
          }
          .cls-4 {
            fill: #262728;
          }
          .cls-5 {
            fill: url(#linear-gradient);
          }
          .cls-6 {
            fill: url(#linear-gradient-2);
          }
          .cls-12,
          .cls-7,
          .cls-8 {
            fill: #d3d3d3;
            color: #d3d3d3;
          }
          .cls-8 {
            font-size: 34.7px;
            font-family: Montserrat-Regular, Montserrat;
          }
          .cls-9 {
            letter-spacing: -0.01em;
          }
          .cls-10 {
            opacity: 0.65;
          }
          .cls-11 {
            fill: #818081;
          }
          .cls-12 {
            font-size: 58.91px;
            font-family: Montserrat-ExtraBold, Montserrat;
            font-weight: 700;
          }
          .cls-13 {
            letter-spacing: 0em;
          }
          .cls-14 {
            letter-spacing: 0em;
          }
          .cls-15 {
            letter-spacing: -0.01em;
          }
          .cls-16,
          .cls-17,
          .cls-18 {
            font-size: 46.57px;
            font-family: Montserrat-ExtraBoldItalic, Montserrat;
            font-style: italic;
          }
          .cls-16 {
            letter-spacing: -0.01em;
          }
          .cls-17 {
            letter-spacing: 0em;
          }
          .cls-18 {
            letter-spacing: 0em;
          }

          .cls-100 {
            opacity: 0.58;
          }
          .cls-200 {
            fill: #26292b;
            opacity: 0.57;
          }
          .cls-300 {
            fill: #262728;
          }
        </style>
        <radialGradient
          id="radial-gradient"
          cx="1918"
          cy="14.88"
          r="581.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#424956" />
          <stop offset="0.09" stop-color="#383e48" />
          <stop offset="0.27" stop-color="#292b32" />
          <stop offset="0.47" stop-color="#1e1e22" />
          <stop offset="0.69" stop-color="#171619" />
          <stop offset="1" stop-color="#151416" />
        </radialGradient>
        <linearGradient
          id="linear-gradient"
          x1="360.73"
          y1="441.22"
          x2="587.16"
          y2="441.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#8eadd4" />
          <stop offset="1" stop-color="#f2acc2" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="342.89"
          y1="659.76"
          x2="581.49"
          y2="659.76"
          xlink:href="#linear-gradient"
        />
      </defs>
      <title>banner</title>
      <rect id="BG" class="cls-1" width="1920" height="1080" />

      ${device_types[e.device_type]}

      <g id="EVO_Logo" data-name="EVO Logo">
        <path
          class="cls-5"
          d="M580.5,410.2H367.41a6.66,6.66,0,0,0-4.85,11.23l46,48.73a6.68,6.68,0,0,0,4.85,2.09H568.46a6.65,6.65,0,0,0,6.46-5.07L587,418.46A6.66,6.66,0,0,0,580.5,410.2Z"
        />
        <path
          class="cls-6"
          d="M447.19,622l89.7,77.89a6.67,6.67,0,0,1,2.19,6.2l-10.7,59.69a6.66,6.66,0,0,1-11,3.76L345.07,612.9a6.63,6.63,0,0,1-2-6.39l11.91-53a6.66,6.66,0,0,1,6.5-5.2H539.11a6.67,6.67,0,0,1,5.38,2.72l35.7,48.71a6.66,6.66,0,0,1-5.37,10.6H451.56A6.66,6.66,0,0,0,447.19,622Z"
        />
      </g>
      <g id="_13_Logo" data-name="13 Logo">
        <g id="g6323">
          <path
            class="cls-7"
            d="M1811.92,160.89c-4.28-5.31-5.89-9.68-6.46-17.5-.53-7.22-2.61-10-9.76-13-5-2.13-9.62-6-11.87-9.93-4.53-8-7.62-9.9-15.06-9.44-7.86.49-12.08-.44-17.36-3.86-6.88-4.46-11.06-4.46-17.94,0-5.28,3.42-9.5,4.35-17.36,3.86-4.53-.28-6.9.32-9.84,2.5-1.82,1.36-2.25,1.92-5.19,6.9a25.84,25.84,0,0,1-12.49,10.2c-6.43,2.59-8.61,5.78-9.27,13.57s-2,11.31-6.37,16.74c-4.75,5.93-5.16,9.79-1.82,17a25,25,0,0,1,1.95,17.4c-1.48,7.16.08,11.11,6.18,15.59,5.38,3.95,7.83,7.66,10.18,15.39,1.89,6.27,5,8.89,12.15,10.1,6.85,1.17,10.79,3.24,15.64,8.18,2.91,3,5,4.33,7.47,4.92,2.74.65,5,.4,9.3-1a24.69,24.69,0,0,1,17,0c7.49,2.46,11.34,1.55,16.7-3.94,4.83-5,8.77-7,15.64-8.2,7.1-1.21,10.26-3.83,12.16-10.1,2.34-7.73,4.79-11.44,10.17-15.39,6.1-4.48,7.66-8.43,6.17-15.59a25,25,0,0,1,2-17.4C1817.09,170.67,1816.68,166.81,1811.92,160.89Zm-79.11,56.84H1719V150h-11.88V136.17h25.69ZM1742,221l1.83-4.55,1.42-3.45,1.78-4.83c12.33,4.22,23.64-4.31,23.77-15.78,0-12.56-9.68-17.63-18.5-18.24l-5.66-.7,5.75-11.85,5.8-11.59-6.82-.09-6.92-.09V136.17h36.22l-6.9,13.8-6.9,13.8c12.18,6.13,17.93,17,17.93,28.28A31.17,31.17,0,0,1,1742,221Z"
          />
        </g>
      </g>

      <text class="cls-8" text-anchor="end" transform="translate(1800 1002.18)">
        Maintainer: ${e.maintainer}
        <tspan class="cls-9" y="0"></tspan>
      </text>

      <g id="Text">
        <g class="cls-10">
          <polygon
            class="cls-11"
            points="806.54 454.5 772.13 412.96 753.98 412.96 753.98 490.92 775.58 490.92 775.58 449.37 809.99 490.92 828.15 490.92 828.15 412.96 806.54 412.96 806.54 454.5"
          />
          <polygon
            class="cls-11"
            points="863.56 459.62 898.2 459.62 898.2 443.14 863.56 443.14 863.56 430 902.88 430 902.88 412.96 841.73 412.96 841.73 490.92 904.32 490.92 904.32 473.88 863.56 473.88 863.56 459.62"
          />
          <polygon
            class="cls-11"
            points="998.36 463.18 982.61 412.96 962.35 412.96 945.84 462.71 930.16 412.96 907.44 412.96 932.72 490.92 956.33 490.92 971.91 443.44 986.85 490.92 1010.46 490.92 1035.73 412.96 1014.69 412.96 998.36 463.18"
          />
          <path
            class="cls-11"
            d="M1139.75,457a26.91,26.91,0,0,0,4.23-15.2,27.67,27.67,0,0,0-4.23-15.42,26.89,26.89,0,0,0-12-10,45,45,0,0,0-18.43-3.45h-35.64v78h22V470.2h12l14.13,20.71h23.61l-16.84-24.54A26.58,26.58,0,0,0,1139.75,457Zm-21.44-23.66q3.4,3,3.4,8.46a10.54,10.54,0,0,1-3.4,8.35q-3.39,3-10.3,3h-12.25V430.33H1108Q1114.91,430.33,1118.31,433.34Z"
          />
          <polygon
            class="cls-11"
            points="1175.94 459.62 1210.58 459.62 1210.58 443.14 1175.94 443.14 1175.94 430 1215.26 430 1215.26 412.96 1154.12 412.96 1154.12 490.92 1216.7 490.92 1216.7 473.88 1175.94 473.88 1175.94 459.62"
          />
          <polygon
            class="cls-11"
            points="1249 412.96 1226.95 412.96 1226.95 490.92 1286.2 490.92 1286.2 473.43 1249 473.43 1249 412.96"
          />
          <polygon
            class="cls-11"
            points="1314.7 459.62 1349.34 459.62 1349.34 443.14 1314.7 443.14 1314.7 430 1354.02 430 1354.02 412.96 1292.88 412.96 1292.88 490.92 1355.46 490.92 1355.46 473.88 1314.7 473.88 1314.7 459.62"
          />
          <path
            class="cls-11"
            d="M1390.77,413l-34.41,78h22.49l6.08-15.14H1418l6.08,15.14H1447l-34.52-78Zm.69,46.55,10-24.93,10,24.93Z"
          />
          <path
            class="cls-11"
            d="M1504.47,450.54a36.13,36.13,0,0,0-8.63-4c-3.15-1-6.31-1.83-9.46-2.5s-6.05-1.32-8.69-1.95a21.41,21.41,0,0,1-6.35-2.45,4.61,4.61,0,0,1-2.39-4.06,5.66,5.66,0,0,1,1.22-3.57,8.42,8.42,0,0,1,4-2.5,23.45,23.45,0,0,1,7.35-.95,39.84,39.84,0,0,1,10.58,1.5,53,53,0,0,1,11,4.51l6.79-16.37a48.29,48.29,0,0,0-13.2-5.07,66.2,66.2,0,0,0-15.09-1.72q-11.46,0-19.15,3.45A26.66,26.66,0,0,0,1451,424a22.18,22.18,0,0,0-3.84,12.7,18.66,18.66,0,0,0,8.8,16.87,37.67,37.67,0,0,0,8.63,4.07,89.22,89.22,0,0,0,9.47,2.56c3.15.67,6,1.33,8.63,2a22.16,22.16,0,0,1,6.34,2.56,4.79,4.79,0,0,1,2.45,4.24,4.66,4.66,0,0,1-1.28,3.28,8.92,8.92,0,0,1-4.06,2.23,26.27,26.27,0,0,1-7.35.83,44.81,44.81,0,0,1-13.64-2.17,51,51,0,0,1-12.09-5.51l-7.24,16.26a48.12,48.12,0,0,0,14.43,6.18,70.09,70.09,0,0,0,18.43,2.39q11.58,0,19.21-3.45a26.45,26.45,0,0,0,11.47-9.19,22.05,22.05,0,0,0,3.84-12.53,19.91,19.91,0,0,0-2.39-10.19A19.52,19.52,0,0,0,1504.47,450.54Z"
          />
          <polygon
            class="cls-11"
            points="1543.12 473.88 1543.12 459.62 1577.75 459.62 1577.75 443.14 1543.12 443.14 1543.12 430 1582.43 430 1582.43 412.96 1521.29 412.96 1521.29 490.92 1583.88 490.92 1583.88 473.88 1543.12 473.88"
          />
        </g>

        <switch>
        <foreignObject width="1000" height="500" transform="translate(750.6 500) ">
          <p xmlns="http://www.w3.org/1999/xhtml" class="cls-12">
          ${e.device_name} <tspan class="cls-16" y="0">${e.codename}</tspan>
          </p>
        </foreignObject>
      </switch>
      </g>
    </svg>
`

  // Writes the .svg files
  let folderPath = path.join(__dirname, 'svg')
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(`Error creating svg directory: ${err.message}`)
      return
    }

    fs.writeFile(
      path.join(folderPath, `${e.codename}.svg`),
      svg_image,
      (err) => {
        if (err) {
          console.log(`Error writing ${e.codename}.svg: ${err.message}`)
          return
        }
      }
    )
  })
}) // Close the loop

console.log(`Banners exported to ./svg`)

// User prompt for svgexport
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Do you want to export SVG banners to PNG? (yes/no): ',
  (answer) => {
    rl.close()

    if (answer.toLowerCase() === 'yes') {
      const pngFolderPath = './png'

      fs.mkdir(pngFolderPath, { recursive: true }, (err) => {
        if (err) {
          console.log(`Error creating png directory: ${err.message}`)
          return
        }
        function processNextItem(index) {
          if (index >= json.length) {
            console.log('All banners exported to PNG. Session ended')
            return
          }

          const e = json[index]
          const svgFilePath = `./svg/${e.codename}.svg`
          const pngFilePath = `${pngFolderPath}/${e.codename}.png`

          exec(
            `svgexport ${svgFilePath} ${pngFilePath}`,
            (err, stdout, stderr) => {
              if (err) {
                console.log(
                  `Error exporting ${svgFilePath} to PNG: ${err.message}`
                )
              } else {
                console.log(`Exported: ${svgFilePath} -> ${pngFilePath}`)
              }
              processNextItem(index + 1)
            }
          )
        }
        processNextItem(0)
      })
    } else {
      console.log('SVG banners not exported to PNG. Session ended')
    }
  }
)
