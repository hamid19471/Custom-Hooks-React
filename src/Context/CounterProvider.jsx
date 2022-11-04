import React, { useState, useContext } from "react";

const counterContext = React.createContext();
const counterContextDispacher = React.createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <counterContext.Provider value={count}>
            <counterContextDispacher.Provider value={setCount}>
                {children}
            </counterContextDispacher.Provider>
        </counterContext.Provider>
    );
};

export default CounterProvider;

export const useCount = () => useContext(counterContext);
export const useCountActions = () => useContext(counterContextDispacher);
