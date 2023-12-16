import { createContext, useState } from 'react';

export const CounterContext = createContext(null);

export const CounterProvider = (props) =>{
    const [count, setCount] = useState(5);
    return (        
        <CounterContext.Provider value={{count, setCount, setname: 'Peeyush'}}>
            { props.children }
        </CounterContext.Provider>
    )
};

