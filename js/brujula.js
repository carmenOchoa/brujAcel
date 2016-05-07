var br = {
  iniciar: function(){
      alert();
        if(!br.watchID){            
            var options = {frequency : 500 };
            br.watchID = navigator.compass.watchHeading(br.verDatos, br.error, options);
        }
    },
    detener: function(){
        if(br.watchID != null){
            navigator.compass.clearWatch(br.watchID);
            br.watchID = null;
            $('#brujula h2').html('DETENIDO');
        }
    },
    error: function(){
        alert(err.code);
    },
    verDatos: function(a){
        $('#brujula h2').html('Heading: ' + heading.magneticHeading );
    }  
};