// Type definitions for react-intl-redux v0.1.0
// Project: https://github.com/ratson/react-intl-redux
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../react-redux/react-redux.d.ts" />
/// <reference path="../react-intl/react-intl.d.ts" />

declare module "react-intl-redux" {
    import { Action } from "redux"
    import { Provider as ReduxProvider } from "react-redux"
    import { IntlProvider as ReactIntlProvider } from "react-intl"

    interface IntlState {
        locale: string
        messages: any
    }

    interface IntlAction extends Action {
        payload?: IntlState
    }

    export function intlReducer(state: IntlState, action: IntlAction): IntlState
    export function updateIntl (opts: IntlState): IntlAction
    export class IntlProvider extends ReactIntlProvider {}
    export class Provider extends ReduxProvider {}
}
