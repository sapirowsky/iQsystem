const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active


        const halfActiveSlide = slides.querySelector("[data-halfactive]")
        let newHalfindex = [...slides.children].indexOf(halfActiveSlide) + offset
        if (newHalfindex < 0) newHalfindex = slides.children.length - 1
        if (newHalfindex >= slides.children.length) newHalfindex = 0

        slides.children[newHalfindex].dataset.halfactive = true
        delete halfActiveSlide.dataset.halfactive
    })
    button.addEventListener("mouseover", () => {
        clearInterval(autoSlideChange)
    })
})
const button = document.querySelector("[data-carousel-button]")
const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")


const autoSlideChange = setInterval(() => {
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + 1
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    const halfActiveSlide = slides.querySelector("[data-halfactive]")
    let newHalfindex = [...slides.children].indexOf(halfActiveSlide) + 1
    if (newHalfindex < 0) newHalfindex = slides.children.length - 1
    if (newHalfindex >= slides.children.length) newHalfindex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    slides.children[newHalfindex].dataset.halfactive = true
    delete halfActiveSlide.dataset.halfactive

}, 5000)
