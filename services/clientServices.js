const url="http://localhost:3000/perfil";

//creamos los métodos del CRUD

//GET
const mostrarClientes=async ()=>{
      const respuesta = await fetch(url);
    return await respuesta.json();
}

//POST
const crearClientes=(nombre,cc,email,telefono,ciudad)=>{
   return fetch(url,{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({nombre,cc,telefono,email,ciudad,id:uuid.v4})
    })
    
}
//obtenemos los datos del cliente para mostrarlos 
const datosCliente=async (id)=>{
     const respuesta = await fetch(`http://localhost:3000/perfil/${id}`);
    return await respuesta.json();
 }
//PUT

const actualizarCliente=async (nombre,cc,email,telefono,ciudad,id)=>{
    try {
        const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ nombre, cc, telefono, email, ciudad })
        });
        return respuesta;
    } catch (error) {
        return console.log(error);
    }
}

//DELETE
const eliminarCliente=(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:"DELETE"
    })
}
export const clientServices={
    mostrarClientes,
    crearClientes,
    datosCliente,
    actualizarCliente,
    eliminarCliente
}