import { clientServices } from "./services/clientServices.js";

//función para crear cada fila de la tabla con sus datos

const crearFila=(nombre,cc,mail,telefono,ciudad,id)=>{
  const fila=document.createElement("tr");
  fila.classList.add("body__tr")

 //creamos los td de cada tr con la información de cada cliente
  const contenido=`
      <td class="td-nombre" data-td>${nombre} </td>
      <td class="td-cc" >${cc} </td>
      <td class="td-email" >${mail} </td>
      <td class="td-telefono" >${telefono} </td>
      <td class="td-ciudad" >${ciudad} </td>
      <td class="td-buttons">
      <ul class="table__button-control">
    
        <li>
          <a
            href="./vistas/actualizar.html?id=${id}"
            class=" simple-button--edit">Editar
          </a>
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}" >Eliminar
          </button>
        </li>
      </ul>
     </td> 

  `
  //agregamos el contenido a la fila
  fila.innerHTML=contenido;

  //capturamos el botón para la función de eliminar
  const button=fila.querySelector("button");
  button.addEventListener("click",()=>{
    const id=button.id;
    clientServices.eliminarCliente(id).then(
      
      respuesta=>{
         
    }).catch(error=>alert("Ha habido un error al tratar de eliminar el cliente"));
  })

  return fila;
}
//capturamos el body de la tabla
const body_table=document.querySelector("[data-table]");

//función para mostrar la lista de clientes
clientServices.mostrarClientes().then((data)=>{
    data.forEach(({nombre,cc,email,telefono,ciudad,id})=>{
        const nuevaFila=crearFila(nombre,cc,email,telefono,ciudad,id);
        body_table.appendChild(nuevaFila);
    })
}).catch((error)=>alert("Uppps: ha ocurrido un error"));