// Type definitions for react-window-scroller 1.0
// Project: https://github.com/FedericoDiRosa/react-window-scroller
// Definitions by: Artem Netuk <https://github.com/ANetuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Ref, ComponentType } from "react";
import { FixedSizeList, FixedSizeListProps } from "react-window";

interface ChildComponentProps {
    ref: Ref<FixedSizeList>;
    outerRef: FixedSizeListProps['outerRef'];
    style: FixedSizeListProps['style'];
    onScroll: FixedSizeListProps['onScroll'];
}

interface Props {
    children: ComponentType<ChildComponentProps>;
}

export const ReactWindowScroller: ComponentType<Props>;
