// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

// Create a react component
// this is a function-based component
const App = () => {
    const buttonText = { text: 'Click me'};

    return ( 
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                { buttonText }
            </button>
        </div>
    );
};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);