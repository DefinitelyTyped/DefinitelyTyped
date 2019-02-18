// Type definitions for react-dotdotdot 1.2
// Project: https://github.com/CezaryDanielNowak/React-dotdotdot
// Definitions by: Jakub Czyżewski <https://github.com/jczyzewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType } from 'react';

interface DotDotDotProps {
    clamp: number | string | boolean;
    useNativeClamp?: boolean;
    splitOnChars?: string[];
    animate?: boolean;
    truncationChar?: string;
    truncationHTML?: string;
    tagName?: string;
}

declare const Dotdotdot: ComponentType<DotDotDotProps>;

export = Dotdotdot;
