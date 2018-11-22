const sldDensity = document.getElementById("density")
const sldWidth = document.getElementById("width")
const sldFactorX = document.getElementById("factorX")
const sldFactorY = document.getElementById("factorY")
const sldRadius = document.getElementById("radius")

let x = canvas.width / 2
let y = canvas.height / 2

const radius = getRandom(0, canvas.width / 2)

refresh = ({density = sldDensity.value, 
            width = sldWidth.value,
            factorX = sldFactorX.value, 
            factorY = sldFactorY.value,
            radius = sldRadius.value}) => {
    clear()

    for (let i = 0; i < density; i++) {
        drawCircle({x: x + Math.sin(i) * factorX, y: y + Math.cos(i) * factorY, radius, width, color: 'gray'})
    }
}

sldDensity.oninput = e => {
    refresh({density: e.target.value})
}

sldWidth.oninput = e => {
    refresh({width: e.target.value})
}

sldFactorX.oninput = e => {
    refresh({factorX: e.target.value})
}

sldFactorY.oninput = e => {
    refresh({factorY: e.target.value})
}

sldRadius.oninput = e => {
    refresh({radius: e.target.value})
}

refresh({density: sldDensity.value, width: sldWidth.value})