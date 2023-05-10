let videoHistoria = document.querySelector('video')
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");
let duracion = document.getElementById("duracion")

duracion.textContent= videoHistoria.duration.toFixed(2)

// Funcion para reproducir con botones
playBoton.addEventListener('click',()=>{
    videoHistoria.play()
    
});

pauseBoton.addEventListener('click',()=>{
    videoHistoria.pause();
    flag=false;
});








