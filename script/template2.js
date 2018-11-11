let x = canvas.width / 2
let y = canvas.height / 2

for (let i = 0; i < 50; i++) {
    const radius = getRandom(0, canvas.width / 2)
    drawCircle({x: x + Math.cos(i) * 50, y: y + Math.sin(i) * 50, radius: 40, color: 'gray'})

    // x += 5


}
