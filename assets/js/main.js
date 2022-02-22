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

const click = document.querySelector('.click')

click.addEventListener('click', () => {
    subnavContentHiding()
})

// Bieżący rok
const currentYear = document.querySelector('.date')
const date = new Date()
currentYear.textContent = date.getFullYear()


//przechwytuje scrolowonie i procenty
$(window).scroll(function () {
    let wintop = $(window).scrollTop(), 
    docheight = $(document).height(), 
    winheight = $(window).height()
    let scrolled = (wintop / (docheight - winheight)) * 100

    if (scrolled == 0) $('.header-container').css('box-shadow', 'none')
    if (scrolled > 0) $('.header-container').css('box-shadow', '0 1px 10px 0 rgba(0, 0, 0, .1)')
    if (scrolled > 1.5) $('.header-container').css('box-shadow', '0 1px 10px 0 rgba(0, 0, 0, .2)')
    if (scrolled > 3) $('.header-container').css('box-shadow', '0 1px 10px 0 rgba(0, 0, 0, .3)')
    if (scrolled > 6) $('.header-container').css('box-shadow', '0 1px 10px 0 rgba(0, 0, 0, .4)')

    $('.scroll-line').css('width', (scrolled + '%'))
})