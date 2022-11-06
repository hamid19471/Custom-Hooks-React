import React from "react";
import { useCount, useCountActions } from "./CounterProvider";
const CounterActions = () => {
    const count = useCount();
    const { handleDecrement, handleIncrement } = useCountActions();

    return (
        <div>
            <h2>Count is : {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default CounterActions;
