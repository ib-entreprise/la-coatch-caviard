document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Change d'image toutes les 3 secondes
});

 
// *******************************************
// *********  show presentationDiv *********
// *******************************************
const showPresentationButton = document.querySelector('#showPresentation');
const presentationDiv = document.querySelector('#presentation-text');
presentationDiv.style.marginBottom = '30px'; // Utilisation de 'B' majuscule dans 'marginBottom'
showPresentationButton.addEventListener('click', function () {
    if (presentationDiv.style.display === 'block' || presentationDiv.style.display === '') {        
        presentationDiv.style.display = 'none';
    } else {        
        presentationDiv.style.display = 'block';
    }
});

// ********* show presentationDiv button mobile / desktop *********

function checkScreenWidth() {    
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {        
        showPresentationButton.style.display = 'none';
        presentationDiv.style.display = 'block';
    } else {
        showPresentationButton.style.display = 'block';
        presentationDiv.style.display = 'block';
    }
}
checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);


// *******************************************
// *********  animate presentationDiv *********
// *******************************************

const spanContent = presentationDiv.querySelector('#presentation').textContent;

// Créez un élément de paragraphe pour afficher le texte progressivement
const paragraph = document.createElement('span');

// Ajoutez le paragraphe à la div de présentation
presentationDiv.appendChild(paragraph);
paragraph.style.color='darkblue';

// Fonction pour afficher le texte progressivement
function displayText() {
    let index = 0;
    paragraph.parentElement.style.background='aliceblue';

    function animate() {
        if (index < spanContent.length) {
            paragraph.textContent += spanContent[index];
            index++;
            setTimeout(animate, 250); // Délai de 50 millisecondes entre chaque lettre
        }
    }
    animate();
}

// Délai initial de 5 secondes avant de commencer l'animation
setTimeout(displayText, 100);

// *******************************************
// ********* Modal image *********
// *******************************************
// Sélectionnez toutes les images sur la page
const images = document.querySelectorAll('img');

// Sélectionnez le modal, l'image du modal et le bouton de fermeture
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');
const closeButton = document.getElementsByClassName('close')[0];

// Ajoutez un gestionnaire d'événement à chaque image pour afficher le modal avec l'image correspondante
images.forEach((image) => {
  image.addEventListener('click', function() {
    modal.style.display = 'block'; // Afficher le modal
    modalImg.src = this.src; // Définir l'image du modal sur l'image cliquée
  });
});

// Ajoutez un gestionnaire d'événement pour fermer le modal lorsque l'utilisateur clique sur le bouton de fermeture
closeButton.addEventListener('click', function() {
  modal.style.display = 'none'; // Cacher le modal
});

// Ajoutez un gestionnaire d'événement pour fermer le modal lorsque l'utilisateur clique en dehors de l'image
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; // Cacher le modal si l'utilisateur clique en dehors de l'image
  }
});


