const clamp = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

const controller = new ScrollMagic.Controller()
let vh = window.innerHeight

Array.from(document.querySelectorAll('section')).forEach((section, i) => {
    // Skip first element
    if (i === 0) {
        return;
    }
    const scene = new ScrollMagic.Scene({
        triggerElement: section,
        duration: vh
    })
    .on('progress', ({ progress }) => {
        section.style.fontWeight = clamp(progress, 0, 1, 100, 900)
        section.style.letterSpacing = `${clamp(progress, 0, 1, -16, 16)}px`
    })
    // .addIndicators({ name: `section ${i+1}`})
    .addTo(controller)
})

window.addEventListener('resize', () => {
    vh = window.innerHeight
})