import * as React from "react";
import { spring } from "react-motion";
import Transition from "react-motion-ui-pack";

class ReactMotionUIPackTransition extends React.Component {
    render() {
        return (
            <Transition
                enter={{ opacity: 1 }}
                leave={{ opacity: spring(0, { stiffness: 120, damping: 9 }) }}
            >
                <div>Hello world.</div>
            </Transition>
        );
    }
}
