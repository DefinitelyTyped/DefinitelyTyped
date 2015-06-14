// Type definitions for Drupal-8.0.x Core-ajax
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IAjaxEffect {

            showEffect: string;

            hideEffect: string;

            showSpeed: string;

        }

        export interface IAjaxError extends Error {

            new (
                xmlhttp: XMLHttpRequest,
                uri: string
            ): IAjaxError;

            constructor: IAjaxError;

        }

        export interface IAjaxElementSettings {

            url: string

            event?: string;

            method?: string;

            // Dialog Options.
            dialog?: any;

        }

        export interface IAjax {

            new (
                base: string,
                element: HTMLElement,
                elementSettings: IAjaxElementSettings
            ): IAjax;

            commands: IAjaxCommands;

            instanceIndex: boolean;

            wrapper: string;

            element: HTMLElement;

            element_settings: IAjaxElementSettings;

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
            ) => IAjaxEffect;

            error: (
                response: XMLHttpRequest,
                uri: string
            ) => void;

        }

        export interface IAjaxCommand {
            (
                ajax: IAjax,
                response: XMLHttpRequest,
                status: any
            ): void;
        }

        export interface IAjaxCommands {

            new (): IAjaxCommands;

            insert: IAjaxCommand;

            remove: IAjaxCommand;

            changed: IAjaxCommand;

            alert: IAjaxCommand;

            redirect: IAjaxCommand;

            css: IAjaxCommand;

            data: IAjaxCommand;

            invoke: IAjaxCommand;

            restripe: IAjaxCommand;

            update_build_id: IAjaxCommand;

            add_css: IAjaxCommand;

        }

        export interface Iajax {

            new (
                settings: drupal.IDrupalSettings
            ): IAjax;

            instances: IAjax[];

            WRAPPER_FORMAT: string;

        }

        export interface IBehaviors {

            AJAX?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        Ajax?: Core.IAjax;

        AjaxCommands?: Core.IAjaxCommands;

        AjaxError?: Core.IAjaxError;

        ajax: Core.Iajax;

    }

}
