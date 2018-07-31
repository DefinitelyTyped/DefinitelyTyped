import * as React from "react";

declare class RootCloseWrapper extends React.Component<RootCloseWrapperProps> { }
declare namespace RootCloseWrapper { }
export = RootCloseWrapper;

interface RootCloseWrapperProps {
  /**
   * Callback fired after click or mousedown. Also triggers when user hits `esc`.
   */
  onRootClose?(e: React.SyntheticEvent<any>): void;

  /**
   * Children to render.
   */
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
