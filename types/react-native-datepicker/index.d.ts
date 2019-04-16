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
    placeholderText?: StyleProp<TextStyle>;
    dateText?: StyleProp<TextStyle>;
    dateIcon?: StyleProp<ImageStyle>;
    dateInput?: StyleProp<ViewStyle>;
    dateTouchBody?: StyleProp<ViewStyle>;
    datePickerCon?: StyleProp<ViewStyle>;
    datePicker?: StyleProp<ViewStyle>;
    btnCancel?: StyleProp<any>;
    btnTextCancel?: StyleProp<TextStyle>;
    btnConfirm?: StyleProp<any>;
    btnTextConfirm?: StyleProp<TextStyle>;
    disabled?: StyleProp<ViewStyle>;
}

export interface DatePickerProps {
    mode?: 'date' | 'datetime' | 'time';
    androidMode?: 'default' | 'calendar' | 'spinner';
    date?: string | Date | moment.Moment;
    format?: string;
    iconSource?: ImageURISource;
    iconComponent?: JSX.Element;
    hideText?: boolean;
    minDate?: string | Date;
    maxDate?: string | Date;
    height?: number;
    duration?: number;
    confirmBtnText?: string;
    cancelBtnText?: string;
    showIcon?: boolean;
    disabled?: boolean;
    onDateChange?(dateStr: string, date: Date): void;
    onOpenModal?: () => void;
    onCloseModal?: () => void;
    onPressMask?: () => void;
    placeholder?: string;
    modalOnResponderTerminationRequest?(e: any): boolean;
    is24Hour?: boolean;
    getDateStr?: (date: Date) => string;
    style?: StyleProp<any>;
    customStyles?: DatePickerCustomStylesProps;
    minuteInterval?: number;
    TouchableComponent?: React.Component;
    allowFontScaling?: boolean;
    locale?: string;
    timeZoneOffsetInMinutes?: number;
    testID?: string;
    cancelBtnTestID?: string;
    confirmBtnTestID?: string;
}

declare class DatePicker extends React.Component<DatePickerProps> {
    constructor(props: DatePickerProps);

    onPressDate(): void;
    onPressCancel(): void;
}

export default DatePicker;
