import React, {useState, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuctionCard = ({item}) => {

let seconds = item.duration

const hora = new Date(seconds).toLocaleTimeString("es-CL")

let date = new Date(seconds).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
});  
const { precioContext } = useContext(AuthContext);

const[precio, setPrecio]=useState()
const[bool, setBool]=useState()


const handlerSub = (e) =>{
  e.preventDefault()
  precioContext(item.id, Number(precio))
  setBool(!bool)
  setTimeout(() => {
    location.reload()
  }, 1000); 
    
}


  return (
    <div  className="col mb-1 p-1">

      
      <div className="card shadow-sm mb-2" key={item.id}>
       
        <div className="card-body px-4 pb-2">

          <div className="border row border-secondary">
            <span className="bg-secondary p-1 col-md-3">
              <div className="text-white px-2"> {item.tienda} 
                <span className={precio?.length > 0 ? 'd-none' : 'pe-auto' } 
                  onClick={()=>setBool(!bool)} style={{cursor:'pointer'}}>
                     {' '}${item.precio}
                </span>
                <span className={precio?.length > 0 ? 'pe-auto' : 'd-none' } 
                  onClick={()=>setBool(!bool)} style={{cursor:'pointer'}}>
                     {' '}${precio}
                </span>
              </div>

              <form onSubmit={handlerSub} className={bool ? 'text-white' : 'd-none'}>
                <input type="number" step='any' onChange={(e)=>setPrecio(e.target.value)} 
                  style={{width:'80px'}}/>

                <button type='submit'>Guardar Precio</button>
              </form>

            </span>
         
            <span className="p-1 col-md-2">
              <span className="text-secondary px-2">Horario </span> {item.hora}
            </span> 

            <span className="p-1 col-md-2">
              <span className="text-secondary px-2">Origen </span> {item.origen}
            </span> 
            
            <span className="p-1 col-md-2">
              <span className="text-secondary px-2">Destino </span> {item.destino}
            </span> 

            <span className="p-1 col-md-3">
              <span className="px-2">{date}, {hora.slice(0, -3)}</span> 
            </span>

          </div>

            <div className="mt-1">
              <span className="text-secondary">Pasajeros: </span> {item.pasajeros}
            </div>

            <div className="mt-1">
              <span className="text-secondary">Comentarios: </span> {item?.description}
            </div>

        </div>
      
      </div>
      
    </div>
  );
};
