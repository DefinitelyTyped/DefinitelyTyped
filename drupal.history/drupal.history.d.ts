// Type definitions for Drupal-8.0.x History
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module drupal {

    export module History {

        export interface DrupalSettings {

            lastReadTimestamps: number[];

            nodesToMarkAsRead: number[];

        }

        export interface DrupalStatic {

            fetchTimestamps: (
                nodeIDs: number[],
                callback: () => void
            ) => void;

            getLastRead: (
                nodeID: number
            ) => void;

            markAsRead: (
                nodeID: number
            ) => void;

            needsServerCheck: (
                nodeID: number,
                contentTimestamp: number
            ) => boolean;

        }

    }

    export interface DrupalSettings {

        history?: History.DrupalSettings;

    }

    export interface DrupalStatic {

        history?: History.DrupalStatic;

    }

}
