import './index.scss';
import React, {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    }

    const minus = () => {
        setCount(count - 1);
    }

    return (
        <div className="App">
            <div>
                <h2>Счетчик:</h2>
                <h1>{count}</h1>
                <button className="minus" onClick={() => minus()}>- Минус</button>
                <button className="plus" onClick={() => plus()}>Плюс +</button>
            </div>
        </div>
    );
}

export default App;
