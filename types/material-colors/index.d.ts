// Type definitions for material-colors 1.2
// Project: https://github.com/shuhei/material-colors
// Definitions by: Noah Overcash <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace material;

declare const colors: {
    [colorName in
        | 'red'
        | 'pink'
        | 'purple'
        | 'deep-purple'
        | 'indigo'
        | 'blue'
        | 'light-blue'
        | 'cyan'
        | 'teal'
        | 'green'
        | 'light-green'
        | 'lime'
        | 'yellow'
        | 'amber'
        | 'orange'
        | 'deep-orange']: {
        [intensity in
            | '50'
            | '100'
            | '200'
            | '300'
            | '400'
            | '500'
            | '600'
            | '700'
            | '800'
            | '900'
            | 'a100'
            | 'a200'
            | 'a400'
            | 'a700']: string;
    };
} & {
    [colorName in 'brown' | 'grey' | 'blue-grey']: {
        [intensity in '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900']: string;
    };
} & {
    [textColorName in 'dark-text' | 'light-text']: {
        [intensity in 'primary' | 'secondary' | 'disabled' | 'dividers']: string;
    };
} & {
    [iconTypeName in 'dark-icons' | 'light-icons']: {
        [mode in 'active' | 'inactive']: string;
    };
} & {
    black: string;
    white: string;
};

export = colors;
