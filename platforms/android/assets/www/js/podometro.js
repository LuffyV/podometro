var botonIniciar = document.getElementById('iniciar');
var botonDetener = document.getElementById('detener');

function iniciarPodometro(){
    if(botonIniciar.innerHTML == "Iniciar"){
        botonIniciar.innerHTML = "Reiniciar";
         
        // ... más código

        startWatch();
    } else {
        reiniciarPodometro();
    }
}

function detenerPodometro(){
    botonIniciar.innerHTML = "Iniciar";

    // ... más código

    stopWatch();
}

function reiniciarPodometro(){
    stopWatch();
    startWatch();
}

function obtenerCalorias(pasos, genero, peso){
    var divPasos = document.getElementById('numeropasos');
    var divCalorias = document.getElementById('numerocalorias');

    var caloriasQuemadas;

    // sin usar la configuración es solo 1 caloría = 20 pasos
    caloriasQuemadas = divPasos.value()/20;
    divCalorias.innerHTML = caloriasQuemadas + "kcal";
}