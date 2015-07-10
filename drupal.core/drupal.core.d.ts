// Type definitions for Drupal-8.0.x Core-Drupal
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>

declare module drupal {

    export module Core {

        export interface Behavior {

            attach: (
                context?: HTMLElement,
                settings?: DrupalSettings
            ) => void;

            detach?: (
                context?: HTMLElement,
                settings?: DrupalSettings,
                trigger?: string
            ) => void;

        }

        export interface Behaviors {

            // @todo Remove this wildcard and list the behaviors one by one.
            [key: string]: Behavior;

        }

        export interface TranslationOptions {

            context?: string;

        }

        export interface Placeholders {
            [key: string]: string
        }

        export interface Theme {

            placeholder?: (str: string) => string;

        }

        export interface Point {

            x: number;

            y: number;

        }

        export interface Range {

            min: number;

            max: number;

        }

        export interface Offsets {

            top: number;

            right: number;

            bottom: number;

            left: number;

        }
    }

    export interface DrupalSettings {

        path: {
            baseUrl: string;
            currentLanguage: string;
            currentPath: string;
            currentPathIsAdmin: string;
            isFront: boolean;
            pathPrefix: string;
            scriptPath: string;
        }

        pluralDelimiter: string;

        user: {
            uid: number;
            permissionsHash: string;
        }

        jquery?: {
            ui?: {
                datepicker?: JQueryUI.DatepickerOptions;
            }
        }

    }

    export interface DrupalStatic {

        attachBehaviors?: (
            context: HTMLElement,
            settings: DrupalSettings
        ) => any;

        behaviors?: Core.Behaviors;

        checkPlain?: (
            text: string
        ) => string;

        checkWidthBreakpoint?: (
            width: number
        ) => any;

        encodePath?: (
            item: any
        ) => any;

        formatPlural?: (
            count: number,
            singular: string,
            plural: string,
            args?: Core.Placeholders,
            options?: Core.TranslationOptions
        ) => string;

        formatString?: (
            str: string,
            args: Core.Placeholders
        ) => string;

        stringReplace?: (
            str: string,
            args?: Core.Placeholders,
            keys?: string[]
        ) => string;

        t?: (
            str: string,
            args?: Core.Placeholders,
            options?: Core.TranslationOptions
        ) => string;

        theme?: Core.Theme;

        url?: (path: string) => string;

    }
}

declare var drupalSettings: drupal.DrupalSettings;
declare var Drupal: drupal.DrupalStatic;
