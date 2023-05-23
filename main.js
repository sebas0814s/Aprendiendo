let slideIndex = 0;
let timeoutID; // Agrega una variable global para almacenar el identificador de tiempo
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    if (slides[i] && slides[i].style) { // condición para verificar si el objeto es definido
      slides[i].style.display = "none";  
    }
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    if (dots[i].className == "dot active") {
      dots[i].className = "dot";
    }
  }
  if (slides[slideIndex-1] && slides[slideIndex-1].style) { // condición para verificar si el objeto es definido
    slides[slideIndex-1].style.display = "block";  
  }
  if (dots[slideIndex-1]) {
    dots[slideIndex-1].className += " active";
  }
  timeoutID = setTimeout(showSlides, 1000); // Almacena el identificador de tiempo en una variable global
}

window.addEventListener("load", function() {
  // Agrega el evento al botón detener
  var stopButton = document.getElementById("stopButton");
  stopButton.addEventListener("click", function() {
    if (timeoutID) { // Comprueba si la presentación de diapositivas se está ejecutando actualmente
      clearTimeout(timeoutID); // Detiene la presentación de diapositivas
      stopButton.innerHTML = "Reanudar presentación"; // Cambia el texto del botón
      timeoutID = null; // Marca la presentación de diapositivas como detenida
    } else {
      showSlides(); // Reanuda la presentación de diapositivas
      stopButton.innerHTML = "Detener presentación"; // Cambia el texto del botón
    }
  });
});







