import React from "react";
import { useCount, useCountActions } from "./CounterProvider";
const CounterActions = () => {
    const count = useCount();
    const setCount = useCountActions();

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        count > 1 ? setCount(count - 1) : setCount(0);
    };

    return (
        <div>
            <h2>Count is : {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default CounterActions;
