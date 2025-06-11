document.addEventListener('mousemove', function (e) {
  let body = document.querySelector('body')
  let flower = document.createElement('div')
  let x = e.offsetX
  let y = e.offsetY

  flower.style.left = x + 'px'
  flower.style.top = y + 'px'

  let size = Math.random() * 50
  flower.style.width = 20 + size + 'px'
  flower.style.height = 20 + size + 'px'

  let rotation = Math.random() * 360
  flower.style.transform = `rotate(${rotation}deg)`

  body.appendChild(flower)

  setTimeout(function () {
    flower.remove()
  }, 4000)
})

const musicButton = document.getElementById('music-button')
const music = document.getElementById('love-music')

musicButton.addEventListener('click', () => {
  if (music.paused) {
    music.play()
    musicButton.textContent = '⏸️'
  } else {
    music.pause()
    musicButton.textContent = '🎵'
  }
})

const phrases = [
  'Desde que te conheci, tudo mudou.',
  'Seu sorriso ilumina os meus dias.',
  'Cada momento ao seu lado é mágico.',
  'Quero viver muitos mais ao seu lado.',
  'Feliz Día del Amor y la Amistad! ❤️'
]

const textElement = document.getElementById('animated-text')
let currentPhrase = 0

function showNextPhrase() {
  if (currentPhrase < phrases.length) {
    textElement.textContent = ''
    let phrase = phrases[currentPhrase]
    let index = 0

    const typing = setInterval(() => {
      if (index < phrase.length) {
        textElement.textContent += phrase[index]
        index++
      } else {
        clearInterval(typing)
        currentPhrase++
        setTimeout(showNextPhrase, 2000)
      }
    }, 80)
  }
}

window.addEventListener('load', showNextPhrase)
