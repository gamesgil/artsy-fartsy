const getRandom = (from, to) => {
    return Math.floor(Math.random() * (to - from)) + from
}

const drawLine = ({from, to, color = 'black'}) => {
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(from[0], from[1])
    ctx.lineTo(to[0], to[1])
    ctx.stroke()
}

const drawRect = ({x, y, width, height, color = 'black'}) => {
    ctx.strokeStyle = color
    ctx.rect(x, y, width, height)
    ctx.stroke()
}

const drawCircle = ({x, y, radius, width = 1, color = 'black'}) => {
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.stroke()
}

const drawDot = ({x, y, color = 'black'}) => {
    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.fillRect(x, y, 1, 1)
}

const getRandomColor = _ => {
    const r = getRandom(0, 255)
    const g = getRandom(0, 255)
    const b = getRandom(0, 255)

    return `rgb(${r}, ${g}, ${b})`
}

const getRandomGrayscale = _ => {
    const c = getRandom(0, 255)

    return `rgb(${c}, ${c}, ${c})`
}

const clear = (color = 'black') => {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
}