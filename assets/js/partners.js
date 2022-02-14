// menu partnerów
const nexwell = document.querySelectorAll('#nexwell')
const eaton = document.querySelectorAll('#eaton')
const legrand = document.querySelectorAll('#legrand')
const satel = document.querySelectorAll('#satel')
const rightCol = document.querySelectorAll('#right-col')

nexwell[0].addEventListener('click', () => {
    hideActive()
    addActive(nexwell)

})
eaton[0].addEventListener('click', () => {
    hideActive()
    addActive(eaton)
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