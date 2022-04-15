import { clientServices } from "./clientServices.js";

//captamos el formulario
const form=document.querySelector("[data-form]");

form.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre=document.querySelector("[data-name]").value;
    const cc=document.querySelector("[data-cc]").value;
    const mail=document.querySelector("[data-mail]").value;
    const telefono=document.querySelector("[data-phone]").value;
    const ciudad=document.querySelector("[data-city]").value;

    clientServices.crearClientes(nombre,cc,mail,telefono,ciudad).then(respuesta=>{
       
        window.location.href="../index.html"
    }).catch(error=>alert("Ha ocurrido un error"));
})
