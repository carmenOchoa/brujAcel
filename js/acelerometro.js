var ac = {
    watchID: null,
    iniciar: function(){
        if(!ac.watchID){
            var options = {frequency = 500 };
            ac.watchID = navigator.accelerometer.watchAcceleretion(ac.verDatos, ac.error, options);
        }
    },
    detener: function(){
        if(ac.watchID){
            navigator.accelerometer.clearWatch(ac.watchID);
        }
    },
    error: function(){
        alert(err.code);
    },
    verDatos: function(a){
        $('#acelerometro h2').html('x: ' + a.x + '<br>' + 'y: ' + a.y + '<br>' + 'z: ' + a.z );
    }//
};