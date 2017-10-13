// Type definitions for react-fontawesome 1.6
// Project: https://github.com/danawoodman/react-fontawesome
// Definitions by: Timur Rustamov <https://github.com/timurrustamov>
//                 Anton Kandybo <https://github.com/dublicator>
//                 Vincas Stonys <https://github.com/vincaslt>
//                 Gavin Gregory <https://github.com/gavingregory>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export = FontAwesome;

declare namespace FontAwesome {
    type FontAwesomeSize = 'lg' | '2x' | '3x' | '4x' | '5x';
    type FontAwesomeStack = '1x' | '2x';
    type FontAwesomeFlip = 'horizontal' | 'vertical';

    type FontAwesomeProps = React.HTMLProps<FontAwesome> | {
        ariaLabel?: string;
        border?: boolean;
        cssModule?: any;
        fixedWidth?: boolean;
        flip?: FontAwesomeFlip;
        inverse?: boolean;
        name: string;
        pulse?: boolean;
        rotate?: number;
        size?: FontAwesomeSize;
        spin?: boolean;
        stack?: FontAwesomeStack;
        tag?: string;
    };
}

declare class FontAwesome extends React.Component<FontAwesome.FontAwesomeProps> {}
