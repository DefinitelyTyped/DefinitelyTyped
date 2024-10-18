/// <reference types="jquery" />

/**
 * @see https://github.com/fronteed/icheck
 */
declare namespace ICheck {
    interface Options {
        /**
         * 'checkbox' or 'radio' to style only checkboxes or radio buttons, both by default
         * @default ""
         */
        handle?: "" | "checkbox" | "radio" | undefined;
        /**
         * Base class added to customized checkboxes
         * @default "icheckbox"
         */
        checkboxClass?: string | undefined;
        /**
         * Base class added to customized radio buttons
         * @default "iradio"
         */
        radioClass?: string | undefined;
        /**
         * Class added on checked state (input.checked = true)
         * @default "checked"
         */
        checkedClass?: string | undefined;
        /**
         * If not empty, used instead of 'checkedClass' option (checkbox input specific)
         * @default ""
         */
        checkedCheckboxClass?: string | undefined;
        /**
         * If not empty, used instead of 'checkedClass' option (radio button input specific)
         * @default ""
         */
        checkedRadioClass?: string | undefined;
        /**
         * If not empty, added as class name on unchecked state (input.checked = false)
         * @default ""
         */
        uncheckedClass?: string | undefined;
        /**
         * If not empty, used instead of 'uncheckedClass' option (checkbox input specific)
         * @default ""
         */
        uncheckedCheckboxClass?: string | undefined;
        /**
         * If not empty, used instead of 'uncheckedClass' option (radio button input specific)
         * @default ""
         */
        uncheckedRadioClass?: string | undefined;
        /**
         * Class added on disabled state (input.disabled = true)
         * @default "disabled"
         */
        disabledClass?: string | undefined;
        /**
         * If not empty, used instead of 'disabledClass' option (checkbox input specific)
         * @default ""
         */
        disabledCheckboxClass?: string | undefined;
        /**
         * If not empty, used instead of 'disabledClass' option (radio button input specific)
         * @default ""
         */
        disabledRadioClass?: string | undefined;
        /**
         * If not empty, added as class name on enabled state (input.disabled = false)
         * @default ""
         */
        enabledClass?: string | undefined;
        /**
         * If not empty, used instead of 'enabledClass' option (checkbox input specific)
         * @default ""
         */
        enabledCheckboxClass?: string | undefined;
        /**
         * If not empty, used instead of 'enabledClass' option (radio button input specific)
         * @default ""
         */
        enabledRadioClass?: string | undefined;
        /**
         * Class added on indeterminate state (input.indeterminate = true)
         * @default "indeterminate"
         */
        indeterminateClass?: string | undefined;
        /**
         * If not empty, used instead of 'indeterminateClass' option (checkbox input specific)
         * @default ""
         */
        indeterminateCheckboxClass?: string | undefined;
        /**
         * If not empty, used instead of 'indeterminateClass' option (radio button input specific)
         * @default ""
         */
        indeterminateRadioClass?: string | undefined;
        /**
         * If not empty, added as class name on determinate state (input.indeterminate = false)
         * @default ""
         */
        determinateClass?: string | undefined;
        /**
         * If not empty, used instead of 'determinateClass' option (checkbox input specific)
         * @default ""
         */
        determinateCheckboxClass?: string | undefined;
        /**
         * If not empty, used instead of 'determinateClass' option (radio button input specific)
         * @default ""
         */
        determinateRadioClass?: string | undefined;
        /**
         * Class added on hover state (pointer is moved onto an input)
         * @default "hover"
         */
        hoverClass?: string | undefined;
        /**
         * Class added on focus state (input has gained focus)
         * @default "focus"
         */
        focusClass?: string | undefined;
        /**
         * Class added on active state (mouse button is pressed on an input)
         * @default "active"
         */
        activeClass?: string | undefined;
        /**
         * Adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
         * @default true
         */
        labelHover?: boolean | undefined;
        /**
         * Class added to label if labelHover set to true
         * @default "hover"
         */
        labelHoverClass?: string | undefined;
        /**
         * Increase clickable area by given % (negative number to decrease)
         * @default ""
         */
        increaseArea?: string | undefined;
        /**
         * True to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
         * @default false
         */
        cursor?: boolean | undefined;
        /**
         * Set true to inherit original input's class name
         * @default false
         */
        inheritClass?: boolean | undefined;
        /**
         * If set to true, input's id is prefixed with 'iCheck-' and attached
         * @default false
         */
        inheritID?: boolean | undefined;
        /**
         * Set true to activate ARIA support
         * @default false
         */
        aria?: boolean | undefined;
        /**
         * Add HTML code or text inside customized input
         * @default ""
         */
        insert?: string | undefined;
    }

    interface Methods {
        /**
         * change input's state to 'checked'
         */
        check(): void;
        /**
         * remove 'checked' state
         */
        uncheck(): void;
        /**
         * toggle 'checked' state
         */
        toggle(): void;
        /**
         * change input's state to 'disabled'
         */
        disable(): void;
        /**
         * remove 'disabled' state
         */
        enable(): void;
        /**
         * change input's state to 'indeterminate'
         */
        indeterminate(): void;
        /**
         * remove 'indeterminate' state
         */
        determinate(): void;
        /**
         * apply input changes, which were done outside the plugin
         */
        update(): void;
        /**
         * remove all traces of iCheck
         */
        destroy(): void;
    }

    interface Events {
        /**
         * user clicked on a customized input or an assigned label
         */
        ifClicked(): void;
        /**
         * input's "checked", "disabled" or "indeterminate" state is changed
         */
        ifChanged(): void;
        /**
         * input's state is changed to "checked"
         */
        ifChecked(): void;
        /**
         * "checked" state is removed
         */
        ifUnchecked(): void;
        /**
         * input's "checked" state is changed
         */
        ifToggled(): void;
        /**
         * input's state is changed to "disabled"
         */
        ifDisabled(): void;
        /**
         * "disabled" state is removed
         */
        ifEnabled(): void;
        /**
         * input's state is changed to "indeterminate"
         */
        ifIndeterminate(): void;
        /**
         * "indeterminate" state is removed
         */
        ifDeterminate(): void;
        /**
         * input is just customized
         */
        ifCreated(): void;
        /**
         * customization is just removed
         */
        ifDestroyed(): void;
    }
}

interface JQuery {
    iCheck(options?: ICheck.Options): this;
    iCheck<T extends keyof ICheck.Methods>(method: T, callback?: ICheck.Methods[T]): this;
}
