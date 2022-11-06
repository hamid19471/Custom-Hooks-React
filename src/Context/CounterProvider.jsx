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
export const useCountActions = () => {
    const setCount = useContext(counterContextDispacher);
    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => {
            if (prev > 1) {
                setCount(prev - 1);
            } else {
                setCount((prev = 0));
            }
        });
    };

    return { handleDecrement, handleIncrement };
};
