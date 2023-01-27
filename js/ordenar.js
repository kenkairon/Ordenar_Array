
const arr=document.getElementById("arr");
const mensaje=document.getElementById("h5");
var tamano=prompt("Ingresa el Tamaño del array");
var array=[];
var NumerEncontrado;
for (let i=0; i<tamano ; i++){
 var number=Math.floor(Math.random()*100)-1
array.push(number);
 }
console.log(array);
mensaje.classList.add('alert','alert-success');
mensaje.innerHTML=(array);

function ordenar(){
    var orden = array.sort((a,b)=>{
        return a-b;
     });
mensaje.innerHTML =(orden);
}
 
 