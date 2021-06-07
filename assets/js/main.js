let sectionElement = document.createElement('section');
sectionElement.id = "snakeField";

for (let i = 0; i < 100; i++) {
    let divELement = document.createElement('div')
    divELement.classList.add('item')
    sectionElement.appendChild(divELement)
}
document.querySelector('body').appendChild(sectionElement);

function randomBG() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + a + ", " + b + ", " + c + ")";
    let color = bgColor[Math.floor(Math.random() * bgColor.length)];
    return bgColor;
}

document.getElementById('snakeField').addEventListener('mouseover', (e) => {
    e.target.style.background = randomBG()
    setTimeout(() => {
        e.target.style.background = "lightblue"
    }, 1000)
})


