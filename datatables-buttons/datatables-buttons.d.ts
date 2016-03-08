// Type definitions for JQuery DataTables Buttons extension 1.1.0
// Project: http://datatables.net/extensions/buttons/
// Definitions by: Sam Germano <https://github.com/SammyG4Free>, Kiarash Ghiaseddin <https://github.com/Silver-Connection/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../jquery.dataTables/jquery.dataTables.d.ts"/>

declare module DataTables {
    export interface Settings {       
        /**
         * Buttons extension options
         */
        buttons?: boolean | ButtonsSettings | Array<string | ButtonSettings>;
    }
	
    //#region "buttons-general-settings"
    
    export interface ButtonsSettings {
        /**
        * As multiple Buttons instances can be attached to a single DataTable, it can be useful to be able to select each instance individually. Since: Buttons 1.0.0
        */
        name?: string;
        
        /**
        * Options to control the DOM structure Buttons creates. Since: Buttons 1.0.0
        */
        dom?: ButtonsDomSettings;
        
        /**
        * List of buttons to be created. Since: Buttons 1.0.0
        */
        buttons?: ButtonSettings | Array<string | ButtonSettings>;
    }
    
    //#region "buttons-general-settings"
    
    //#region "buttons-dom-settings"
    
     export interface ButtonsDomSettings {
        /**
        * As multiple Buttons instances can be attached to a single DataTable, it can be useful to be able to select each instance individually. Since: Buttons 1.0.0
        */
        container?: ButtonsDomContainerSettings;
        
        /**
        * DOM configuration for individual button elements.
        */
        button?: ButtonsDomButtonSettings;
        buttons?: ButtonsDomButtonSettings;
        
        /**
        * DOM configuration of a button container element.
        */
        buttonContainer?: ButtonsDomContainerSettings;
        
        /**
        * DOM configuration of a button liner element.
        */
        buttonLiner?: ButtonsDomContainerSettings;
        
        /**
        * DOM configuration of the collection display.
        */
        collection?: ButtonsDomContainerSettings;
    }
    
    export interface ButtonsDomContainerSettings {
        /**
        * Value which defines the element's class name. Multiple classes can be given using space separation.
        */
        className?: string;
        
        /**
        * Value which defines the HTML tag to use. There should be no spaces or any other formatting - e.g. it should simply be div, aside, etc.
        */
        tag?: string;
    }
        
    export interface ButtonsDomButtonSettings extends ButtonsDomContainerSettings {
        /**
        * The class name to assign to the button when the button is in the disabled state.
        */
        active?: string;
        
        /**
        * The class name to assign to the button when the button is in the active state.
        */
        disabled?: string;
    }
    
    //#endregion "buttons-dom-settings"
    
    //#region "button-settings"
    
    /**
    * Buttons extension options
    */
    export interface ButtonSettings {
        /**
        * Action to take when the button is activated
        */
        action?: FunctionButtonAction;

        /**
        * Ensure that any requirements have been satisfied before initialising a button
        */
        available?: FunctionButtonAvailable;

        /**
        * Set the class name for the button
        */
        className?: string;

        /**
        * Function that is called when the button is destroyed
        */
        destroy?: FunctionButtonInit;

        /**
        * Set a button's initial enabled state
        */
        enabled?: boolean;
        disable?: boolean;

        /**
        * Define which button type the button should be based on
        */
        extend?: string;

        /**
        * Initialisation function that can be used to add events specific to this button
        */
        init?: FunctionButtonInit;

        /**
        * Define an activation key for a button
        */
        key?: string | ButtonKey;

        /**
        * Set a name for each selection
        */
        name?: string;

        /**
        * Unique namespace for every button
        */
        namespace?: string;

        /**
        * The text to show in the button
        */
        text?: string | FunctionButtonText;

        /**
        * Button 'title' attribute text
        */
        titleAttr?: string;

        exportOptions?: ButtonExportOptions;
        autoPrint?: boolean;
    }

    export interface ButtonExportOptions {
        columns?: string;
    }

    export interface ButtonKey {
        /**
        * The character to listen for. The character is case insensitive.
        */
        key?: string;
        
        /**
        * When set to true activation will only occur if the shift key is also being held.
        */
        shiftKey?: boolean;
        
        /**
        * When set to true activation will only occur if the alt key is also being held.
        */
        altKey?: boolean;
        
        /**
        * When set to true activation will only occur if the ctrl key is also being held.
        */
        ctrlKey?: boolean;
        
        /**
        * When set to true activation will only occur if the cmd key (Mac) or Windows key (Windows) is also being held.
        */
        metaKey?: boolean;
    }

    export interface FunctionButtonAvailable {
        (dt: DataTables.DataTable, config: ButtonSettings): boolean
    }

    export interface FunctionButtonText {
        (dt: DataTables.DataTable, node: JQuery, config: ButtonSettings): string
    }
    
    export interface FunctionButtonInit {
        (dt: DataTables.DataTable, node: JQuery, config: ButtonSettings): void
    }
    
    export interface FunctionButtonAction {
        (e: any, dt: DataTables.DataTable, node: JQuery, config: ButtonSettings): void
    }
    //#endregion "button-settings
}