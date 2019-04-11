// Example from https://github.com/tajo/react-portal
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Portal, PortalWithState } from 'react-portal';

interface AppState {
    isPortalOneActive: boolean;
    isPortalTwoActive: boolean;
}

export default class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isPortalOneActive: false,
            isPortalTwoActive: false
        };
    }

    render() {
        return (
            <div>
                <h1>React Portal Examples</h1>
                <p>
                    <a href="https://github.com/tajo/react-portal">
                        https://github.com/tajo/react-portal
                    </a>
                </p>

                <h2>Portal (stateless)</h2>
                <button
                    onClick={() =>
                        this.setState(prevState => ({
                            isPortalOneActive: !prevState.isPortalOneActive
                        }))}>
                    Toggle
                </button>
                {this.state.isPortalOneActive && (
                    <Portal>
                        <p>This thing was portaled!</p>
                    </Portal>
                )}

                <h2>Portal (stateless, custom node)</h2>
                <button
                    onClick={() =>
                        this.setState(prevState => ({
                            isPortalTwoActive: !prevState.isPortalTwoActive
                        }))}>
                    Toggle
                </button>
                {this.state.isPortalTwoActive && (
                    <Portal node={document && document.getElementById('user-node')}>
                        <p>This thing was portaled!</p>
                    </Portal>
                )}

                <h2>PortalWithState</h2>
                <PortalWithState closeOnOutsideClick closeOnEsc>
                    {({ openPortal, closePortal, isOpen, portal }) => [
                        <button key="foo" onClick={openPortal}>
                            Open Portal {isOpen && '(this counts as an outised click)'}
                        </button>,
                        portal(
                            <p>
                                This is more advanced Portal. It handles its own state.{' '}
                                <button onClick={closePortal}>Close me!</button>, hit ESC or
                                click outside of me.
                            </p>
                        )
                    ]}
                </PortalWithState>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
