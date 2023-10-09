import { ComponentType } from "react";

import { default as DatePicker } from "./date";

export { default as DatePicker } from "./date";
export { default as TimePicker } from "./time";

export namespace DateTimePicker {
    type Props = Omit<DatePicker.Props, "isInvalidDate">;
}
export const DateTimePicker: ComponentType<DateTimePicker.Props>;
