const carouselImage = document.querySelector('movie-list');
const carouselButton = document.querySelector('main-previous-list');
const numberOfImages = document.querySelector('movie-list-item').length;
let imageIndex = 1;
let translateX = 0;

carouselButton.forEach(button => {
    button.addEventListner('click', event => {
        if (event.target.if === 'previous') {
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 300;
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 300;
            }
        }
        carouselImages.style.transform = `translateX(${translateX}px)`;
    })

});