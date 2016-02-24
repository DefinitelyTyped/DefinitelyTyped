// Type definitions for react-bootstrap-daterangepicker
// Project: https://github.com/skratchdot/react-bootstrap-daterangepicker
// Definitions by: Ian Ker-Seymer https://github.com/ianks
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../bootstrap.datepicker/bootstrap.datepicker.d.ts" />

declare module ReactBootstrapDaterangepicker {
    export interface EventHandler { (event?: any, picker?: any): any; }

    export interface Props extends DatepickerOptions {
        onShow?: EventHandler;
        onHide?: EventHandler;
        onShowCalendar?: EventHandler;
        onHideCalendar?: EventHandler;
        onApply?: EventHandler;
        onCancel?: EventHandler;
        onEvent?: EventHandler;
    }

    export class DateRangePicker extends __React.Component<Props, {}> {}
}

declare var DateRangePicker: typeof ReactBootstrapDaterangepicker.DateRangePicker;

declare module "react-bootstrap-daterangepicker" {
    export = DateRangePicker;
}
