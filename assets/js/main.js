// Tworzenie zmiennych potrzebnych do pokazywania i chowania menu na telefonach
const mobileBtn = document.querySelector('#mobile-cta')
mobileBtnExit = document.querySelector('#mobile-exit')
nav = document.querySelector('nav')
//nasluchiwanie powyzszych zmiennych i po kliknieciu pokazywanie lub chowanie menu
mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')
})
mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})

// Tworzenie zmiennych szukajacych glownych divov menu
const divClick1 = document.querySelector('#div-click1')
divClick2 = document.querySelector('#div-click2')
divClick3 = document.querySelector('#div-click3')
divClick4 = document.querySelector('#div-click4')

// Tworzenie zmiennych szukajach divov w ktorych jest kontent podmenu
const subnavContent1 = document.querySelector('#subnav-content1')
subnavContent2 = document.querySelector('#subnav-content2')
subnavContent3 = document.querySelector('#subnav-content3')
subnavContent4 = document.querySelector('#subnav-content4')

// Tworzenie zmiennych szukajach strzalek
const i1 = document.querySelector('#i1')
i2 = document.querySelector('#i2')
i3 = document.querySelector('#i3')
i4 = document.querySelector('#i4')

// Funkcja sprawdza czy jakies podmenu jest otwarte jesli tak chowa je i odrwaca spowrotem strzalke (usuwajac klasy)
function subnavContentHiding() {
    if (document.querySelector('.subnav-content-active')) {
        document.querySelector('.subnav-content-active').classList.remove('subnav-content-active')
        document.querySelector('.rotated').classList.remove('rotated')
    }
}
// Poniższe linie nasluchuja czy uzytkownik kliknal w 1 z 4 opcji menu
// Po kliknieciu uruchamiana jest powyzsza funkcja oraz wysuwane podmenu
divClick1.addEventListener('click', () => {
    if (subnavContent1.classList.contains('subnav-content-active')) {
        subnavContentHiding()
    } else {
        subnavContentHiding()
        i1.classList.add('rotated')
        subnavContent1.classList.add('subnav-content-active')
    }
})
divClick2.addEventListener('click', () => {
    if (subnavContent2.classList.contains('subnav-content-active')) {
        subnavContentHiding()
    } else {
        subnavContentHiding()
        i2.classList.add('rotated')
        subnavContent2.classList.add('subnav-content-active')
    }
})
divClick3.addEventListener('click', () => {
    if (subnavContent3.classList.contains('subnav-content-active')) {
        subnavContentHiding()
    } else {
        subnavContentHiding()
        i3.classList.add('rotated')
        subnavContent3.classList.add('subnav-content-active')
    }
})
divClick4.addEventListener('click', () => {
    if (subnavContent4.classList.contains('subnav-content-active')) {
        subnavContentHiding()
    } else {
        subnavContentHiding()
        i4.classList.add('rotated')
        subnavContent4.classList.add('subnav-content-active')
    }
})

const bodyClick = document.querySelector('.click')

bodyClick.addEventListener('click', () => {
    subnavContentHiding()
})




// menu partnerów
const nexwell = document.querySelectorAll('#nexwell')
const moeller = document.querySelectorAll('#moeller')
const legrand = document.querySelectorAll('#legrand')
const satel = document.querySelectorAll('#satel')
const rightCol = document.querySelectorAll('#right-col')

nexwell[0].addEventListener('click', () => {
    hideActive()
    addActive(nexwell)

})
moeller[0].addEventListener('click', () => {
    hideActive()
    addActive(moeller)
})
legrand[0].addEventListener('click', () => {
    hideActive()
    addActive(legrand)
})
satel[0].addEventListener('click', () => {
    hideActive()
    addActive(satel)
})

function hideActive() {
    if (document.querySelector('.active')) {
        const active = document.querySelectorAll('.active')
        active.forEach(e => {
            e.classList.remove('active')
        })
    }
}
function addActive(item) {
    item.forEach(element => {
        element.classList.add('active')
    })
}