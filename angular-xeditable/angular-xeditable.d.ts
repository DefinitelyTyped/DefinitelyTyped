// Type definitions for Angular xEditable 0.2.0 (angular.xeditable module)
// Project: https://vitalets.github.io/angular-xeditable/
// Definitions by: Joao Monteiro <https://github.com/jpmnteiro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare namespace angular.xeditable {

    interface IEditableOptions {

        /**
          * Theme. Possible values `bs3`, `bs2`, `default`
          */
        theme: string;

        /**
          * Icon Set. Possible values `font-awesome`, `default`.
          */
        icon_set: string;

        /**
          * Whether to show buttons for single editalbe element.  
          * Possible values `right` (default), `no`.
          */
        buttons: string;

        /**
          * Default value for `blur` attribute of single editable element.  
          * Can be `cancel|submit|ignore`.
          */
        blurElem: string;

        /**
          * Default value for `blur` attribute of editable form.  
          * Can be `cancel|submit|ignore`.
          */
        blurForm: string;

        /**
          * How input elements get activated. Possible values: `focus|select|none`.
          */
        activate: string;

        /**
          * Whether to disable x-editable. Can be overloaded on each element.
         */
        isDisabled: boolean;

        /*
         * Event, on which the edit mode gets activated. 
         * Can be any event.
         */
        activationEvent: string;
    }
}