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

let currentSlide = 0; 			//Déclarer la varible qui Contien la position de la diapositive actuellement affiché(i = 0, je suis à l'image 0)
							

//Je cible les flèches 
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

arrowLeft.addEventListener('click' , () => {
	console.log('Flèche gauche cliquée')
})

arrowRight.addEventListener('click' , () => {
	console.log('Flèche droite cliquée')
})
		
//Je rajoute les points sous le carrousel
const dotsContainer = document.querySelector('.dots')  

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div')	// Crée un petit point
	dot.classList.add('dot')					// Ajoute la classe CSS "dot"

	if (i === 0) {								
		dot.classList.add('dot_selected')		// Active le premier point par défaut
	}

	dotsContainer.appendChild(dot)		 		// Ajoute le/les point(s) au conteneur
}