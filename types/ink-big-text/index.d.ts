import { Component } from 'react';

declare enum FontOptions {
    block = 'block',
    simple = 'simple',
    simpleBlock = 'simpleBlock',
    '3d' = '3d',
    simple3d = 'simple3d',
    chrome = 'chrome',
    huge = 'huge',
}

declare enum AlignOptions {
    left = 'center',
    center = 'center',
    right = 'right',
}

declare enum BackgroundColorOptions {
    transparent = 'transparent',
    black = 'black',
    red = 'red',
    green = 'green',
    yellow = 'yellow',
    blue = 'blue',
    magenta = 'magenta',
    cyan = 'cyan',
    white = 'white',
}

interface BigTextProps {
    text?: string;
    font?: FontOptions;
    align?: AlignOptions;
    colors?: string[];
    backgroundColor?: BackgroundColorOptions;
    letterSpacing?: number;
    lineHeight?: number;
    space?: boolean;
    maxLength?: number;
}

declare class BigText extends Component<BigTextProps> {}

export = BigText;
