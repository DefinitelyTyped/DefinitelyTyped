import * as React from "react";

export as namespace RCTooltip;

declare namespace RCTooltip {
    export type Trigger = "hover" | "click" | "focus";
    export type Placement =
        | "left"
        | "right"
        | "top"
        | "bottom"
        | "topLeft"
        | "topRight"
        | "bottomLeft"
        | "bottomRight"
        | "rightTop"
        | "rightBottom"
        | "leftTop"
        | "leftBottom";

    export interface Props extends React.RefAttributes<any> {
        children?: React.ReactNode;
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
        overlay:
            | (() => React.ReactElement | number | string)
            | React.ReactElement
            | number
            | string
            | Iterable<React.ReactNode>
            | React.ReactPortal;
        arrowContent?: React.ReactNode | undefined;
        getTooltipContainer?: (() => Element) | undefined;
        destroyTooltipOnHide?: boolean | undefined;
        id?: string | undefined;
    }
}

export default class Tooltip extends React.Component<RCTooltip.Props> {}
