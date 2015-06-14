// Type definitions for Drupal-8.0.x Core-ajax
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface AjaxEffect {

            showEffect: string;

            hideEffect: string;

            showSpeed: string;

        }

        export interface AjaxError extends Error {

            new (
                xmlhttp: XMLHttpRequest,
                uri: string
            ): AjaxError;

            constructor: AjaxError;

        }

        export interface AjaxElementSettings {

            url: string

            event?: string;

            method?: string;

            // Dialog Options.
            dialog?: any;

        }

        export interface Ajax {

            new (
                base: string,
                element: HTMLElement,
                elementSettings: AjaxElementSettings
            ): Ajax;

            commands: AjaxCommands;

            instanceIndex: boolean;

            wrapper: string;

            element: HTMLElement;

            element_settings: AjaxElementSettings;

            $form?: JQuery;

            url?: string;

            options: JQueryAjaxSettings;

            execute: () => void;

            keypressResponse: (
                element: HTMLElement,
                event: JQueryEventObject
            ) => void;

            eventResponse: (
                element: HTMLElement,
                event: JQueryEventObject
            ) => void;

            beforeSerialize: (
                element: HTMLElement,
                options: any
            ) => void;

            beforeSubmit: (
                form_values: any,
                element: HTMLElement,
                options: any
            ) => void;

            setProgressIndicatorBar: () => void;

            setProgressIndicatorThrobber: () => void;

            setProgressIndicatorFullscreen: () => void;

            success: (
                response: XMLHttpRequest,
                status: any
            ) => void;

            getEffect: (
                response: XMLHttpRequest
            ) => AjaxEffect;

            error: (
                response: XMLHttpRequest,
                uri: string
            ) => void;

        }

        export interface AjaxCommand {
            (
                ajax: Ajax,
                response: XMLHttpRequest,
                status: any
            ): void;
        }

        export interface AjaxCommands {

            new (): AjaxCommands;

            insert: AjaxCommand;

            remove: AjaxCommand;

            changed: AjaxCommand;

            alert: AjaxCommand;

            redirect: AjaxCommand;

            css: AjaxCommand;

            data: AjaxCommand;

            invoke: AjaxCommand;

            restripe: AjaxCommand;

            update_build_id: AjaxCommand;

            add_css: AjaxCommand;

        }

        export interface ajax {

            new (
                settings: drupal.DrupalSettings
            ): Ajax;

            instances: Ajax[];

            WRAPPER_FORMAT: string;

        }

        export interface Behaviors {

            AJAX?: Behavior;

        }

    }

    export interface DrupalStatic {

        Ajax?: Core.Ajax;

        AjaxCommands?: Core.AjaxCommands;

        AjaxError?: Core.AjaxError;

        ajax: Core.ajax;

    }

}
