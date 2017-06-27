import * as React from "react";

// <RootCloseWrapper />
interface RootCloseWrapperProps {
	onRootClose?(): void;
	children?: React.ReactNode;

	/**
	 * Disable the the RootCloseWrapper, preventing it from triggering
	 * `onRootClose`.
	 */
	disabled?: boolean;

	/**
	 * Choose which document mouse event to bind to
	 */
	event?: 'click' | 'mousedown';
}

declare class RootCloseWrapper extends React.Component<RootCloseWrapperProps> { }
declare namespace RootCloseWrapper { } // module export workaround: https://github.com/Microsoft/TypeScript/issues/5073
export = RootCloseWrapper;
