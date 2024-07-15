// Sélectionnez le bouton avec la classe ".btn"
var btn = document.querySelector(".btn");

// Ajoutez un écouteur d'événement pour le clic sur le bouton
btn.addEventListener('click', function() {
    // Sélectionnez tous les éléments input
    var inputs = document.querySelectorAll("input");

    // Parcourez chaque input et réinitialisez sa valeur à une chaîne vide ("")
    inputs.forEach(function(input) {
        input.value = "";
    });

    // Réinitialisez la valeur de l'élément avec l'identifiant "message" à une chaîne vide ("")
    var message = document.getElementById("message");
    message.value = "";
});

// Ajoutez un écouteur d'événement pour soumettre le formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Affiche une alerte pour indiquer que le message a été envoyé
    alert('Message envoyé!');
});



