const btnHamburguesa = document.querySelector("#botonHambrguesa");
const nav = document.querySelector("#nav");

btnHamburguesa.addEventListener("click",mostrarNav);

function mostrarNav(){
   /* if(nav.classList.contains("mostrar")){
        nav.classList.remove("mostrar");
   } 
   else{
        nav.classList.add("mostrar");
   } */

        nav.classList.toggle("mostrar");
}