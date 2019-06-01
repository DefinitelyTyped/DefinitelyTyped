import * as React from 'react';
import * as ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';

class App extends React.Component {
    render() {
  	    return <div onClick={() => alert('I have been clicked')}>Click me</div>;
    }
}

class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        const mountPoint = document.createElement('span');
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(mountPoint);
        ReactDOM.render(<App/>, mountPoint);
        retargetEvents(shadowRoot);
    }
}

customElements.define(name, MyCustomElement);
