import * as React from "react";
import Pointable from 'react-pointable';

class Test extends React.Component<object, object> {
    elementRef(el: HTMLElement) {}
    somePointerEvent(evt: React.PointerEvent) {}

    render() {
        return (
            <Pointable
                tagName="div"
                touchAction="auto"
                elementRef={this.elementRef}
                onPointerMove={this.somePointerEvent}
                onPointerDown={this.somePointerEvent}
                onPointerUp={this.somePointerEvent}
                onPointerOver={this.somePointerEvent}
                onPointerOut={this.somePointerEvent}
                onPointerEnter={this.somePointerEvent}
                onPointerLeave={this.somePointerEvent}
                onPointerCancel={this.somePointerEvent}
            >
                Child Contents
            </Pointable>
        );
    }
}
