// Type definitions for jGrowl
// Project: https://github.com/stanlemon/jGrowl
// Definitions by: Pavel Sommer <https://github.com/pavelsommer/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * @summary Interface for jquery.jGrowl plugin
 * @author Pavel Sommer
 * @version 1.0
 */
interface jGrowlOptions {
	/**
	 * Limit the number of messages appearing at a given time to the number in the pool.
	 * @default 0
	 */
	pool?: Number;

	/**
	 * Optional header to prefix the message, this is often helpful for associating messages to each other.
	 * @default empty
	 */
	header?: string;

	/**
	 * A css class to be applied to notifications when they are created, useful for 'grouping' notifications by a css selector.
	 * @default empty
	 */
	group?: string;

	/**
	 * When set to true a message will stick to the screen until it is intentionally closed by the user.
	 * @default false
	 */
	sticky?: boolean;
	
	/**
	 * Designates a class which is applied to the jGrowl container and controls its position on the screen. By Default there are five options available, top-left, top-right, bottom-left, bottom-right, center. This must be changed in the defaults before the startup method is called.
	 * @default 'top-right'
	 */
	position?: string;
	
	/**
	 * The element where our jGrowl messages are appended to. The default is  body  but feel free to define another one.
	 * @default 'body'
	 */
	appendTo?: string;
	
	/**
	 * Designates whether a jGrowl notification should be appended to the container after all notifications, or whether it should be prepended to the container before all notifications. Options are after or before.
	 * @default 'after'
	 */
	glue?: string;
	
	/**
	 * A CSS class designating custom styling for this particular message, intended for use with jQuery UI.
	 * @default 'default'
	 */
	theme?: string;
	
	/**
	 * A CSS class designating custom styling for this particular message and its state, intended for use with jQuery UI.
	 * @default 'highlight'
	 */
	themeState?: string;
	
	/**
	 * If the corners jQuery plugin is include this option specifies the curvature radius to be used for the notifications as they are created.
	 * @default '10px'
	 */
	corners?: string;
	
	/**
	 * The frequency that jGrowl should check for messages to be scrubbed from the screen.This must be changed in the defaults before the startup method is called.
	 * @default 250
	 */
	check?: Number;
	
	/**
	 * The lifespan of a non-sticky message on the screen.
	 * @default 3000
	 */
	life?: Number;
	
	/**
	 * The animation speed used to close a notification.
	 * @default 'normal'
	 */
	closeDuration?: any;
	
	/**
	 * The animation speed used to open a notification.
	 * @default 'normal'
	 */
	openDuration?: any;
	
	/**
	 * The easing method to be used with the animation for opening and closing a notification.
	 * @default 'swing'
	 */
	easing?: any;
	
	/**
	 * Whether or not the close-all button should be used when more then one notification appears on the screen. Optionally this property can be set to a function which will be used as a callback when the close all button is clicked. This must be changed in the defaults before the startup method is called.
	 * @default true
	 */
	closer?: boolean;
	
	/**
	 * This content is used for the individual notification close links that are added to the corner of a notification. This must be changed in the defaults before the startup method is called.
	 * @default 'x'
	 */
	closeTemplate?: string;
	
	/**
	 * This content is used for the close-all link that is added to the bottom of a jGrowl container when it contains more than one notification. This must be changed in the defaults before the startup method is called.
	 * @default <div>[ close all ]</div>
	 */
	closerTemplate?: string;
	
	/**
	 * Callback to be used before anything is done with the notification. This is intended to be used if the user would like to have some type of logging mechanism for all notifications passed to jGrowl. This callback receives the notification's DOM context, the notifications message and its option object.
	 */
	log? (e?: any, m?: any, o?: any): void;
	
	/**
	 * Callback to be used before a new notification is opened. This callback receives the notification's DOM context, the notifications message and its option object.
	 */
	beforeOpen? (e?: any, m?: any, o?: any): void;
	
	/**
	 * Callback to be used after a new notification is opened. This callback receives the notification's DOM context, the notifications message and its option object.
	 */
	afterOpen? (e?: any, m?: any, o?: any): void;
	
	/**
	 * Callback to be used when a new notification is opened. This callback receives the notification's DOM context, the notifications message and its option object.
	 */
	open? (e?: any, m?: any, o?: any): void;
	
	/**
	 * Callback to be used before a new notification is closed. This callback receives the notification's DOM context, the notifications message and its option object.
	 */
	beforeClose? (e?: any, m?: any, o?: any): void;
	
	/**
	 * Callback to be used when a new notification is closed. This callback receives the notification's DOM context, the notifications message and its option object.
	 */
	close? (e?: any, m?: any, o?: any): void;
	
	/**
	 * The animation properties to use when opening a new notification (default to fadeOut).
	 * @default { opacity: 'show' }
	 */
	animateOpen?: any;
	
	/**
	 * The animation properties to use when closing a new notification (defaults to fadeIn).
	 * @default { opacity: 'hide' }
	 */
	animateClose?: any;
}

interface JQueryStatic {
	jGrowl(content: string): void;
	jGrowl(content: string, options?: jGrowlOptions): void;
}