let x = 0
let y = 0
// const maxVal = -Math.sin(Math.PI * 2)
const range = 2

for (let y = 0; y < canvas.height; y++) {
    x = 0

    for (let i = 0; i < canvas.width; i++) {
        const color = Math.floor((Math.tan(i / 50) / (Math.atan(y / 80)) + 1) * 255 / 2)
    
        drawLine({from: [x, y], to: [x + 1, y], color: `rgb(${color}, ${color / 2}, ${color * 2 })`})
        x++;
    }
}
