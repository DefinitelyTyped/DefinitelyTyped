/// <reference path="./react-bootstrap-daterangepicker.d.ts" />
/// <reference path="./../react/react.d.ts" />

import DateRangePicker = require("react-bootstrap-daterangepicker");
import React = require("react");

class IntegrationTest extends React.Component<{}, {}> {
  render() {
    const props = {
      onEvent: (ev, picker) => true,
      singleDatePicker: true,
      startDate: "1999-12-31",
      endDate: "2000-12-31",
      dateLimit: 3,
      timePicker: true,
      timePickerIncrement: 5,
      buttonClasses: ["btn-sm"],
      applyClass: "myclass",
      cancelClass: "myclass",
      autoApply: true,
      linkedCalendars: true,
    };

    return React.createElement(DateRangePicker, props);
  }
}
