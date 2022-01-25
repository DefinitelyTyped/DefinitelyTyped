// Type definitions for react-twemoji 0.4
// Project: https://github.com/ZxMYS/react-twemoji
// Definitions by: Max Programming <https://github.com/max-programming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { ParseObject } from 'twemoji'

export interface TwemojiProps {
    children?: React.ReactNode;
    noWrapper?: boolean;
    options?: ParseObject;
    tag?: string;
}

declare class Twemoji extends React.Component<TwemojiProps> {

}

export default Twemoji
