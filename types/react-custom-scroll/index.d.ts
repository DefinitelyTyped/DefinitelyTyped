// Type definitions for react-custom-scroll 4.2
// Project: https://github.com/rommguy/react-custom-scroll
// Definitions by:  Guy Romm <https://github.com/rommguy>
//                  rvdende <https://github.com/rvdende>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { ComponentClass } from 'react';

/**
 * Props for a CustomScroll component.
 */
export interface CustomScrollProps {
    allowOuterScroll?: boolean;
    heightRelativeToParent?: string;
    flex?: number | string;
    onScoll?: (e?: any) => any;
    addScrolledClass?: boolean;
    freezePosition?: boolean;
    minScrollHandleHeight?: number;
    rtl?: boolean;
    scrollTo?: number;
    keepAtBottom?: boolean;
}

/**
 * Customize scrollbar design while using native scroll behavior.
 */
declare const CustomScroll: ComponentClass<CustomScrollProps>;

export default CustomScroll;
