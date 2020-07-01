import * as React from 'react';
import { slide as Menu, State } from 'react-burger-menu';

class Example extends React.Component {
    showSettings(event: { preventDefault(): void }) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu
                customBurgerIcon={<img src="img/icon.svg" />}
                customCrossIcon={<img src="img/icon.svg" />}
                onStateChange={this.onStateChange}
                styles={{}}
            >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }

    onStateChange = (state: State): void => {
        console.log(state.isOpen);
    }
}
