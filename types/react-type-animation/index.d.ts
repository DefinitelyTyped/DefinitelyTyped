// Type definitions for react-type-animation 1.1
// Project: https://github.com/notadamking/react-typing-animation
// Definitions by: Seungbin Oh <https://github.com/sboh1214>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { FunctionComponent } from 'react';

export interface TypeAnimationProps {
    sequence: Array<string | number>;
    wrapper?: string;
    repeat?: number;
    cursor?: boolean;
    className?: string;
}

declare const TypeAnimation: FunctionComponent<TypeAnimationProps>;

export default TypeAnimation;
