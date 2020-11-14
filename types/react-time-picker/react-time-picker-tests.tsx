import * as React from "react";

import TimePicker, { TimePickerValue } from "react-time-picker";
import TimePickerNoStyle from "react-time-picker/dist/entry.nostyle";

function MyApp() {
  const [value, setValue] = React.useState<TimePickerValue>(new Date());

  return (
    <div>
      <TimePicker value={value} onChange={setValue} />
      <TimePickerNoStyle value={value} onChange={setValue} />
    </div>
  );
}
