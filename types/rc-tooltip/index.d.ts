// Type definitions for rc-tooltip v3.4.2
// Project: https://github.com/react-component/tooltip
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />

declare namespace Tooltip {
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
		onVisibleChange?: () => void;
		visible?: boolean;
		defaultVisible?: boolean;
		placement?: Placement | Object;
		align?: Object;
		onPopupAlign?: (popupDomNode: Element, align: Object) => void;
		overlay: React.ReactElement<any> | (() => React.ReactElement<any>);
		arrowContent?: React.ReactNode;
		getTooltipContainer?: () => Element;
		destroyTooltipOnHide?: boolean;
	}
}

declare class Tooltip extends React.Component<Tooltip.Props> {}

declare module "rc-tooltip" {
	export = Tooltip
}
