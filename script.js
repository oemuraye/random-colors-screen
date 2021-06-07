const colorBtn = document.querySelector('#btn')
const boxes = document.querySelectorAll('.box')

let running = false

function getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++){
        color +=letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function start() {
    if(running) {
        boxes.forEach(color => {
            color.style.background = getRandomColor()
        })
        setTimeout(start, 500)
    }
}

colorBtn.addEventListener('click', () => {
    colorBtn.innerText = 'STOP'
    if(running){
        running = false
        colorBtn.innerText = 'Change Color'
    } else {
        running = true
        start()
    }
})