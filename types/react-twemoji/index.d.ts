// Type definitions for react-twemoji 0.4
// Project: https://github.com/zxmys/react-twemoji
// Definitions by: smallpence <https://github.com/smallpence>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface TwemojiProps {
    children?: React.ReactNode;

    /**
     * When it is true, Twemoji will not render a wrapping element (with tag)
     * to contain its children. Note that since twemoji.parse needs a DOM element
     * reference, any direct pure text child of Twemoji is not parsed when
     * noWrapper is true. E.g. foo in
     * <Twemoji noWrapper={true}>foo<p>bar</p></Twemoji> is not parsed.
     */
    noWrapper?: boolean;

    /**
     * twemoji.parse options.
     */
    options?: object;

    /**
     * The tag of the wrapping element. This option is ignored when noWrapper is
     * true.
     */
    tag?: string;
}

/**
 * A simple React wrapper for Twemoji. It calls twemoji.parse() to convert emoji
 * characters to Twemoji images.
 */
export default class Twemoji extends React.Component<TwemojiProps> {}
