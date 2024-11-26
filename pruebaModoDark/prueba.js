const btnDark = document.querySelector("#btn-dark");
const body = document.querySelector("body");
const tarjeta = document.querySelector(".contenedor");

const estadoDarkMode = localStorage.getItem("dark-mode");

function activarModoDark(){
    body.classList.add("modo-dark__body");
    tarjeta.classList.add("modo-dark__tarjeta");
    localStorage.setItem("dark-mode","activado");
}

function desactivarModoDark(){
    body.classList.remove("modo-dark__body");
    tarjeta.classList.remove("modo-dark__tarjeta");
    localStorage.setItem("dark-mode","desactivado");
}

if(estadoDarkMode === "activado"){
    activarModoDark();
    btnDark.textContent="Cambiar a modo light";
}
else{
    desactivarModoDark();
    btnDark.textContent="Cambiar a modo Dark";
}

btnDark.addEventListener("click",()=>{
    const estadoDarkMode = localStorage.getItem("dark-mode");
    
    if(estadoDarkMode==="desactivado"){
        activarModoDark();
        btnDark.textContent="Cambiar a modo light";
    }
    else{
        desactivarModoDark();
        btnDark.textContent="Cambiar a modo dark";
    }
});

/* const nombre= prompt("Ingrese su nombre:");
localStorage.setItem("nombre",nombre);

setTimeout(limpiar,5000);

function limpiar(){
    localStorage.clear();
} */