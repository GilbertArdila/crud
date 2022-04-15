import { clientServices } from "./clientServices.js";

const formulario=document.querySelector("[data-ClientForm]");


//función para obtener los datos del cliente a actualizar

const obtenerDatosCliente= async()=>{
    //obtenemos el id del cliente a actualizar
  const url=new URL(window.location);
  const id=url.searchParams.get("id");
    
  //verificamos que el id no esté vacío
  if(id===null){
      
      window.location.href="../index.html"
  }
  //obtenemos los inputs de actualizar cliente.html
  const nombre=document.querySelector("[data-clientName]");
  const cc=document.querySelector("[data-clientCc]");
  const mail=document.querySelector("[data-clientMail]");
  const telefono=document.querySelector("[data-clientPhone]");
  const city=document.querySelector("[data-clientcity]");
  
  try{
      const perfil= await clientServices.datosCliente(id);
     
    //   if(perfil.nombre && perfil.cc & perfil.mail && perfil.telefono & perfil.ciudad){
        nombre.value=perfil.nombre;
        cc.value=perfil.cc;
        mail.value=perfil.email;
        telefono.value=perfil.telefono;
        city.value=perfil.ciudad;
    //   }else{
    //     throw new Error();
    //   }
  }catch(error){
      window.location.href="../index.html"
  }

}
obtenerDatosCliente();

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre=document.querySelector("[data-clientName]").value;
    const cc=document.querySelector("[data-clientCc]").value;
    const mail=document.querySelector("[data-clientMail]").value;
    const telefono=document.querySelector("[data-clientPhone]").value;
    const city=document.querySelector("[data-clientCity]").value;

    const url=new URL(window.location);
const id=url.searchParams.get('id');
clientServices.actualizarCliente(nombre,cc,mail,telefono,city,id).then(()=>{
    window.location.href="../index.html"
})



})