// Type definitions for react-fontawesome 1.6
// Project: https://github.com/danawoodman/react-fontawesome
// Definitions by: Timur Rustamov <https://github.com/timurrustamov>
//                 Anton Kandybo <https://github.com/dublicator>
//                 Vincas Stonys <https://github.com/vincaslt>
//                 Gavin Gregory <https://github.com/gavingregory>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export = FontAwesome;

interface Intermediate extends React.AllHTMLAttributes<HTMLElement> {
    size?: any;
}

declare namespace FontAwesome {
    type FontAwesomeSize = 'lg' | '2x' | '3x' | '4x' | '5x';
    type FontAwesomeStack = '1x' | '2x';
    type FontAwesomeFlip = 'horizontal' | 'vertical';

    interface FontAwesomeProps extends Intermediate {
        ariaLabel?: string | undefined;
        border?: boolean | undefined;
        cssModule?: any;
        fixedWidth?: boolean | undefined;
        flip?: FontAwesomeFlip | undefined;
        inverse?: boolean | undefined;
        name: string;
        pulse?: boolean | undefined;
        rotate?: number | undefined;
        size?: FontAwesomeSize | undefined;
        spin?: boolean | undefined;
        stack?: FontAwesomeStack | undefined;
        tag?: string | undefined;
    }
}

declare class FontAwesome extends React.Component<FontAwesome.FontAwesomeProps> {}
