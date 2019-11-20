// Adapted from example provided at https://github.com/maslianok/react-resize-detector

import * as React from 'react';
import ReactResizeDetector, { withResizeDetector } from 'react-resize-detector';

const CustomComponent = ({ width, height }: any) => <div>{`${width}x${height}`}</div>;

class App extends React.PureComponent {
    constructor(props: {}) {
        super(props);

        this.handleResize = this.handleResize.bind;
        this.resizeRef = React.createRef();
    }

    render(): JSX.Element {
        return (
            <div ref={this.resizeRef}>
                <div>Some child content</div>
                <ReactResizeDetector
                    onResize={this.handleResize}
                    handleWidth
                    handleHeight
                    skipOnMount
                    refreshMode="throttle"
                    refreshRate={10}
                    refreshOptions={{ leading: true, trailing: true }}
                    querySelector="someElement"
                    nodeType="span"
                    targetDomEl={this.resizeRef.current}
                />
                <ReactResizeDetector handleWidth handleHeight>
                    {({ width, height }: { width: number; height: number }) => <div>{`${width}x${height}`}</div>}
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

    private readonly handleResize = (width: number, height: number) => {
        console.log(`width = ${width}`);
        console.log(`height = ${height}`);
    }

    private readonly resizeRef: React.RefObject<any>;
}

interface WrappedComponentProps {
    width: number;
    height: number;
}

const WrappedComponent: React.FC<WrappedComponentProps> = ({ width, height }) => (
    <div>
        width: {width} height: {height}
    </div>
);

const ComposedComponent = withResizeDetector(WrappedComponent);

export const ComposedComponentExample: React.FC = () => <ComposedComponent />;

interface WrappedWidthOnlyComponentProps {
    width: number;
}

const WrappedWidthOnlyComponent: React.FC<WrappedWidthOnlyComponentProps> = ({ width }) => <div>width: {width}</div>;

const ComposedWidthOnlyComponent = withResizeDetector(WrappedWidthOnlyComponent, { handleWidth: true });

export const ComposedWidthOnlyComponentExample: React.FC = () => <ComposedWidthOnlyComponent />;

interface WrappedHeightOnlyComponentProps {
    height: number;
}

const WrappedHeightOnlyComponent: React.FC<WrappedHeightOnlyComponentProps> = ({ height }) => (
    <div>height: {height}</div>
);

const ComposedHeightOnlyComponent = withResizeDetector(WrappedHeightOnlyComponent, { handleHeight: true });

export const ComposedHeightOnlyComponentExample: React.FC = () => <ComposedHeightOnlyComponent />;

interface WrappedComponentWithExtraPropsProps {
    width: number;
    height: number;
    someProp: string;
}

const WrappedComponentWithExtraProps: React.FC<WrappedComponentWithExtraPropsProps> = ({ width, height, someProp }) => (
    <div>
        width: {width} height: {height} someProp: {someProp}
    </div>
);

const ComposedComponentWithExtraProps = withResizeDetector(WrappedComponentWithExtraProps);

export const Example: React.FC = () => <ComposedComponentWithExtraProps someProp={'string'} />;
