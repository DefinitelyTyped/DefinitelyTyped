import * as React from "react";
import * as motion from "react-motion";

declare namespace Transition {
    interface TransitionProps {
        children?: React.ReactNode;
        component?: string | boolean | React.ReactElement | undefined;
        runOnMount?: boolean | undefined;
        appear?: motion.Style | undefined;
        enter?: motion.Style | undefined;
        leave?: motion.Style | undefined;
        onEnter?: ((style: motion.PlainStyle) => void) | undefined;
        onLeave?: ((style: motion.Style) => void) | undefined;
    }
}

declare const Transition: React.ComponentClass<Transition.TransitionProps>;
export default Transition;
