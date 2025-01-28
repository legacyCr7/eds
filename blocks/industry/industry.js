async function setupCarouselButtons() {
    const carouselIndicator = document.querySelector('.programs .course-description');
    if (carouselIndicator) {
        const pElements = carouselIndicator.querySelectorAll(':scope > div');
        if (pElements[0]) {
        pElements[0].classList.add('program-heading');
        }
        if (pElements[1]) {
        pElements[1].classList.add('duration-cource');
        pElements[2].classList.add('duration-cource');
        pElements[3].classList.add('duration-cource');
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}
async function carousel() {
    await setupCarouselButtons(); 
}

carousel();