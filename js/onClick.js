//Desafio
function imgSwitch() {
  var currentLocation = window.location.origin;
  // Handling for http:// and https://
  if (window.location.protocol == 'http:' || window.location.protocol == 'https:') {
    if (document.getElementById("imgClickAndChange").src === currentLocation + "/img/apagada.jpg") {
      document.getElementById("imgClickAndChange").src = currentLocation + "/img/acesa.jpg";
      console.log("Acesa")
    }
    else if (document.getElementById("imgClickAndChange").src === currentLocation + "/img/acesa.jpg") {
      document.getElementById("imgClickAndChange").src = currentLocation + "/img/quebrada.jpg";
      console.log("Quebrada")
    }
    else {
      document.getElementById("imgClickAndChange").src = currentLocation + "/img/apagada.jpg";
      console.log("Apagada")
    }
  }

  // Handling for File://
  else {
    var text = document.getElementById("imgClickAndChange").src;
    if (text.search("apagada") === 133) {
      document.getElementById("imgClickAndChange").src = text.replace("apagada", "acesa");
      console.log("Acesa")
    }
    else if (text.search("acesa") === 133) {
      document.getElementById("imgClickAndChange").src = text.replace("acesa", "quebrada");
      console.log("Quebrada")
    }
    else {
      document.getElementById("imgClickAndChange").src = text.replace("quebrada", "apagada");
      console.log("Apagada")
    }
  }
}