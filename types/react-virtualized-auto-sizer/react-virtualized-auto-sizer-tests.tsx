import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AutoSizer, { Size } from 'react-virtualized-auto-sizer';

class TestAutoSizer extends AutoSizer {}

class TestApp extends React.Component {
    onResize = (size: Size) => {
        console.log(`width: ${size.width}`);
        console.log(`height:  ${size.height}`);
    }

    render() {
        return (
            <>
                <TestAutoSizer>
                    {({ width, height }) => {
                        const _width: number = width;
                        const _height: number = height;
                        console.log(`width: ${_width}`);
                        console.log(`height:  ${_height}`);
                        return null;
                    }}
                </TestAutoSizer>
                <TestAutoSizer
                    className="className"
                    defaultHeight={0}
                    defaultWidth={0}
                    disableHeight={false}
                    disableWidth={false}
                    nonce="nonce"
                    style={{ display: "none" }}
                    onResize={this.onResize}
                >
                    {({ width, height }) => {
                        const _width: number = width;
                        const _height: number = height;
                        console.log(`width: ${_width}`);
                        console.log(`height:  ${_height}`);
                        return null;
                    }}
                </TestAutoSizer>
            </>
        );
    }
}

 ReactDOM.render(
    <TestApp/>,
    document.getElementById("test-app"),
);
