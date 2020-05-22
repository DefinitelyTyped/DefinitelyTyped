interface FormApplicationOptions extends ApplicationOptions {
	/**
	 * Whether the application form is editable - if true, it's fields will
	 * be unlocked and the form can be submitted. If false, all form fields
	 * will be disabled and the form cannot be submitted. Default is true.
	 */
	editable?: boolean;
	/**
	 * Whether to automatically close the application when it's contained
	 * form is submitted. Default is true.
	 */
	closeOnSubmit?: boolean;
	/**
	 * Whether to automatically submit the contained HTML form when the
	 * application window is manually closed. Default is false.
	 */
	submitOnClose?: boolean;
	/**
	 * Whether to automatically submit the contained HTML form when an input
	 * or select element is changed. Default is false.
	 */
	submitOnChange?: boolean;
}

/**
 * An abstract pattern for defining an Application responsible for updating some object using an HTML form
 *
 * A few critical assumptions:
 * 1) This application is used to only edit one object at a time
 * 2) The template used contains one (and only one) HTML <form> as it's outer-most element
 * 3) This abstract layer has no knowledge of what is being updated, so the implementation must define _updateObject
 *
 * @param object	Some object or entity which is the target to be updated.
 *
 * @param options	Additional options which modify the rendering of the sheet.
 */
declare class FormApplication extends Application {
	options: FormApplicationOptions;

	/** The object target which we are using this form to modify */
	object: any;

	/** A convenience reference to the form HTLMElement */
	form: HTMLElement;

	/**
	 * Keep track of any FilePicker instances which are associated with this form
	 * The values of this Array are inner-objects with references to the FilePicker instances and other metadata
	 */
	filepickers: any[];

	/**
	 * Keep track of any mce editors which may be active as part of this form
	 * The values of this Array are inner-objects with references to the MCE editor and other metadata
	 */
	editors: any;

	constructor(object: any, options?: FormApplicationOptions);

	/**
	 * Assign the default options which are supported by the entity edit sheet
	 */
	static get defaultOptions(): FormApplicationOptions;

	/**
	 * Is the Form Application currently editable?
	 */
	get isEditable(): boolean;

	/**
	 * Render the FormApplication inner sheet content.
	 * See `Application._renderInner` for more detail.
	 */
	protected _renderInner(...args: any[]): Promise<JQuery | HTMLElement>;

	/**
	 * A helper function to transform an HTML form into a FormData object which is ready for dispatch
	 * @param form	The form-type HTMLElement
	 * @return		The prepared FormData object
	 */
	protected _getFormData(form: JQuery | HTMLElement): FormData;

	/* -------------------------------------------- */
	/*  Event Listeners and Handlers                */
	/* -------------------------------------------- */

	/**
	 * Activate the default set of listeners for the Entity sheet
	 * These listeners handle basic stuff like form submission or updating images
	 *
	 * @param html	The rendered template ready to have listeners attached
	 */
	protected activateListeners(html: JQuery | HTMLElement): void;

	/**
	 * If the form is not editable, disable its input fields
	 */
	protected _disableFields(form: JQuery | HTMLElement): void;

	/**
	 * Handle the change of a color picker input which enters it's chosen value into a related input field
	 */
	protected _onColorPickerChange(event: Event | JQuery.Event): void;

	/**
	 * Handle standard form submission steps
	 * @param event			The submit event which triggered this handler
	 * @param updateData	Additional specific data keys/values which override or extend the contents of
	 *						the parsed form. This can be used to update other flags or data fields at the
	 *						same time as processing a form submission to avoid multiple database operations.
	 * @param preventClose	Override the standard behavior of whether to close the form on submit
	 * @returns				A promise which resolves to the validated update data
	 */
	protected _onSubmit(
		event: Event | JQuery.Event,
		{
			updateData,
			preventClose,
		}?: { updateData?: any; preventClose?: boolean }
	): Promise<any>;

	/**
	 * Handle unfocusing an input on form - maybe trigger an update if ``options.liveUpdate`` has been set to true
	 * @param event	The initial triggering event
	 */
	protected _onUnfocus(event: Event | JQuery.Event): void;

	/**
	 * This method is called upon form submission after form data is validated
	 * @param event		The initial triggering submission event
	 * @param formData	The object of validated form data with which to update the object
	 * @returns			A Promise which resolves once the update operation has completed
	 */
	protected _updateObject(
		event: Event | JQuery.Event,
		formData: any
	): Promise<any>;

	/* -------------------------------------------- */
	/*  TinyMCE Editor
	/* -------------------------------------------- */

	/**
	 * Activate a TinyMCE editor instance present within the form
	 */
	protected _activateEditor(div: JQuery | HTMLElement): void;

	/**
	 * By default, when the editor is saved treat it as a form submission event
	 */
	protected _onEditorSave(
		target: any,
		element: JQuery | HTMLElement,
		content: string
	): void;

	/**
	 * Activate a FilePicker instance present within the form
	 */
	protected _activateFilePicker(button: JQuery | HTMLElement): void;

	/**
	 * Extend the logic applied when the application is closed to destroy any remaining MCE instances
	 * This function returns a Promise which resolves once the window closing animation concludes
	 */
	close(): Promise<void>;

	/**
	 * Submit the contents of a Form Application, processing its content as defined by the Application
	 * @param updateData	Additional data updates to submit in addition to those parsed from the form
	 * @returns				Return a self-reference for convenient method chaining
	 */
	submit({ updateData }: { updateData?: any }): FormApplication;
}
