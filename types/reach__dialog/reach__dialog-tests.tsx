import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';

import * as React from 'react';
import { render } from 'react-dom';

class Example extends React.Component {
    state = { showDialog: true };
    buttonRef = React.createRef<HTMLButtonElement>();

    render() {
        const { setState, state } = this;

        return (
            <>
                <Dialog isOpen={state.showDialog} onDismiss={() => setState({ showDialog: false })}>
                    <button className="close-button" onClick={() => setState({ showDialog: false })}>
                        <span aria-hidden>×</span>
                    </button>
                    <p>Hello there. I am a dialog</p>
                </Dialog>

                <DialogOverlay
                    style={{ background: 'hsla(0, 100%, 100%, 0.9)' }}
                    isOpen={state.showDialog}
                    onDismiss={() => setState({ showDialog: false })}
                    initialFocusRef={this.buttonRef}
                >
                    <DialogContent>
                        <p>The overlay styles are a white fade instead of the default black fade.</p>
                        <button ref={this.buttonRef} onClick={() => setState({ showDialog: false })}>
                            Very nice.
                        </button>
                    </DialogContent>
                </DialogOverlay>
            </>
        );
    }
}

render(<Example />, document.getElementById('app'));

render(<Dialog />, document.getElementById('app'));
render(<DialogContent />, document.getElementById('app'));
render(<DialogOverlay />, document.getElementById('app'));
