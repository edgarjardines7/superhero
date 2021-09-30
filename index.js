//Escena actual
let selectedScene = 'scene_jenny';

// Lista de escenas y la variable que contiene el svg de la escena 
let arrayScenes = [
    ["scene_jenny",svgJenny,0],
    ["scene_titulo",svgTitulo,4000],
    ["scene_casa",svgCasa,8000],
    ["scene_alma",svgAlma,8000],
    ["scene_motivos",svgMotivos,3000],
    ["scene_cielo",svgCielo,42000],
    ["scene_regreso",svgRegreso,5000],
    ["scene_nuevo_poder",svgNuevoPoder,null],
];
let totalescenas = arrayScenes.length
let boton = document.getElementById("button_next")


// Siguiente escena
function next() {

    const found = arrayScenes.findIndex(element => element[0] === selectedScene);
    update(found + 1)
};

function update(numscene){
    if(numscene === totalescenas - 1 ){
        // Quitar el boton "next"
    }

    //Actualizar la escena seleccionada
    selectedScene = arrayScenes[numscene][0]
    generatorScene(numscene)
};


function generatorScene(numscene){
    document.getElementById("scene_view").innerHTML="";
    document.getElementById("scene_view").innerHTML= arrayScenes[numscene][1];

    boton.style.display = 'none';
    if(arrayScenes[numscene][2]!== null){
        mostrarboton(arrayScenes[numscene][2])
    }

};


//Emepezar con la escena 0
function start() {
    generatorScene(0)
}
start()




function mostrarboton(milisegundos) {
    setTimeout(function(){ 
        boton.style.display = 'inline-block';
    }, milisegundos);
  }