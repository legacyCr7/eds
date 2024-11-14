async function setupCarouselButtons() {
    const carouselIndicator = document.querySelector('.carousel-indecator');
    if (carouselIndicator) {
        const pElements = carouselIndicator.querySelectorAll('.default-content-wrapper p');
        if (pElements[0]) {
        pElements[0].classList.add('left');
        }
        if (pElements[1]) {
        pElements[1].classList.add('right');
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}
  
async function carousel() {
    await setupCarouselButtons();
    document.querySelector('.left').onclick = () => moveSlide(-1);
    document.querySelector('.right').onclick = () => moveSlide(1);

    let currentSlide = 0;
    const slidesToShow = 3;
    const slides = document.querySelectorAll('.carousel-wrapper .carousel > *');
    const totalSlides = slides.length;
    const track = document.querySelector('.carousel-wrapper .carousel');
    const slideWidth = slides[0].clientWidth;

    function updateCarousel() {
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function moveSlide(direction) {
        currentSlide = (currentSlide + direction * slidesToShow + totalSlides) % totalSlides;
        updateCarousel();
    }
}

carousel();