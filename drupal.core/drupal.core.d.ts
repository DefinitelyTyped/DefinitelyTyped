// Type definitions for Drupal-8.0.x Core-Drupal
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>

declare module drupal {

    export module Core {

        export interface IBehavior {

            attach: (
                context?: HTMLElement,
                settings?: IDrupalSettings
            ) => void;

            detach?: (
                context?: HTMLElement,
                settings?: IDrupalSettings,
                trigger?: string
            ) => void;

        }

        export interface IBehaviors {

            // @todo Remove this wildcard and list the behaviors one by one.
            [key: string]: IBehavior;

        }

        export interface ITranslationOptions {

            context?: string;

        }

        export interface IPlaceholders {
            [key: string]: string
        }

        export interface ITheme {

            placeholder?: (str: string) => string;

        }

        export interface IPoint {

            x: number;

            y: number;

        }

        export interface IRange {

            min: number;

            max: number;

        }

        export interface IOffsets {

            top: number;

            right: number;

            bottom: number;

            left: number;

        }
    }

    export interface IDrupalSettings {

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

    export interface IDrupalStatic {

        attachBehaviors?: (
            context: HTMLElement,
            settings: IDrupalSettings
        ) => any;

        behaviors?: Core.IBehaviors;

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
            args?: Core.IPlaceholders,
            options?: Core.ITranslationOptions
        ) => string;

        formatString?: (
            str: string,
            args: Core.IPlaceholders
        ) => string;

        stringReplace?: (
            str: string,
            args?: Core.IPlaceholders,
            keys?: string[]
        ) => string;

        t?: (
            str: string,
            args?: Core.IPlaceholders,
            options?: Core.ITranslationOptions
        ) => string;

        theme?: Core.ITheme;

        url?: (path: string) => string;

    }
}

declare var drupalSettings: drupal.IDrupalSettings;
declare var Drupal: drupal.IDrupalStatic;
