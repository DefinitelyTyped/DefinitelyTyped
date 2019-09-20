// Type definitions for angular-breadcrumb 0.4.1
// Project: https://github.com/ncuillery/angular-breadcrumb
// Definitions by: Marc Talary <https://github.com/marctalary>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular-ui-router" />

import * as angular from 'angular';

declare var _: string;
export = _;

declare module 'angular' {
    namespace ui {
        export interface IState {
            ncyBreadcrumb?: {
                /**
                 * Contains the label for the step in the breadcrumb. The state name is used if not defined.
                 **/
                label?: string;
                /**
                 * Override the parent state (only for the breadcrumb)
                 **/
                parent?: string|Function;
                /**
                * When defined to true, the state is never included in the chain of states and never appears in the breadcrumb
                **/
                skip?: boolean;
            };
            ncyBreadcrumbLabel?: string;
            ncyBreadcrumbLink?: string;
        }
    }

    namespace ncy {
        /**
        * Provider that returns an instance of $breadcrumb service. It contains the global configuration of the module.
        **/
        export interface $breadcrumbProvider {
            /**
            * Setter for options defined in a module.config block
            **/
            setOptions(options: breadcrumbProviderOptions): void;
        }

        /**
        * Global configuration options for angular-breadcrumb
        **/
        export interface breadcrumbProviderOptions {
            /**
            * An existing state's name to be the state is the first step of the breadcrumb
            **/
            prefixStateName?: string;

            /**
            * Contains a predefined template's name; 'bootstrap3' (default), 'bootstrap2' or HTML for a custom template. This property is ignored if templateUrl is defined.
            **/
            template?: string;

            /**
            * Contains the path to a template file. This property takes precedence over the template property.
            **/
            templateUrl?: string;

            /**
            * If true, abstract states are included in the breadcrumb. This option has a lower priority than the state-specific option skip
            **/
            includeAbstract?: boolean;
        }

        /**
        * Service responsible for access to $state and for directive configuration.
        **/
        export interface $breadcrumbService {
            /**
            * Returns the state chain to the current state (i.e. all the steps of the breadcrumb). It's an array of state object enriched with the module-specific property ncyBreadcrumbLink (the href for the breadcrumb step).
            **/
            getStatesChain(): angular.ui.IState[];

            /**
            * Return the last step of the breadcrumb, generally the one relative to the current state, expect if it is configured as skipped (the method returns its parent). As getStatesChain, the state object is enriched with ncyBreadcrumbLink.
            **/
            getLastStep(): angular.ui.IState;
        }
    }
}
