// Type definitions for Drupal-8.0.x QuickEdit
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../backbone/backbone.d.ts" />

declare module drupal {

    export module QuickEdit {

        export interface DrupalSettings {

            strings: {

                quickEdit: string;

            }

        }

        export interface DrupalStaticMetaData {

            has?: (
                fieldID: string
            ) => boolean;

            add?: (
                fieldID: string,
                metadata: any
            ) => void;

            get?: (
                fieldID: string,
                key: string
            ) => any;

            _prefixFieldID?: (
                fieldID: string
            ) => string;

            _unprefixFieldID?: (
                fieldID: string
            ) => string;

            intersection?: (
                fieldIDs: string[]
            ) => string[];

        }

        export interface DrupalStaticApp {

            acceptEditorStateChange?: any;

        }

        export interface Editors {}

        export interface AppModel extends Backbone.Model {}

        export interface DrupalStatic {

            app?: DrupalStaticApp;

            collections?: {

                entities?: any;

                fields?: any;

            }

            editors: Editors;

            metadata?: DrupalStaticMetaData;

            AppModel?: AppModel;

        }

    }

    export module Core {

        export interface Behaviors {

            quickedit?: Behavior;

        }

    }

    export interface DrupalSettings {

        quickedit: QuickEdit.DrupalSettings;

    }

    export interface DrupalStatic {

        quickedit?: QuickEdit.DrupalStatic;

    }

}
