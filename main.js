onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove('not-loaded')
    clearTimeout(c)
  }, 1000)
}

const musicButton = document.getElementById('music-button')
const music = document.getElementById('love-music')

musicButton.addEventListener('click', () => {
  if (music.paused) {
    music.play()
    musicButton.textContent = '❤️'
  } else {
    music.pause()
    musicButton.textContent = '💝'
  }
})

const phrases = [
  'Día del Amor y la Amistad!❤️',
  'Não clique no coração ainda',
  'Valentine’s Day',
  'Dia dos Namorados',
  'Separei uma música e um poema',
  'Um poema do romantismo e uma música romântica',
  'Tu me chamas - Byron (poema)',
  'Please Notice - Christian Akridge (música)',
  'Clique no coração em 3...',
  '2...',
  '1...',
  'Em momentos de delícia,',
  'Extática, embevecida,',
  'Numa voz, toda carícia,',
  'Tu me chamas: “Minha vida!”',
  'Sentira, à frase tão doce,',
  'Exultar-me o coração,',
  'Se a nossa existência fosse',
  'De perpétua duração.',
  'Levam-nos esses momentos',
  'Ao fim comum dos mortais.',
  'Ou não saiam tais acentos',
  'Dos lábios teus nunca mais,',
  'Ou, mudando a frase terna,',
  '“Minha alma”, podes dizer.',
  'Pois a alma não morre; eterna',
  'Qual meu amor, há de ser.',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'I am in love with you',
  'Eu Te Amo!❤️',
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

document.addEventListener('mousemove', function (e) {
  let body = document.getElementById('overlay-body')
  let flower = document.createElement('div')
  flower.setAttribute('id', 'mouse-flower')
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
