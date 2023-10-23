const bannerImg = document.querySelector(".banner-img");
const arrow_next = document.querySelector(".arrow_right");
const arrow_previous = document.querySelector(".arrow_left");
const bannerDots = document.querySelectorAll(".dot");
const bannerParagraph = document.querySelector("p");

let currentIndex = 0;

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}];

function updateCarousel(){
	bannerImg.setAttribute("src", "assets/images/slideshow/"+slides[currentIndex].image);
	bannerParagraph.innerHTML = slides[currentIndex].tagLine;

	bannerDots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentIndex);
	});
}

bannerDots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentIndex = index; 
		updateCarousel();
	});
});

arrow_previous.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + bannerDots.length) % bannerDots.length;
	updateCarousel();
});

arrow_next.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % bannerDots.length;
	updateCarousel();
});

updateCarousel();