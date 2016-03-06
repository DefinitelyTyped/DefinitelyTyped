// Type definitions for iCheck v0.8
// Project: http://damirfoy.com/iCheck/
// Definitions by: Dániel Tar <https://github.com/qcz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ICheckOptions {
	/**
	* 'checkbox' or 'radio' to style only checkboxes or radio buttons, both by default
	*/
	handle?: string;
	/**
	* Base class added to customized checkboxes
	*/
	checkboxClass?: string;
	/**
	* Base class added to customized radio buttons
	*/
	radioClass?: string;
	/**
	* Class added on checked state (input.checked = true)
	*/
	checkedClass?: string;
	/**
	* If not empty, used instead of 'checkedClass' option (checkbox input specific)
	*/
	checkedCheckboxClass?: string;
	/**
	* If not empty, used instead of 'checkedClass' option (radio button input specific)
	*/
	checkedRadioClass?: string;
	/**
	* If not empty, added as class name on unchecked state (input.checked = false)
	*/
	uncheckedClass?: string;
	/**
	* If not empty, used instead of 'uncheckedClass' option (checkbox input specific)
	*/
	uncheckedCheckboxClass?: string;
	/**
	* If not empty, used instead of 'uncheckedClass' option (radio button input specific)
	*/
	uncheckedRadioClass?: string;
	/**
	* Class added on disabled state (input.disabled = true)
	*/
	disabledClass?: string;
	/**
	* If not empty, used instead of 'disabledClass' option (checkbox input specific)
	*/
	disabledCheckboxClass?: string;
	/**
	* If not empty, used instead of 'disabledClass' option (radio button input specific)
	*/
	disabledRadioClass?: string;
	/**
	* If not empty, added as class name on enabled state (input.disabled = false)
	*/
	enabledClass?: string;
	/**
	* If not empty, used instead of 'enabledClass' option (checkbox input specific)
	*/
	enabledCheckboxClass?: string;
	/**
	* If not empty, used instead of 'enabledClass' option (radio button input specific)
	*/
	enabledRadioClass?: string;
	/**
	* Class added on hover state (pointer is moved onto an input)
	*/
	hoverClass?: string;
	/**
	* Class added on focus state (input has gained focus)
	*/
	focusClass?: string;
	/**
	* Class added on active state (mouse button is pressed on an input)
	*/
	activeClass?: string;
	/**
	* Adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
	*/
	labelHover?: boolean;
	/**
	* Class added to label if labelHover set to true
	*/
	labelHoverClass?: string;
	/**
	* Increase clickable area by given % (negative number to decrease)
	*/
	increaseArea?: string;
	/**
	* True to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
	*/
	cursor?: boolean;
	/**
	* Set true to inherit original input's class name
	*/
	inheritClass?: boolean;
	/**
	* If set to true, input's id is prefixed with 'iCheck-' and attached
	*/
	inheritID?: boolean;
	/**
	* Add HTML code or text inside customized input
	*/
	insert?: string;
}

interface JQuery {
	iCheck(options?: ICheckOptions): JQuery;
	iCheck(command: string, callback?: () => void): void;
}
