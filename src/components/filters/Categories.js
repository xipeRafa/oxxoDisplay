
import React, { useState, useContext, useEffect } from "react";
import { useFirestore } from '../../hooks/useFirestore';
import { FilterContext } from '../../context/FilterContext';

const Categories = () => {
      const { handleDB } = useContext(FilterContext);

      const { docs } = useFirestore('auctions');

      let db = [...docs]
      
      const[oxxo, setoxxo]=useState(true); 
      const[otro, setotro]=useState(true); 
      const[pagoEnEfectivo, setPagoEnEfectivo]=useState(true); 
    
      const handleoxxo =(e)=>{ 
            setoxxo(!oxxo) 
            oxxo  ? setArrFilter([...arrFilter, e.target.value]) 
                  : removeItemFromArr( arrFilter, e.target.value )
      }
    
      const handleotro =(e)=>{ 
            setotro(!otro) 
            otro ? setArrFilter([...arrFilter, e.target.value]) 
                  : removeItemFromArr( arrFilter, e.target.value )
      }
      
      const handleEfectivo =(e)=>{ 
            setPagoEnEfectivo(!pagoEnEfectivo) 
            pagoEnEfectivo ? setArrFilter([...arrFilter, e.target.value]) 
                           : removeItemFromArr( arrFilter, e.target.value )
      }
    
      const[arrFilter, setArrFilter]=useState([])
    
      function removeItemFromArr( arrFilter, item ) {
            let index = arrFilter.indexOf( item );
            if(index>-1){ arrFilter.splice( index, 1 )} 
      }
    
    
      useEffect(() => {
            for (let index = 0; index < arrFilter.length; index++) {
                  const element = db.filter(el => el.categorie !== arrFilter[index]);
                  db = element
            } 
            handleDB(db)
      
      }, [arrFilter, oxxo, otro, pagoEnEfectivo]) 
    
      useEffect(() => {
             setTimeout(() => {
                  setoxxo(!oxxo)  
                  setoxxo(true)  
            }, 200); 
      }, [docs])
                  
  return (
    <div>
      <div className="w-75 mt-5">
        <h2>Clientes</h2>
        <label >
          <input type="checkbox" className="m-1" value='oxxo' onChange={e=>handleoxxo(e)}  checked={oxxo}/>
          oxxo 
        </label>
        <br />
        <label>
          <input type="checkbox" className="m-1" value='otro' onChange={e=>handleotro(e)} checked={otro}/>
          otro
        </label >
        <br />
        <label >
          <input type="checkbox" className="m-1" value='pago en efectivo' 
                 onChange={e=>handleEfectivo(e)} checked={pagoEnEfectivo}/>
          Pago en Efectivo
        </label>
      </div>
    </div>
  );
};

export default Categories;
