import React, {useContext} from "react";

const CounterContext = React.createContext({
    onIncrement: () => {},
    onDecrement: () => {}
});

const CounterProvider = ({ children, initialCount = 0 }) => {
    const [counter, setCounter] = React.useState(initialCount);

    const onIncrement = () => setCounter(counter + 10);
    const onDecrement = () => setCounter(counter - 10);

    return(
        <CounterContext.Provider value={{ counter, onIncrement, onDecrement }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;

export function useCounterCtx() {
    return useContext(CounterContext);
}