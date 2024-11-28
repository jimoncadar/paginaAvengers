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

const btnDark = document.querySelector("#btnDark");
const root = document.documentElement;
const cajitas = document.querySelectorAll(".cajita");

function activarModoOscuro(){
     root.style.setProperty("--colorTarjeta","rgb(0, 0, 0)");
     root.style.setProperty("--colorTextoTarjeta","#fff");
     root.style.setProperty("--colorFondo","rgba(17, 17, 17, 0.83)");
     cajitas.forEach((caja)=>{
          caja.style.border="1px solid #fff";
     });
     localStorage.setItem("modoOscuro","Activado");
     btnDark.textContent="Light";
     btnDark.style.setProperty("--colorPrimario","#fff");
     btnDark.style.color="#000";
}

function desactivarModoOscuro(){
     root.style.setProperty("--colorTarjeta","#FFFFFF");
     root.style.setProperty("--colorTextoTarjeta","#000");
     root.style.setProperty("--colorFondo","#f4f4f4");
     localStorage.setItem("modoOscuro","Desactivado");
     btnDark.textContent="Dark";
     btnDark.style.setProperty("--colorPrimario","#E23636");
     btnDark.style.color="#fff";
}

const estadoModoOscuro = localStorage.getItem("modoOscuro");

if(estadoModoOscuro==="Activado"){
     activarModoOscuro();
}
else{
     desactivarModoOscuro();
}


btnDark.addEventListener("click",()=>{
     const estadoModoOscuro = localStorage.getItem("modoOscuro");
     if(estadoModoOscuro==="Desactivado"){
          activarModoOscuro();
     }
     else{
          desactivarModoOscuro();
     }
});

