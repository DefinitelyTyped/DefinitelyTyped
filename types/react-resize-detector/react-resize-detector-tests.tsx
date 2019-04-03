// Adapted from example provided at https://github.com/maslianok/react-resize-detector

import * as React from "react";
import ReactResizeDetector, { withResizeDetector } from "react-resize-detector";

const CustomComponent = ({ width, height }: any) => (
    <div>{`${width}x${height}`}</div>
);

class App extends React.PureComponent {
    constructor(props: {}) {
        super(props);

        this.handleResize = this.handleResize.bind;
    }

    render(): JSX.Element {
        return (
            <div>
                <div>Some child content</div>
                <ReactResizeDetector
                    onResize={this.handleResize}
                    handleWidth
                    handleHeight
                    skipOnMount
                    querySelector="someElement"
                    refreshMode="throttle"
                    refreshRate={10}
                />
                <ReactResizeDetector handleWidth handleHeight>
                    {({ width, height }: { width: number; height: number }) => (
                        <div>{`${width}x${height}`}</div>
                    )}
                </ReactResizeDetector>
                <ReactResizeDetector handleWidth handleHeight>
                    <CustomComponent />
                </ReactResizeDetector>
                {withResizeDetector(CustomComponent)}
                <ReactResizeDetector
                    handleWidth
                    handleHeight
                    render={({ width, height }) => (
                        <div>
                            Width:{width}, Height:{height}
                        </div>
                    )}
                />
            </div>
        );
    }

    private readonly handleResize = ({
        width,
        height
    }: {
        width: number;
        height: number;
    }) => {
        console.log(`width = ${width}`);
        console.log(`height = ${height}`);
    }
}
