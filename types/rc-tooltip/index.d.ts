// Type definitions for rc-tooltip 3.7
// Project: http://github.com/react-component/tooltip
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
	export type Placement =
		"left" | "right" | "top" | "bottom" |
		"topLeft" | "topRight" | "bottomLeft" | "bottomRight";

	export interface Props extends React.Props<any> {
		overlayClassName?: string;
		trigger?: Trigger[];
		mouseEnterDelay?: number;
		mouseLeaveDelay?: number;
		overlayStyle?: React.CSSProperties;
		prefixCls?: string;
		transitionName?: string;
		onVisibleChange?: (visible?: boolean) => void;
		afterVisibleChange?: (visible?: boolean) => void;
		visible?: boolean;
		defaultVisible?: boolean;
		placement?: Placement | Object;
		align?: Object;
		onPopupAlign?: (popupDomNode: Element, align: Object) => void;
		overlay: (() => React.ReactChild) | React.ReactChild | React.ReactFragment | React.ReactPortal;
		arrowContent?: React.ReactNode;
		getTooltipContainer?: () => Element;
		destroyTooltipOnHide?: boolean;
		id?: string;
	}
}

export default class Tooltip extends React.Component<RCTooltip.Props> {}
