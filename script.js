
alert('inicia el juego');
// selector de elemento


document.querySelectorAll(".opcion").forEach(el => {
    el.addEventListener("click", e => {
      let player = e.target.getAttribute("id");
      console.log("Se ha clickeado el id "+player);
      Number(player);

      if(player == 0) {
        document.getElementById("jugador").src="./assets/puño.png"; 
      }else if(player == 1) {
        document.getElementById("jugador").src="./assets/papel.png"; 
      }else if(player == 2) {
        document.getElementById("jugador").src="./assets/tijera.png"; 
      }


    // enemigo
    let enemy = Math.round(Math.random()*2);
  
    if(enemy == 0) {
      alert("el enemigo eligio piedra");
    }else if(enemy == 1) {
      alert("el enemigo eligio papel");
    }else if(enemy == 2) {
      alert("el enemigo eligio tijera");
    }

    if(enemy == 0) {
        document.getElementById("enemigo").src="./assets/puñoEnemigo.png"; 
      }else if(enemy == 1) {
        document.getElementById("enemigo").src="./assets/papelEnemigo.png"; 
      }else if(enemy == 2) {
        document.getElementById("enemigo").src="./assets/tijeraEnemigo.png"; 
      }

    //resultado
    if(player == enemy){
      document.getElementById("mostar").src="./assets/empate.jpg"; 
      document.getElementById("mensaje").innerHTML='Empate XD';
    }else if (player == 0 && enemy == 2){
      document.getElementById("mensaje").innerHTML='¡Ganaste!';
      document.getElementById("mostar").src="./assets/copa.jpg"; 
    }else if(player == 1 && enemy == 0){
      document.getElementById("mensaje").innerHTML='¡Ganaste!';
      document.getElementById("mostar").src="./assets/copa.jpg"; 
    }else if (player == 2 && enemy == 1){
      document.getElementById("mensaje").innerHTML='¡Ganaste!';
      document.getElementById("mostar").src="./assets/copa.jpg";
    }else{
      document.getElementById("mensaje").innerHTML='¡Perdiste!';
      document.getElementById("mostar").src="./assets/derrota.png"; 
    }

    });
  });

 
  // Ventana modal
var modal = document.getElementById("mostarResultado");

// Botón que abre el modal
var boton = document.getElementById("opciones");

//Boton cerrar modal
var cerrar = document.getElementById("cerrar");

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});


// Si el usuario hace click en el botón "otra vez!", se cierra.
window.addEventListener("click",function(event) {
  if (event.target == cerrar) {
    modal.style.display = "none";
  }
});
