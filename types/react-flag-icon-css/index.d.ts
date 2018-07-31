// Type definitions for react-flag-icon-css 1.0
// Project: https://github.com/matteocng/react-flag-icon-css#readme
// Definitions by: Jon Freedman <https://github.com/jonfreedman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { PureComponent } from 'react';

export type Size = 'lg' | '2x' | '3x' | '4x' | '5x';

export interface Options {
    useCssModules: boolean;
}

export interface FlagIconProps {
    code: string;
    size?: Size;
    flip?: 'horizontal' | 'vertical';
    rotate?: 30 | 60 | 90 | 180 | 270;
    squared?: boolean;
    className?: string;
    styleName?: string;
}

export class FlagIcon extends PureComponent<FlagIconProps> {
}

export default function FlagIconFactory(react: any, opts?: Readonly<Options>): () => FlagIcon;
