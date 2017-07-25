import * as React from 'react';
import { TransitionCallbacks } from 'react-overlays';

declare class Transition extends React.Component<TransitionProps> { }
declare namespace Transition { }
export = Transition;

interface TransitionProps extends TransitionCallbacks {
	className?: string;

	/**
	 * Show the component; triggers the enter or exit animation
	 */
	in?: boolean;

	/**
	 * Unmount the component (remove it from the DOM) when it is not shown
	 */
	unmountOnExit?: boolean;

	/**
	 * Run the enter animation when the component mounts, if it is initially
	 * shown
	 */
	transitionAppear?: boolean;

	/**
	 * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
	 * transition indefinately if the browser transitionEnd events are
	 * canceled or interrupted.
	 *
	 * By default this is set to a high number (5 seconds) as a failsafe. You should consider
	 * setting this to the duration of your animation (or a bit above it).
	 */
	timeout?: number;

	/**
	 * CSS class or classes applied when the component is exited
	 */
	exitedClassName?: string;

	/**
	 * CSS class or classes applied while the component is exiting
	 */
	exitingClassName?: string;

	/**
	 * CSS class or classes applied when the component is entered
	 */
	enteredClassName?: string;

	/**
	 * CSS class or classes applied while the component is entering
	 */
	enteringClassName?: string;
}
