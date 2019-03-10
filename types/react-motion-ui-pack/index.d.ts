// Type definitions for react-motion-ui-pack 0.10
// Project: https://github.com/souporserious/react-motion-ui-pack
// Definitions by: Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as motion from 'react-motion';

declare namespace Transition {
    interface TransitionProps {
        component?: string | boolean | React.ReactElement;
        runOnMount?: boolean;
        appear?: motion.Style;
        enter?: motion.Style;
        leave?: motion.Style;
        onEnter?: (style: motion.PlainStyle) => void;
        onLeave?: (style: motion.Style) => void;
    }
}

declare const Transition: React.ComponentClass<Transition.TransitionProps>;
export default Transition;
