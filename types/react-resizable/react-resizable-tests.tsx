import * as React from 'react';
import { Resizable, ResizableBox, ResizeCallbackData } from 'react-resizable';

const resizeCallback = (event: React.SyntheticEvent, data: ResizeCallbackData) => {
    console.log(data.size.height);
    console.log(data.node);
};

class TestResizableComponent extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <Resizable
                width={10}
                height={20}
                axis="y"
                className={'foobar'}
                minConstraints={[20, 20]}
                maxConstraints={[42, 42]}
                handleSize={[5, 5]}
                lockAspectRatio={false}
                draggableOpts={{ opaque: true }}
                onResizeStart={resizeCallback}
                onResizeStop={resizeCallback}
                onResize={resizeCallback}
                transformScale={1}
            >
                <div>{this.props.children} </div>
            </Resizable>
        );
    }
}

class TestResizableBoxComponent extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <ResizableBox
                width={10}
                height={20}
                onResizeStart={resizeCallback}
                onResizeStop={resizeCallback}
                onResize={resizeCallback}
                transformScale={1}
                handle={(resizeHandle, ref) => <div ref={ref}>{resizeHandle}</div>}
            >
                <div>{this.props.children}</div>
            </ResizableBox>
        );
    }
}

class TestStyledResizableBoxComponent extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <ResizableBox width={10} height={20} style={{ color: 'pink' }}>
                <div>{this.props.children}</div>
            </ResizableBox>
        );
    }
}

class TestXResizableComponent extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <Resizable
                width={10}
                axis="x"
                className={'foobar'}
                minConstraints={[20, 20]}
                maxConstraints={[42, 42]}
                handleSize={[5, 5]}
                lockAspectRatio={false}
                draggableOpts={{ opaque: true }}
                onResizeStart={resizeCallback}
                onResizeStop={resizeCallback}
                onResize={resizeCallback}
                transformScale={1}
            >
                <div>{this.props.children} </div>
            </Resizable>
        );
    }
}

class TestYResizableComponent extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <Resizable
                height={20}
                axis="y"
                className={'foobar'}
                minConstraints={[20, 20]}
                maxConstraints={[42, 42]}
                handleSize={[5, 5]}
                lockAspectRatio={false}
                draggableOpts={{ opaque: true }}
                onResizeStart={resizeCallback}
                onResizeStop={resizeCallback}
                onResize={resizeCallback}
                transformScale={1}
            >
                <div>{this.props.children} </div>
            </Resizable>
        );
    }
}

class TestXYResizableComponent extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <Resizable
                width={10}
                height={20}
                axis="both"
                className={'foobar'}
                minConstraints={[20, 20]}
                maxConstraints={[42, 42]}
                handleSize={[5, 5]}
                lockAspectRatio={false}
                draggableOpts={{ opaque: true }}
                onResizeStart={resizeCallback}
                onResizeStop={resizeCallback}
                onResize={resizeCallback}
                transformScale={1}
            >
                <div>{this.props.children} </div>
            </Resizable>
        );
    }
}
