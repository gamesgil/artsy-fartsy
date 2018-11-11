const getRandom = (from, to) => {
    return Math.floor(Math.random() * (to - from)) + from
}

const drawLine = ({from, to}) => {
    ctx.beginPath()
    ctx.moveTo(from[0], from[1])
    ctx.lineTo(to[0], to[1])
    ctx.stroke()
}

const drawCircle = ({x, y, radius, color = 'black'}) => {
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.stroke()
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
