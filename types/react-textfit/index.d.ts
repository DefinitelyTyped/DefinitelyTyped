// Type definitions for react-textfit 1.1
// Project: https://github.com/malte-wessel/react-textfit
// Definitions by: yongtheskill <https://github.com/yongtheskill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface TextfitProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: 'single' | 'multi';
    forceSingleModeWidth?: boolean;
    min?: number;
    max?: number;
    throttle?: number;
    onReady?: (fontSize: number) => void;
}

export function Textfit(props: TextfitProps): JSX.Element;
