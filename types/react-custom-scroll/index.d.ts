// Type definitions for react-custom-scroll 4.3
// Project: https://github.com/rommguy/react-custom-scroll
// Definitions by:  Guy Romm <https://github.com/rommguy>
//                  rvdende <https://github.com/rvdende>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { ComponentClass, ReactNode } from 'react';

/**
 * Props for a CustomScroll component.
 */
export interface CustomScrollProps {
    children?: ReactNode;
    allowOuterScroll?: boolean | undefined;
    heightRelativeToParent?: string | undefined;
    flex?: number | string | undefined;
    onScroll?: ((e?: any) => any) | undefined;
    addScrolledClass?: boolean | undefined;
    freezePosition?: boolean | undefined;
    minScrollHandleHeight?: number | undefined;
    rtl?: boolean | undefined;
    scrollTo?: number | undefined;
    keepAtBottom?: boolean | undefined;
    className?: string | undefined;
}

/**
 * Customize scrollbar design while using native scroll behavior.
 */
declare const CustomScroll: ComponentClass<CustomScrollProps>;

export default CustomScroll;
