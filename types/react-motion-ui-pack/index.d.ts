// Type definitions for react-motion-ui-pack 0.10
// Project: https://github.com/souporserious/react-motion-ui-pack
// Definitions by: Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as motion from 'react-motion';

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
