// Type definitions for Drupal-8.0.x Core-Progress
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module drupal {

    export module Core {

        export interface ITheme {

            progressBar?: (id: string) => string;

        }

        export interface IProgressBar {

            new (
                id: string,
                updateCallback: (percentage: number, message: string, progressBar: IProgressBar) => any,
                method: string,
                errorCallback: () => any
            ): IProgressBar;

            setProgress: (
                percentage: number,
                message: string,
                label: string
            ) => void;

            startMonitoring: (
                uri: string,
                delay: number
            ) => void;

            stopMonitoring: () => void;

            sendPing: () => void;

            displayError: (str: string) => void;

        }

    }

    export interface IDrupalStatic {

        ProgressBar?: Core.IProgressBar;

    }
}
