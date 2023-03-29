import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function OnlyRequiredProps() {
    return (
        <CopyToClipboard text={'Hello World'}>
            <button>Copy to clipboard with button</button>
        </CopyToClipboard>
    );
}

function AllProps() {
    return (
        <CopyToClipboard
            text={'Hello World'}
            onCopy={() => {}}
            options={{ debug: true, message: 'message', format: 'text/plain' }}
        >
            <span>Copy to clipboard with span</span>
        </CopyToClipboard>
    );
}

/**
  * ReactChild refers to a single child element within a component.
  * It can be a React element (created using React.createElement() or JSX),
  * a string, a number, a boolean, or null.
  */
function ReactChildProps() {
    const element = React.createElement('span', {}, 'Copy to clipboard with span');
    return (
        <CopyToClipboard
            text={'Hello World'}
            onCopy={() => {}}
            options={{ debug: true, message: 'message', format: 'text/plain' }}
        >
            {element}
        </CopyToClipboard>
    );
}
