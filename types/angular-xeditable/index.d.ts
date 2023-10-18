import * as angular from "angular";

declare module "angular" {
    namespace xeditable {
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

        interface IEditableFormController extends angular.IFormController {
            /**
             * Shows form with editable controls.
             */
            $show(): void;

            /**
             * Hides form with editable controls without saving.
             */
            $hide(): void;

            /**
             * Sets focus on form field specified by `name`.<br/>
             * When trying to set the focus on a form field of a new row in the editable table, the `$activate` call needs to be wrapped in a `$timeout` call so that the form is rendered before the `$activate` function is called.
             *
             * @param name name of field
             */
            $activate(name: string): void;

            /**
             * Triggers `oncancel` event and calls `$hide()`.
             */
            $cancel(): void;

            $setWaiting(value: boolean): void;

            /**
             * Shows error message for particular field.
             *
             * @param name name of field
             * @param msg error message
             */
            $setError(name: string, msg: string): void;

            $submit(): void;

            $save(): void;
        }
    }
}
