interface DialogData {
	title?: string;
	content?: string | HTMLElement;
	close?: (html: HTMLElement | JQuery) => void;
	buttons?: Record<string, DialogButton>;
	default?: string;
}

interface DialogButton {
	icon?: string;
	label?: string;
	callback?: (html: HTMLElement | JQuery) => void;
}

interface ConfirmDialog {
	title: string;
	content: string;
	yes: Function;
	no: Function;
	defaultYes?: boolean;
}

/**
 * Create a modal dialog window displaying a title, a message, and a set of buttons which trigger callback functions.
 *
 * @param dialogData			An object of dialog data which configures how the modal window is rendered
 * @param dialogData.title		The window title
 * @param dialogData.content	HTML content
 * @param dialogData.close		Common callback operations to perform when the dialog is closed
 * @param dialogData.buttons	Action buttons which trigger callback functions.
 *								Buttons are defined as an Object with the format ``{name: buttonData}``.
 *								Valid keys for buttonData include:
 *
 * @param dialogData.buttons.button.icon		A button icon
 * @param dialogData.buttons.button.label		A button label
 * @param dialogData.buttons.button.callback	A callback function taking no arguments
 *
 * @param options			Dialog rendering options, see :class:`Application`
 * @param options.default	The name of the default button which should be triggered on Enter
 *
 * @example
 * let d = new Dialog({
 *  title: "Test Dialog",
 *  content: "<p>You must choose either Option 1, or Option 2</p>",
 *  buttons: {
 *   one: {
 *    icon: '<i class="fas fa-check"></i>',
 *    label: "Option One",
 *    callback: () => console.log("Chose One")
 *   },
 *   two: {
 *    icon: '<i class="fas fa-times"></i>',
 *    label: "Option Two",
 *    callback: () => console.log("Chose Two")
 *   }
 *  },
 *  default: "two",
 *  close: () => console.log("This always is logged no matter which option is chosen")
 * });
 * d.render(true);
 */
declare class Dialog extends Application {
	constructor(dialogData: DialogData, options?: ApplicationOptions);

	/**
	 * A helper function to reduce code duplication when creating confirmation dialog windows.
	 * These windows are limited in flexibility, for simple yes/no prompts.
	 * If you require more flexibility, a custom Dialog instance is preferred.
	 * @param title		The confirmation window title
	 * @param content	The confirmation message
	 * @param yes		Callback function upon yes
	 * @param no		Callback function upon no
	 * @param defaultYes
	 */
	static confirm(
		{ title, content, yes, no, defaultYes }?: ConfirmDialog,
		options?: ApplicationOptions
	): Promise<void>;
}
