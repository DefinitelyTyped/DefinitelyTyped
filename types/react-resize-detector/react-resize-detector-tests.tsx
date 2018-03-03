// Adapted from example provided at https://github.com/maslianok/react-resize-detector

import * as React from "react";
import * as ReactDOM from "react-dom";

import ReactResizeRouter from "react-resize-detector";

class App extends React.PureComponent {
    constructor(props: {}) {
        super(props);

        this.handleResize = this.handleResize.bind;
    }

    render(): JSX.Element {
        return <div>
            <div>Some child content</div>
            <ReactResizeRouter
                onResize={this.handleResize}
                handleWidth
                handleHeight
                skipOnMount
                resizableElementId="someElement" />
        </div>;
    }

    private handleResize(width: number, height: number) {
        console.log(`width = ${width}`);
        console.log(`height = ${height}`);
    }
}
