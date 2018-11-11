
const drawZigZag = _ => {
    let x = 0
    let y = Math.floor(Math.random() * canvas.height)
    let counter = 0
    
    ctx.strokeStyle = getRandomColor()
    
    while (x < canvas.width && y >= 0 && y <= canvas.height && counter++ < 100) {
        let offsetX = 0
        let offsetY = 0
    
        offsetX = 20
        const rand = Math.floor(Math.random() * 2)
        offsetY = rand === 0 ? 20 : -20
    
        drawLine({from: [x, y], to: [x + offsetX, y + offsetY]})
    
        x += offsetX
        y += offsetY
    }
}

const drawStairs = _ => {
    let x = 0
    let y = Math.floor(Math.random() * canvas.height)
    let counter = 0
    ctx.strokeStyle = getRandomGrayscale()
    
    while (x < canvas.width && y >= 0 && y <= canvas.height && counter++ < 100) {
        let offsetX = 0
        let offsetY = 0
    
        if (counter % 2 === 0) {
            offsetX = 20
        } else {
            const rand = Math.floor(Math.random() * 2)
            offsetY = rand === 0 ? 20 : -20
        }
    
        drawLine({from: [x, y], to: [x + offsetX, y + offsetY]})
    
        x += offsetX
        y += offsetY
    }
}

for (let i = 0; i < 550; i++) {
    drawZigZag()
    drawStairs()
}


