     var pictureSource;
        var destinationType;
        document.addEventListener("deviceready",onDeviceReady,false);

        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }

        function onPhotoDataSuccess(imageData){
            var smallImage=document.getElementById("banner");
            smallImage.style.display='block';
            smallImage.src="data:image/jpeg;base64,"+imageData;
        }

        function onPhotoURISuccess(imageURI){
            var largeImage=document.getElementById("banner");
            largeImage.style.display='block';
            largeImage.src=imageURI;
        }

        function onFail(message){
            alert("Fallo al iniciar la camara"+message);
        }

        function capturePhoto(){
            navigator.camera.getPicture(onPhotoDataSuccess, onFail,{quality:50, destinationType:destinationType.DATA_URL});
        }

        function capturePhotoEdit(){
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
                destinationType: destinationType.DATA_URL });
        }

        function getPhoto(source){
            navigator.camera.getPicture(onPhotoURISuccess,onFail,{quality:50,destinationType:destinationType.FILE_URI,sourceType:source});
        }