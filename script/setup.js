const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const mirror = document.getElementById('mirror');
const btn = document.getElementById("btn-download")

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height)

mirror.width = canvas.width
mirror.height = canvas.height


download = _ => {
    const dt = canvas.toDataURL('image/jpeg');
    btn.href = dt;
}

btn.addEventListener('click', download.bind(this))