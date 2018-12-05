recursiveCircle = (x, y, radius) => {
    if (radius > 1) {
        drawCircle({x: x + radius / 2, y, radius: radius / 2, color: 'white'})
        drawCircle({x: x - radius / 2, y, radius: radius / 2, color: 'white'})

        recursiveCircle(x, y, radius * 0.9)
    }
}

recursiveRect = (x, y, width, height) => {
    if (width > 1) {
        drawRect({x: x + width / 2, y: y - height / 4, width: width / 2, height: height / 2, color: 'white'})
        drawRect({x: x - width, y: y - height / 4, width: width / 2, height: height / 2, color: 'white'})

        recursiveRect(x, y, width * 0.9, height * 0.9)
    }
}

recursiveCircle(canvas.width / 2, canvas.height / 2, 300)
recursiveRect(canvas.width / 2, canvas.height / 2, 300, 300)