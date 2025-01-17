// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Create a react component
const App = () => {
    const buttonText = {text: 'Click Me!'};
    const labelText = 'Enter Name:';
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
        </div>
    );
};

// Take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);