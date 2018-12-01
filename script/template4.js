
let radius = 200

// drawDot({x: 100, y: 100, color: 'white'})
// drawCircle({x: 100, y: 100, radius: 50, color: 'white'})

let factorX = 1
let factorY = 100

const draw = _ => {
    let x = 0
    let y = 0
    
    clear()

    for (let i = 0; i < 5000; i++) {
        drawDot({x: x + canvas.width / 2 + radius * Math.sin(i / factorX), 
            y: canvas.height / 2 + radius *  Math.cos(i / factorY), color: 'white'})
    
        // radius = Math.max(radius - 0.01, 0)
        // radius = 100 * Math.cos(i)
        // radius -= 0.005
    }

    // radius -= 0.1
    factorX = Math.min(100, factorX + 0.1)
    factorY = Math.max(1, factorY - 0.1)
}

draw()
 setInterval(_ => draw(), 200)
