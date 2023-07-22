let radius = 50

for (let i = 0; i < 10000; i++) {
    drawDot({x:canvas.width / 2 + radius * Math.sin(i), 
        y: canvas.height / 2 + radius *  Math.cos(i), color: 'white'})

        radius = 50 + 10 * Math.sin(i / 200)
    }