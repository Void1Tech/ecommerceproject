let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function moveSlide(n) {
    slideIndex += n;

    if (slideIndex > totalSlides - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;

    

}
