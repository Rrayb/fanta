// Liste des images de boissons
const drinks = [
    'image/canette.png',
    'image/rasengan.png',
    'image/verre.png',
    'image/bouteile.png',
    'image/zero.png'
];

let currentDrinkIndex = 0;

const carouselDisplay = document.getElementById('carousel-display');
const changeBtn = document.querySelector('.change');
const changeLeftBtn = document.querySelector('.changes');

// Fonction pour afficher la boisson actuelle
function displayDrink() {
    const img = carouselDisplay.querySelector('img');
    img.src = drinks[currentDrinkIndex];
    img.alt = `Boisson ${currentDrinkIndex + 1}`;
}

// Bouton suivant (flèche droite)
changeBtn.addEventListener('click', () => {
    currentDrinkIndex = (currentDrinkIndex + 1) % drinks.length;
    displayDrink();
});

// Bouton précédent (flèche gauche)
changeLeftBtn.addEventListener('click', () => {
    currentDrinkIndex = (currentDrinkIndex - 1 + drinks.length) % drinks.length;
    displayDrink();
});

// Initialiser avec la première boisson
displayDrink();
