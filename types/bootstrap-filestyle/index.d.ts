// Type definitions for bootstrap-filestyle 1.0
// Project: https://github.com/markusslima/bootstrap-filestyle
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface FilestyleOptions {
    buttonText?: string;
    iconName?: string;
    buttonName?: string;
    size?: string;
    input?: boolean;
    badge?: boolean;
    icon?: boolean;
    buttonBefore?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

interface JQuery {
    filestyle(options?: FilestyleOptions): JQuery;

    /**
     * Clear selected files.
     */
    filestyle(method: 'clear'): JQuery;

    /**
     * Destroy a filestyle completely.
     */
    filestyle(method: 'destroy'): JQuery;

    /**
     * Disabled button. Type: Bool, Default: false
     */
    filestyle(method: 'disabled', value: boolean): JQuery;

    /**
     * Button before. Type: Bool, Default: false
     */
    filestyle(method: 'buttonBefore', value: boolean): JQuery;

    /**
     * Enables or disables the button icon. Type: Boolean, Default: true
     */
    filestyle(method: 'icon', value: boolean): JQuery;

    /**
     * Enables or disables the input text. Type: Boolean, Default: true. 
     */
    filestyle(method: 'input', value: boolean): JQuery;

    /**
     * Change size bootstrap of the button and input. Type: String, Default: "nr"
     */
    filestyle(method: 'size', value: string): JQuery;

    /**
     * Setting placeholder attribute. Type: String, Default:""
     */
    filestyle(method: 'placeholder', value: string): JQuery;

    /**
     * Changes the button text. Type: String, Default: "Choose file"
     */
    filestyle(method: 'buttonText', value: string): JQuery;

    /**
     * Change classes bootstrap button. Type: String, Default: "btn-default"
     */
    filestyle(method: 'buttonName', value: string): JQuery;

    /**
     * Change classes bootstrap icons. Type: String, Default: "glyphicon-folder-open"
     */
    filestyle(method: 'iconName', value: string): JQuery;

    /**
     * Set or get the value of the icon option
     */
    filestyle(method: 'htmlIcon'): JQuery;

    filestyle(method: 'htmlInput'): JQuery;
    /**
     * puts the name of the input files
     * return files
     */
    filestyle(method: 'pushNameFiles'): JQuery;
}
