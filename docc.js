var tp = document.querySelector('#total');
var plusButtons = document.querySelectorAll('#plus');
var minusButtons = document.querySelectorAll('#minus');
var quantityElements = document.querySelectorAll('#quantity');
var priceElements = document.querySelectorAll('#price');
var heart = document.querySelectorAll('#hardd');
var trach = document.querySelectorAll('#trash');
var cards= document.querySelectorAll('.card');
console.log(cards)
for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", function add() {
        quantityElements[i].innerHTML++;
       return updateTotal();
    });
}

for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", function minus() {
        if (quantityElements[i].innerHTML > 0) {
            quantityElements[i].innerHTML--;
        }
       return updateTotal();
    });
}

function updateTotal() {
    var total = 0;
    for (let i = 0; i < quantityElements.length; i++) {
        total += quantityElements[i].innerHTML * priceElements[i].innerHTML;
    }
    tp.innerHTML = total;
    return tp
}

for (let i = 0; i<heart.length; i++){
    heart[i].addEventListener("click", function hearts(){
   
       if(heart[i].style.color==="red"){
        heart[i].style.color="black"
       } else{
        heart[i].style.color="red"
       }

    })
}

for(let i=0; i<trach.length; i++){
    trach[i].addEventListener("click",function trach(){
      return cards[i].remove()
    })
}


document.addEventListener('DOMContentLoaded', function () {
    const cardImages = document.querySelectorAll('.card-img-top');

    cardImages.forEach(image => {
        image.addEventListener('click', function () {
            const imageUrl = this.src;
            document.body.style.backgroundImage = `url('${imageUrl}')`;
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('input[type="search"]');
    const cards = document.querySelectorAll('.card');
    const selectedCard = document.getElementById('selected-card');
    let cardFound = false;

    document.querySelector('button[type="submit"]').addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const cardText = card.querySelector('.card-text').textContent.toLowerCase();

            if (cardText.includes(searchTerm)) {
                // Animation de déplacement au milieu de la fenêtre
                selectedCard.style.backgroundImage = `url('${card.querySelector('.card-img-top').src}')`;
                selectedCard.style.transition = 'transform 0.5s ease-in-out';
                selectedCard.style.transform = 'translate(-50%, -50%) rotate(360deg) scale(1)';
                selectedCard.style.animation = 'moveCard 1s ease-in-out';

                // Style pour afficher en grande taille
                card.style.width = '25rem';
                card.style.height = '30rem';
                card.style.borderRadius = '20px';
                card.style.transition = 'all 0.5s ease-in-out';

                cardFound = true;
            } else {
                // Réinitialiser le style
                card.style.width = '18rem';
                card.style.height = '';
                card.style.borderRadius = '';
                card.style.transition = 'all 0.5s ease-in-out';
            }
        });

        // Réinitialiser l'animation de déplacement si aucune carte n'est trouvée
        if (!cardFound) {
            selectedCard.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(0)';
            selectedCard.style.animation = 'moveBack 1s ease-in-out';
        }
    });

    // Utiliser setInterval pour vérifier constamment si la carte doit être masquée
    setInterval(function () {
        // Masquer la carte si elle est affichée et aucun clic n'est sur la carte elle-même ou sur la zone de recherche
        if (selectedCard.style.transform === 'translate(-50%, -50%) rotate(360deg) scale(1)' &&
            !selectedCard.contains(document.activeElement) && document.activeElement !== searchInput) {
            selectedCard.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(0)';
            selectedCard.style.animation = 'moveBack 1s ease-in-out';
        }
    }, 100);
});
