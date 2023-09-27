import * as React from 'react';
import ReactClipboard from 'react-clipboardjs-copy';

function MyApp() {
    return (
        <ReactClipboard
            text="text"
            target="target"
            action="action"
            selection={ false }
            onSuccess={ () => {} }
            onError={ () => {} }
            options={ {
                text: "text",
                container: (<div/>),
                target: () => {}
            }}
        ></ReactClipboard>
    );
}
