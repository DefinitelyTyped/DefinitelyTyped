// Type definitions for material-colors 1.2
// Project: https://github.com/shuhei/material-colors
// Definitions by: Noah Overcash <https://github.com/ncovercash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace materialColors;

declare const colors: {
    [colorName in
        | 'red'
        | 'pink'
        | 'purple'
        | 'deepPurple'
        | 'indigo'
        | 'blue'
        | 'lightBlue'
        | 'cyan'
        | 'teal'
        | 'green'
        | 'lightGreen'
        | 'lime'
        | 'yellow'
        | 'amber'
        | 'orange'
        | 'deepOrange']: {
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
    [colorName in 'brown' | 'grey' | 'blueGrey']: {
        [intensity in '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900']: string;
    };
} & {
    [textColorName in 'darkText' | 'lightText']: {
        [intensity in 'primary' | 'secondary' | 'disabled' | 'dividers']: string;
    };
} & {
    [iconTypeName in 'darkIcons' | 'lightIcons']: {
        [mode in 'active' | 'inactive']: string;
    };
} & {
    black: string;
    white: string;
};

export = colors;
