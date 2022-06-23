const nombreHome = document.querySelector('#nombre-home')
const nombreGuest = document.querySelector('#nombre-guest')

const displayHome = document.querySelector('#display-home')
const displayGuest = document.querySelector('#display-guest')

const homePuntos1 = document.querySelector('#home-puntos-1')
const homePuntos2 = document.querySelector('#home-puntos-2')
const homePuntos3 = document.querySelector('#home-puntos-3')

const guestPuntos1 = document.querySelector('#guest-puntos-1')
const guestPuntos2 = document.querySelector('#guest-puntos-2')
const guestPuntos3 = document.querySelector('#guest-puntos-3')

const btnStart = document.querySelector('#btn-start')

let puntosHome = 0
let puntosGuest = 0

function renderHomeDisplay(num) {
  displayHome.textContent = num
  colorGanador()
}
function renderGuestDisplay(num) {
  displayGuest.textContent = num
  colorGanador()
}

homePuntos1.addEventListener('click', function() {
  puntosHome++
  renderHomeDisplay(puntosHome)
})
homePuntos2.addEventListener('click', function() {
  puntosHome += 2
  renderHomeDisplay(puntosHome)
})
homePuntos3.addEventListener('click', function() {
  puntosHome += 3
  renderHomeDisplay(puntosHome)
})

guestPuntos1.addEventListener('click', function() {
  puntosGuest++
  renderGuestDisplay(puntosGuest)
})
guestPuntos2.addEventListener('click', function() {
  puntosGuest += 2
  renderGuestDisplay(puntosGuest)
})
guestPuntos3.addEventListener('click', function() {
  puntosGuest += 3
  renderGuestDisplay(puntosGuest)
})

function colorGanador() {
  if (puntosHome > puntosGuest) {
    nombreHome.classList.remove("rojo")
    nombreHome.classList.remove("amarillo")
    nombreHome.classList.add("verde")

    nombreGuest.classList.remove("verde")
    nombreGuest.classList.remove("amarillo")
    nombreGuest.classList.add("rojo")
  } else if (puntosHome < puntosGuest) {
    nombreHome.classList.remove("verde")
    nombreHome.classList.remove("amarillo")
    nombreHome.classList.add("rojo")

    nombreGuest.classList.remove("rojo")
    nombreGuest.classList.remove("amarillo")
    nombreGuest.classList.add("verde")
  } else {
    nombreHome.classList.remove("verde")
    nombreHome.classList.remove("rojo")
    nombreHome.classList.add("amarillo")

    nombreGuest.classList.remove("rojo")
    nombreGuest.classList.remove("verde")
    nombreGuest.classList.add("amarillo")
  }
}

btnStart.addEventListener('click', function() {
  puntosHome = 0
  puntosGuest = 0
  renderHomeDisplay(puntosHome)
  renderGuestDisplay(puntosGuest)
})