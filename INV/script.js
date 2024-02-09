function moverBoton(boton) {
    var newX = Math.random() * (window.innerWidth - boton.offsetWidth);
    var newY = Math.random() * (window.innerHeight - boton.offsetHeight);
    boton.style.position = 'absolute';
    boton.style.left = newX + 'px';
    boton.style.top = newY + 'px';
}

function generarCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.style.left = Math.random() * window.innerWidth + 'px';
    corazon.style.top = "10px";
    document.body.appendChild(corazon);
    setTimeout(() => {
        corazon.style.opacity = '1'; 
        corazon.style.top = Math.random() * window.innerHeight + 'px';
    }, 100);
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

function limpiarYCentrar() {
    document.body.innerHTML = '';
    var contenedor = document.createElement('div');
    contenedor.classList.add('contenedor');
    var mensaje = document.createElement('div');
    mensaje.innerHTML = '<h3 class="centrar" id="parpadeo"> NOS VEMOS EL MIMINGO JAJAJA  &#128150;</h3>';
    contenedor.appendChild(mensaje);
    document.body.appendChild(contenedor);
    var imagen = document.createElement('div');
    imagen.innerHTML = '<img src="img/ducklove.gif" alt="" class="giff" style="width: 200px; height: 200px;">';
    contenedor.appendChild(imagen);
    for (let i = 0; i < 10; i++) {
        generarCorazon();
    }
}