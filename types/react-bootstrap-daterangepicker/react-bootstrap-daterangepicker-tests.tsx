import DateRangePicker = require("react-bootstrap-daterangepicker");
import * as React from "react";

class IntegrationTest extends React.Component {
  render() {
    const props = {
      onEvent: (ev: any, picker: any) => true,
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
      containerClass: "custom-class",
      containerStyles: { display: "block" },
    };

    return React.createElement(DateRangePicker, props);
  }
}

let pickerCoponent = <DateRangePicker onEvent={(ev: any, picker: any) => true} />;
