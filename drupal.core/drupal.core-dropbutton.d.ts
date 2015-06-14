// Type definitions for Drupal-8.0.x Core-DropButton
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IDropButtonSettings {

            title: string;

        }

        export interface IDropButton {

            new (
                dropbutton: JQuery,
                settings: IDropButtonSettings
            ): IDropButton;

            dropbuttons: IDropButton[];

            $dropbutton: JQuery;

            $actions: JQuery;

            toggle: (
                show: boolean
            ) => void;

            hoverIn: () => void;

            hoverOut: () => void;

            open: () => void;

            close: () => void;

            focusIn: () => void;

            focusOut: () => void;

        }

        export interface ITheme {

            dropbuttonToggle?: (
                options: IDropButtonSettings
            ) => string;

        }

        export interface IBehaviors {

            dropButton?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        DropButton: Core.IDropButton;

    }

}
