const botonAceptarCookies = document.getElementById ('btn-aceptar-cookies');
const avisoCookies = document.getElementById ('aviso-cookies');
const fondoAvisoCookies = document.getElementById ('fondo-aviso-cookies');


if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('active');
    fondoAvisoCookies.classList.add('active');
}else{
    dataLayer.push({'event': 'cookies-aceptadas'});
}



botonAceptarCookies.addEventListener ('click', () => {
    avisoCookies.classList.remove ('active');
    fondoAvisoCookies.classList.remove ('active');

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({'event': 'cookies-aceptadas'});
});