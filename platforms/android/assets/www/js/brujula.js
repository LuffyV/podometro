var gWatchID = null;

document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady(){
        startWatch();
    }

    function startWatch(){
        var options = {frecuency: 50};
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

        if(heading.magneticHeading  > 0 && heading.magneticHeading < 90){
            direccion.innerHTML = "Heading: " + heading.magneticHeading  + '° NO';
        }
        if(heading.magneticHeading  > 90 && heading.magneticHeading < 180){
            direccion.innerHTML = "Heading: " + heading.magneticHeading  + '° SO';
        }
        if(heading.magneticHeading  > 180 && heading.magneticHeading < 270){
            direccion.innerHTML = "Heading: " + heading.magneticHeading  + '° SE';
        }
        if(heading.magneticHeading  > 270 && heading.magneticHeading < 360){
            direccion.innerHTML = "Heading: " + heading.magneticHeading  + '° NE';
        }

        if(heading.magneticHeading  == 0){
            direccion.innerHTML = "Heading: " + heading.magneticHeading  + '° N';
        }
        if(heading.magneticHeading  == 90){
            direccion.innerHTML = "Heading: " + heading.magneticHeading  + '° E';
        }
        if(heading.magneticHeading  == 180){
            direccion.innerHTML = "Heading: " + heading.magneticHeading  + '° S';
        }
        if(heading.magneticHeading  == 270){
            direccion.innerHTML = "Heading: " + heading.magneticHeading  + '° O';
        }

        var valorReal = (heading.magneticHeading) * -1;

        var imagenFlecha = document.getElementById("flecha");
        imagenFlecha.style.transform = "rotate("+ valorReal + "deg)";

    }

    function onError(compassError){
        alert('Compass error: '+ navigator.compass.clearWatch(watchIcompassError.code));
    }