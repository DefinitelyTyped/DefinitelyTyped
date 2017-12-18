// Type definitions for react-bootstrap-daterangepicker
// Project: https://github.com/skratchdot/react-bootstrap-daterangepicker
// Definitions by: Ian Ker-Seymer <https://github.com/ianks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />
/// <reference types="daterangepicker" />

declare namespace ReactBootstrapDaterangepicker {

    export interface EventHandler { (event?: any, picker?: any): any; }

    export interface Props extends  daterangepicker.Settings{
        onShow?: EventHandler;
        onHide?: EventHandler;
        onShowCalendar?: EventHandler;
        onHideCalendar?: EventHandler;
        onApply?: EventHandler;
        onCancel?: EventHandler;
        onEvent?: EventHandler;
    }

    export class DateRangePicker extends React.Component<Props> { }
}

declare var DateRangePicker: typeof ReactBootstrapDaterangepicker.DateRangePicker;

declare module "react-bootstrap-daterangepicker" {
    export = DateRangePicker;
}
