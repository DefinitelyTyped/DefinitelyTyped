// Type definitions for Drupal-8.0.x User
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module User {

        export interface IPasswordStrengthTranslations {

            username: string;

            tooShort: string;

            addLowerCase: string;

            addUpperCase: string;

            addNumbers: string;

            addPunctuation: string;

            sameAsUsername: string;

            week: string;

            good: string;

            strong: string;

            hasWeaknesses: string;

        }

        export interface IPasswordStrengthReport {

            strength: number;

            message: string;

            indicatorText: string;

            indicatorClass: string;

        }

    }

    export module Core {

        export interface IBehaviors {

            password?: IBehavior;

            // @todo Implement the "toggle" method.
            permissions?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        evaluatePasswordStrength?: (
            password: string,
            translate: User.IPasswordStrengthTranslations
        ) => User.IPasswordStrengthReport;

    }

}
