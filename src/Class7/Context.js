import { createContext, useState} from 'react';
import Child1 from './Child';


export const context = createContext();
export const  Provider = () =>{
    const [user, setUser] = useState("Durai")
    return(
        <context.Provider value={user}>
            <Child1 />
        </context.Provider>
    )
}