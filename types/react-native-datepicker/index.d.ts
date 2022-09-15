// Type definitions for react-native-datepicker 1.7
// Project: https://github.com/xgfe/react-native-datepicker
// Definitions by: Jacob Baskin <https://github.com/jacobbaskin>
//                 Cheng Gibson <https://github.com/nossbigg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyleProp, TextStyle, ImageStyle, ViewStyle, ImageURISource } from 'react-native';
import * as moment from 'moment';

export interface DatePickerCustomStylesProps {
    placeholderText?: StyleProp<TextStyle> | undefined;
    dateText?: StyleProp<TextStyle> | undefined;
    dateIcon?: StyleProp<ImageStyle> | undefined;
    dateInput?: StyleProp<ViewStyle> | undefined;
    dateTouchBody?: StyleProp<ViewStyle> | undefined;
    datePickerCon?: StyleProp<ViewStyle> | undefined;
    datePicker?: StyleProp<ViewStyle> | undefined;
    btnCancel?: StyleProp<any> | undefined;
    btnTextCancel?: StyleProp<TextStyle> | undefined;
    btnConfirm?: StyleProp<any> | undefined;
    btnTextConfirm?: StyleProp<TextStyle> | undefined;
    disabled?: StyleProp<ViewStyle> | undefined;
}

export interface DatePickerProps {
    mode?: 'date' | 'datetime' | 'time' | undefined;
    androidMode?: 'default' | 'calendar' | 'spinner' | undefined;
    date?: string | Date | moment.Moment | undefined;
    format?: string | undefined;
    iconSource?: ImageURISource | undefined;
    iconComponent?: JSX.Element | undefined;
    hideText?: boolean | undefined;
    minDate?: string | Date | undefined;
    maxDate?: string | Date | undefined;
    height?: number | undefined;
    duration?: number | undefined;
    confirmBtnText?: string | undefined;
    cancelBtnText?: string | undefined;
    showIcon?: boolean | undefined;
    disabled?: boolean | undefined;
    onDateChange?(dateStr: string, date: Date): void;
    onOpenModal?: (() => void) | undefined;
    onCloseModal?: (() => void) | undefined;
    onPressMask?: (() => void) | undefined;
    placeholder?: string | undefined;
    modalOnResponderTerminationRequest?(e: any): boolean;
    is24Hour?: boolean | undefined;
    getDateStr?: ((date: Date) => string) | undefined;
    style?: StyleProp<any> | undefined;
    customStyles?: DatePickerCustomStylesProps | undefined;
    minuteInterval?: number | undefined;
    TouchableComponent?: React.Component | undefined;
    allowFontScaling?: boolean | undefined;
    locale?: string | undefined;
    timeZoneOffsetInMinutes?: number | undefined;
    testID?: string | undefined;
    cancelBtnTestID?: string | undefined;
    confirmBtnTestID?: string | undefined;
}

declare class DatePicker extends React.Component<DatePickerProps> {
    constructor(props: DatePickerProps);

    onPressDate(): void;
    onPressCancel(): void;
}

export default DatePicker;
