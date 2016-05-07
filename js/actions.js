//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
    ready: function(){
        document.addEventListener("deviceready", fn.init, false);
    },
    init: function(){
        $('#acelerometro .individual li').eq(0).tap(ac.iniciar);
        $('#acelerometro .individual li').eq(1).tap(ac.detener);
    }
};
$(fn.ready);