import { ComponentType } from '@wordpress/element';

import { default as DatePicker } from './date';

export { default as TimePicker } from './time';
export { default as DatePicker } from './date';

export namespace DateTimePicker {
    type Props = Omit<DatePicker.Props, 'isInvalidDate'>;
}
export const DateTimePicker: ComponentType<DateTimePicker.Props>;
