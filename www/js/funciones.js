var botonIniciar = document.getElementById('iniciar');
var botonDetener = document.getElementById('detener');
var divPasos = document.getElementById('numeropasos');
var divCalorias = document.getElementById('numerocalorias');
    

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

function obtenerCalorias(pasos, tiempo, genero, peso){
    var caloriasQuemadas;
    // se obtienen de lo que se ponga en la configuracíón y se calcula con eso
    // se actualiza el html constantemente en base a la fórmula
    // ...la fórmula está pendiente de buscarse

    var divCalorias.innerHTML = caloriasQuemadas + "kcal";
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
        var imagenFlecha = document.getElementById('flecha')

        if(grados > 0 && grados < 90){
            direccion.innerHTML = grados + '° NE';
            imagenFlecha.src = "img/flechaNorte1";
        } else if(grados > 90 && grados < 180){
            direccion.innerHTML = grados + '° SE';
            imagenFlecha.src = "img/flechaNorte3";
        } else if(grados > 180 && grados < 270){
            direccion.innerHTML = grados + '° SO';
            imagenFlecha.src = "img/flechaNorte5";
        } else if(grados > 270 && grados >360){
            direccion.innerHTML = grados + '° NO';
            imagenFlecha.src = "img/flechaNorte7";
        }

        if(grados == 0){
            direccion.innerHTML = grados + '° N';
            imagenFlecha.src = "img/flechaNorte0";
        } else if(grados == 90){
            direccion.innerHTML = grados + '° E';
            imagenFlecha.src = "img/flechaNorte2";
        } else if(grados == 180){
            direccion.innerHTML = grados + '° S';
            imagenFlecha.src = "img/flechaNorte4";
        } else if(grados == 270){
            direccion.innerHTML = grados + '° O';
            imagenFlecha.src = "img/flechaNorte6";
        }
    }

    function onError(compassError){
        alert('Compass error: '+ navigator.compass.clearWatch(watchIcompassError.code));
    }