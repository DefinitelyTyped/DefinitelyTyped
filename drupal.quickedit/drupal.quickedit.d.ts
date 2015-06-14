// Type definitions for Drupal-8.0.x QuickEdit
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../backbone/backbone.d.ts" />

declare module drupal {

    export module QuickEdit {

        export interface IDrupalSettings {

            strings: {

                quickEdit: string;

            }

        }

        export interface IDrupalStaticMetaData {

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

        export interface IDrupalStaticApp {

            acceptEditorStateChange?: any;

        }

        export interface IEditors {}

        export interface IAppModel extends Backbone.Model {}

        export interface IDrupalStatic {

            app?: IDrupalStaticApp;

            collections?: {

                entities?: any;

                fields?: any;

            }

            editors: IEditors;

            metadata?: IDrupalStaticMetaData;

            AppModel?: IAppModel;

        }

    }

    export module Core {

        export interface IBehaviors {

            quickedit?: IBehavior;

        }

    }

    export interface IDrupalSettings {

        quickedit: QuickEdit.IDrupalSettings;

    }

    export interface IDrupalStatic {

        quickedit?: QuickEdit.IDrupalStatic;

    }

}
