import React, {useState} from 'react';
import './index.scss';

const Modal = ({hidden, setHidden, children}) =>
    <div className={`overlay animated ${!hidden ? 'show' : ''}`}>
        <div className="modal">
            <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setHidden(true)}>
                <title/>
                <path
                    d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
            </svg>
            {children}
        </div>
    </div>

function App() {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="App">
            <button className="open-modal-btn" onClick={() => setHidden(false)}>✨ Открыть окно</button>
            <Modal hidden={hidden} setHidden={setHidden}>
                <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
            </Modal>
        </div>
    );
}

export default App;
