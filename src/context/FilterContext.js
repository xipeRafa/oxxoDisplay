import { createContext, useEffect, useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';

export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const { docs } = useFirestore('oxxoLider');

  let db = [...docs]
  const[DB, setDB]=useState(db)

  const handleDB =(db)=>{
    setDB(db)
  }

  return (
    <FilterContext.Provider value={{handleDB, DB}}>
      {children}
    </FilterContext.Provider>
  );
};
 