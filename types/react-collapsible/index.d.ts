// Type definitions for react-collapsible 2.2
// Project: https://github.com/glennflanagan/react-collapsible#readme
// Definitions by: knegusen <https://github.com/knegusen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
export interface CollapsibleProp {
    children?: string | React.ReactNode;
    transitionTime?: number;
    transitionCloseTime?: number;
    triggerTagName?: string;
    easing?: string;
    open?: boolean;
    classParentString?: string;
    openedClassName?: string;
    triggerStyle?: object;
    triggerClassName?: string;
    triggerOpenedClassName?: string;
    contentOuterClassName?: string;
    contentInnerClassName?: string;
    accordionPosition?: string | number;
    handleTriggerClick?: (accordionPosition?: string | number) => void;
    onOpen?: () => void;
    onClose?: () => void;
    onOpening?: () => void;
    onClosing?: () => void;
    trigger?: string | React.ReactNode;
    triggerWhenOpen?: string | React.ReactNode;
    triggerDisabled?: boolean;
    lazyRender?: boolean;
    overflowWhenOpen?: 'hidden' | 'visible' | 'auto' | 'scroll' | 'inherit' | 'initial' | 'unset';
    triggerSibling?: React.ReactNode | string | (() => void);
    tabIndex?: number;
}

export default class Collapsible extends React.Component<CollapsibleProp> {}
