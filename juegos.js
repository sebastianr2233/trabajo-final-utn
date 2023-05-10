
//funcion para drag and drop
function rompecabezas(){
     
     // variable con arreglo de imagenes
     var piezas=document.querySelectorAll('#piezas img');
    
    //variables para los espacios de arrastre destino
     destino1  = document.getElementById('fichaArrastrar1');  
     destino2 = document.getElementById('fichaArrastrar2'); 
     destino3 = document.getElementById('fichaArrastrar3'); 
  
    //evento para agregar dragstart a las imagenes    
    for(var i=0; i<piezas.length; i++){
        piezas[i].addEventListener('dragstart', arrastrarElemento);
        
        }
    //primer espacio Arrastre
    
    destino1.addEventListener('dragover', function(event){
    event.preventDefault(); })
    destino1.addEventListener('drop', soltarElemento);

   
    //segundo espacio Arrastre
    
    destino2.addEventListener('dragover', function(event){
    event.preventDefault(); });
    destino2.addEventListener('drop', soltarElemento);

     //tercer espacio Arrastre
    
    destino3.addEventListener('dragover', function(event){
    event.preventDefault(); });
    destino3.addEventListener('drop', soltarElemento);

}
//fuencion para arrastrar (se crea una variable con el elemnto arrastrado se le da el atributo "id" al elemnto para luego eliminar su display)
function arrastrarElemento(event){
    elemento=event.target;
    event.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

//funcion para soltar la imagen
async function soltarElemento(event){
    event.preventDefault();
    let id=event.dataTransfer.getData('Text');
    
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
    event.target.innerHTML='<img src="'+imagen.src+'" class="ficha">'; 
    
}
rompecabezas()

let botonReinicio = document.getElementById("reiniciar")
console.log(botonReinicio)

botonReinicio.addEventListener('click',()=>{
     window.location.reload();
})



