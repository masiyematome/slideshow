//Selectors

const mainContainer = document.querySelector(".main-container");
const slides = document.querySelectorAll(".slide");
const slideNumber = document.querySelector(".slide-number");
let currentSlideIndex = 0;
const slideInterval = setInterval(moveSlideToNext,3000);

//Event Listeners

mainContainer.addEventListener("click",previousToNext);

//Functions

const updateSlideNumber = function(){
    slideNumber.innerText =  (currentSlideIndex +1) + " / " + (slides.length);
}

function moveSlideToNext(){
    slides[currentSlideIndex].className = "slide";

    if(currentSlideIndex == slides.length-1){
        currentSlideIndex = 0;
    }

    else{
        currentSlideIndex = currentSlideIndex +1;
    }

    slides[currentSlideIndex].className = "slide showing";
    updateSlideNumber();

}

function previousToNext(event){
    const clickedButton = event.target;

    switch(clickedButton.className){
        case "previous-button":

        slides[currentSlideIndex].className = "slide";

            if(currentSlideIndex == 0){
                currentSlideIndex = slides.length-1;
            }

            else{
                currentSlideIndex = currentSlideIndex - 1;
            }

        slides[currentSlideIndex].className = "slide showing";
        updateSlideNumber();

            break;

            case "next-button":
                moveSlideToNext();
                break;
    }
}