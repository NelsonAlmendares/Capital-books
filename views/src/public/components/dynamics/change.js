var mediaQueryList = window.matchMedia("(max-width: 992px)");
var mediaQueryList2 = window.matchMedia("(max-width: 992px)");

function manejador1(eventMediaQuery) {
    if (eventMediaQuery.matches){
        document.getElementById("col-1").classList.remove("col-md-5");
        document.getElementById("col-1").classList.add("col-md-12");
        // Para el de 7
        document.getElementById("col-2").classList.remove("col-md-7");
        document.getElementById("col-2").classList.add("col-md-12");
    } else {
        document.getElementById("col-1").classList.remove("col-md-12");
        document.getElementById("col-1").classList.add("col-md-5");
        // Para el de 7
        document.getElementById("col-2").classList.remove("col-md-12");
        document.getElementById("col-2").classList.add("col-md-7");
    }
}
function manejador2(eventsQuery) {
    if (eventsQuery.matches) {
        // Para el de 4
        document.getElementById("col-3").classList.remove("col-md-5");
        document.getElementById("col-3").classList.add("col-md-12");
        // Para el de 7
        document.getElementById("col-4").classList.remove("col-md-7");
        document.getElementById("col-4").classList.add("col-md-12");
    } else {
        // Para el de 4
        document.getElementById("col-3").classList.remove("col-md-12");
        document.getElementById("col-3").classList.add("col-md-5");
        // Para el de 4
        document.getElementById("col-4").classList.remove("col-md-12");
        document.getElementById("col-4").classList.add("col-md-7");
    }
}

mediaQueryList.addListener(manejador1);
mediaQueryList2.addListener(manejador2);
