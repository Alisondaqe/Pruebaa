alert ()
   /* for ( let i = 4; i <=10; i++){ 
        console.log(i) ;
}
const frutas = ["manzana","uva","pera","Naranja"];
for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}
for (let i = 0; i <= 10; i += 2){
    console.log(i);
}
*/
const Brigthstars = ["Alison","Angie","Evelin","Rosangela","Paula"];
let lista = "";

for (let i = 0; i < Brigthstars.length; i++){
    lista +=  `<li>${Brigthstars[i]}</li>`;
}
console.log(Brigthstars);
document.getElementById("integrantes").innerHTML = `<ul>${lista}</ul>`;
document.getElementById("Lider").innerText = Brigthstars[0]; 