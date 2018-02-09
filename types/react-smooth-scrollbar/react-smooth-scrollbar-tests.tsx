import * as React from "react";
import SmoothScrollbar = require('react-smooth-scrollbar');

<SmoothScrollbar className="test" alwaysShowTracks onScroll={(status, instance) => { } } />;
// <SmoothScrollbar speed={10} overscrollEffect="bounce" />; TODO: These options don't seem to be documented

declare const number: number;
declare const boolean: boolean;
declare const element: EventTarget;
declare const object: object;
declare const func: () => void;

class Test extends React.Component {
    ref: SmoothScrollbar | null;

    componentDidMount() {
        if (this.ref) {
            this.ref.scrollbar.scrollTo(0, 500);
        }
    }

    render() {
        return (
            <SmoothScrollbar ref={ref => this.ref = ref} />
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <SmoothScrollbar
                damping={number}
                thumbMinSize={number}
                // syncCallbacks={boolean} This is in the example, but isn't documented in "Available options"
                renderByPixels={boolean}
                alwaysShowTracks={boolean}
                continuousScrolling={boolean}
                wheelEventTarget={element}
                plugins={object}
                onScroll={func}
            >
                your contents here...
            </SmoothScrollbar>
        );
    }
}
