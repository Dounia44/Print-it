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
	}
]

let currentSlide = 0; 											//Déclarer la variable qui contient la position de la diapositive actuellement affiché(i = 0, je suis à l'image 0)
const bannerImg = document.querySelector(".banner-img");		//Cibler l'image dans la bannière
const bannerText = document.querySelector("#banner p");			//Cibler le texte dans la bannière
const arrowLeft = document.querySelector(".arrow_left");		//Cibler la flèche gauche
const arrowRight = document.querySelector(".arrow_right");		//Cibler la flèche droite

//---Je rajoute les points sous le carrousel---
const dotsContainer = document.querySelector(".dots");  		//Cibler le conteneur des bullet(dot)s

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");				//Crée un élément <di> pour représenter un point
	dot.classList.add("dot");								//Ajoute la classe CSS "dot" au point

	if (i === 0) {											//Si c'est le premier point (i = 0)
		dot.classList.add("dot_selected");					//Ajoute la classe "dot_selected" pour l’activer visuellement
	}

	dotsContainer.appendChild(dot);	 						//Ajoute le/les point(s) au conteneur dans le HTML
}

const dots = document.querySelectorAll(".dot");				//Récupère tous les éléments ".dot" 

console.log(dots);											//Affiche les dots dans la console (pour vérifier qu'ils existent)


//---Flèche gauche---
arrowLeft.addEventListener("click" , () => {										

	dots[currentSlide].classList.remove("dot_selected");								

	currentSlide--;																	//Je décrémente l'index de la diapo

	if (currentSlide <0) {															// Si l'index devient inférieur à 0, on revient à la dernière diapositive (slides.length - 1)
		currentSlide = slides.length -1;										
	}

	dots[currentSlide].classList.add("dot_selected");								

	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;		

	bannerText.innerHTML = slides[currentSlide].tagLine;							
})

//---Flèche droite--
arrowRight.addEventListener("click" , () => {										//Ajouter un écouteur de clic sur la fléche droite

	dots[currentSlide].classList.remove("dot_selected");								// 1. Je supprime la class "dot_selected" de la dot actuelle 

	currentSlide++; 																// 2. J'incrémente l'index de la diapo

	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}

	dots[currentSlide].classList.add("dot_selected");								// 3. J'ajoute la class "dot_selected" de la dot actuelle 

	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;		// 4. On va chercher le lien de l'image dans le tableau Slides et on modifie l'attribut "src" 

	bannerText.innerHTML = slides[currentSlide].tagLine;							// 5. On va chercher le tagLine de l'image dans le tableau Slides et on l'injecte ds le selecteur "p"
})
		
