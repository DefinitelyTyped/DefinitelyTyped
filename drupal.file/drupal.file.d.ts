// Type definitions for Drupal-8.0.x File
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module File {

        export interface DrupalStatic {

            validateExtension: (
                event: JQueryEventObject
            ) => void;

            triggerUploadButton: (
                event: JQueryEventObject
            ) => void;

            disableFields: (
                event: JQueryEventObject
            ) => void;

            progressBar: (
                event: JQueryEventObject
            ) => void;

            openInNewWindow: (
                event: JQueryEventObject
            ) => void;

        }

    }

    export module Core {

        export interface Behaviors {

            fileAutoUpload?: Behavior;

            fileButtons?: Behavior;

            filePreviewLinks?: Behavior;

            fileValidateAutoAttach?: Behavior;

        }

    }

    export interface DrupalStatic {

        file: File.DrupalStatic;

    }

}
