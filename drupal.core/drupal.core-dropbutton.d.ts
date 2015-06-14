// Type definitions for Drupal-8.0.x Core-DropButton
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface DropButtonSettings {

            title: string;

        }

        export interface DropButton {

            new (
                dropbutton: JQuery,
                settings: DropButtonSettings
            ): DropButton;

            dropbuttons: DropButton[];

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

        export interface Theme {

            dropbuttonToggle?: (
                options: DropButtonSettings
            ) => string;

        }

        export interface Behaviors {

            dropButton?: Behavior;

        }

    }

    export interface DrupalStatic {

        DropButton: Core.DropButton;

    }

}
