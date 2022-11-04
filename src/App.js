import "./App.css";
import CounterActions from "./Context/CounterActions";
import CounterProvider from "./Context/CounterProvider";

function App() {
    return (
        <div className="App">
            <CounterProvider>
                <CounterActions />
            </CounterProvider>
        </div>
    );
}

export default App;
