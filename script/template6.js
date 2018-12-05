
const width = 80
const height = 108

const drawTable = _ => {
    const table = document.createElement('table')
    const tBody = document.createElement('tbody')
    
    table.appendChild(tBody)
    
    for (let i = 0; i < height; i++) {
        const row = document.createElement('tr')
    
        tBody.appendChild(row)
    
        for (let j = 0; j < width; j++) {
            const td = document.createElement('td')
            row.appendChild(td)
        }
    }
    
    document.body.insertBefore(table, document.body.children[0])
}

const getCell = idx => {
    return document.querySelectorAll('td')[idx]
}

drawTable()

// document.getElementById('myCanvas').style.visibility = 'hidden'
canvas.width = width
canvas.height = height
clear('pink')
const img = document.getElementById('image')

ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)

console.log(canvas.width / width)
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {0
        const data = ctx.getImageData(x * canvas.width / width, y * canvas.height / height, 1, 1).data
        const color = `rgb(${data[0]}, ${data[1]}, ${data[2]})`

        getCell(y * width + x).style.background = color
    }
}
