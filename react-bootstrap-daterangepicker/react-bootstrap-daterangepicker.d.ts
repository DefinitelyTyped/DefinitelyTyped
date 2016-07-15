// Type definitions for react-bootstrap-daterangepicker v3.1.0
// Project: https://github.com/skratchdot/react-bootstrap-daterangepicker
// Definitions by: Ian Ker-Seymer <https://github.com/ianks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./../react/react.d.ts" />
/// <reference path="./../moment/moment.d.ts" />
/// <reference path="./../daterangepicker/daterangepicker.d.ts" />

declare namespace ReactBootstrapDaterangepicker {
  import React = __React;

  interface Picker {
    startDate: moment.Moment;
    endDate: moment.Moment;
  }

  interface EventHandler {
    (event: __React.SyntheticEvent, picker: Picker): void;
  }

  interface Props extends daterangepicker.Settings, React.Props<{}> {
    onShow?: EventHandler;
    onHide?: EventHandler;
    onShowCalendar?: EventHandler;
    onHideCalendar?: EventHandler;
    onApply?: EventHandler;
    onCancel?: EventHandler;
    onEvent?: EventHandler;
  }

  export class DateRangePicker extends React.Component<Props, {}> {}
}

declare module "react-bootstrap-daterangepicker" {
  import DateRangePicker = ReactBootstrapDaterangepicker.DateRangePicker;
  export = DateRangePicker;
}
