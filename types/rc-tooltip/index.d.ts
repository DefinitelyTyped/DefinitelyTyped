// Type definitions for rc-tooltip v3.4.2
// Project: https://github.com/react-component/tooltip
// Definitions by: rhysd <https://rhysd.github.io>
//                 ahstro <http://ahst.ro>
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
		visible?: boolean;
		defaultVisible?: boolean;
		placement?: Placement | Object;
		align?: Object;
		onPopupAlign?: (popupDomNode: Element, align: Object) => void;
		overlay: React.ReactNode;
		arrowContent?: React.ReactNode;
		getTooltipContainer?: () => Element;
		destroyTooltipOnHide?: boolean;
	}
}

export default class Tooltip extends React.Component<RCTooltip.Props> {}
