import { createContext, useState } from "react";
import useFetch from "./useFetch";

const MyContext = createContext();

const UseContext = ({children}) => {

    const [data] = useFetch('https://fakestoreapi.com/products');
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filterData = data.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(search.toLowerCase());
        
      });

    return (
        <>
        <MyContext.Provider value={{search, handleChange, filterData}}>
            {children}
        </MyContext.Provider>
        </>
    )
}
export default UseContext;
export {MyContext}