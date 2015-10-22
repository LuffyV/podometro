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

function obtenerPasos(){
    // creo que esto lo vamos a hacer con un plugin, es mucho desmadre hacerlo desde

}

function obtenerCalorias(pasos, genero, peso){
    var divPasos = document.getElementById('numeropasos');
    var divCalorias = document.getElementById('numerocalorias');
    var caloriasQuemadas;

    // sin usar la configuración es solo 1 caloría = 20 pasos
    caloriasQuemadas = divPasos.value()/20;
    divCalorias.innerHTML = caloriasQuemadas + "kcal";
}


/* -------- A partir de aquí está todo lo de cambiar la imagen -------- */







/* -------- A partir de aquí está todo lo de la brujula --------------- */
var gWatchID = null;
document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady(){
        startWatch();
    }

    function startWatch(){
        // se actualiza cada 10 milisegundos
        var options = {frecuency: 10};
        if(!gWatchID){
            gWatchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    }

    function stopWatch(){
         if(gWatchID){
            navigator.compass.clearWatch(watchID)
            gWatchID = null;
        }
    }

    function onSuccess(heading){
        var direccion = document.getElementById('direccion');
        var grados = heading.magneticHeading;
        var imagenFlecha = document.getElementById('flecha');

        imagenFlecha.style.transform = "rotate("+ grados + "deg)";

        if(grados > 0 && grados < 90){
            direccion.innerHTML = grados + '° NE';
        } else if(grados > 90 && grados < 180){
            direccion.innerHTML = grados + '° SE';
        } else if(grados > 180 && grados < 270){
            direccion.innerHTML = grados + '° SO';
        } else if(grados > 270 && grados >360){
            direccion.innerHTML = grados + '° NO';
        }

        if(grados == 0){
            direccion.innerHTML = grados + '° N';
        } else if(grados == 90){
            direccion.innerHTML = grados + '° E';
        } else if(grados == 180){
            direccion.innerHTML = grados + '° S';
        } else if(grados == 270){
            direccion.innerHTML = grados + '° O';
        }

    }

    function onError(compassError){
        alert('Compass error: '+ navigator.compass.clearWatch(watchIcompassError.code));
    }