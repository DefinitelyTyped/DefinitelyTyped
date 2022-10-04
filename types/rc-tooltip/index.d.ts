// Type definitions for rc-tooltip 3.7
// Project: https://github.com/react-component/tooltip
// Definitions by: rhysd <https://github.com/rhysd>
//                 ahstro <https://github.com/ahstro>
//                 vsaarinen <https://github.com/vsaarinen>
//                 aigoncharov <https://github.com/aigoncharov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export as namespace RCTooltip;

declare namespace RCTooltip {
    export type Trigger = "hover" | "click" | "focus";
    export type Placement = 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' |
     'bottomLeft' | 'bottomRight' | 'rightTop' | 'rightBottom' | 'leftTop'| 'leftBottom';

    export interface Props {
        children?: React.ReactNode;
        ref?: React.LegacyRef<any> | undefined;
        overlayClassName?: string | undefined;
        trigger?: Trigger[] | undefined;
        mouseEnterDelay?: number | undefined;
        mouseLeaveDelay?: number | undefined;
        overlayStyle?: React.CSSProperties | undefined;
        prefixCls?: string | undefined;
        transitionName?: string | undefined;
        onVisibleChange?: ((visible?: boolean) => void) | undefined;
        afterVisibleChange?: ((visible?: boolean) => void) | undefined;
        visible?: boolean | undefined;
        defaultVisible?: boolean | undefined;
        placement?: Placement | Object | undefined;
        align?: Object | undefined;
        onPopupAlign?: ((popupDomNode: Element, align: Object) => void) | undefined;
        overlay: (() => React.ReactChild) | React.ReactChild | React.ReactFragment | React.ReactPortal;
        arrowContent?: React.ReactNode | undefined;
        getTooltipContainer?: (() => Element) | undefined;
        destroyTooltipOnHide?: boolean | undefined;
        id?: string | undefined;
    }
}

export default class Tooltip extends React.Component<RCTooltip.Props> {}
