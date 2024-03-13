import * as React from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface DatePickerIOSProps extends ViewProps {
    date?: Date | undefined;
    maximumDate?: Date | undefined;
    minimumDate?: Date | undefined;
    mode?: "date" | "time" | "datetime" | undefined;
    onDateChange: (newDate: Date) => void;
}

export interface DatePickerAndroidProps extends ViewProps {
    labelUnit?: {
        year?: string | undefined;
        month?: string[] | undefined;
        date?: string | undefined;
    } | undefined;
    order?: string | undefined;
    date?: Date | undefined;
    maximumDate?: Date | undefined;
    minimumDate?: Date | undefined;
    mode?: "date" | "time" | "datetime" | undefined;
    onDateChange: (newDate: Date) => void;
    style?: StyleProp<ViewStyle> | undefined;
    textColor?: string | undefined;
    textSize?: number | undefined;
    itemSpace?: number | undefined;
}

export interface DatePickerProps extends DatePickerAndroidProps, DatePickerIOSProps {
    date?: Date | undefined;
    maximumDate?: Date | undefined;
    minimumDate?: Date | undefined;
    mode?: "date" | "time" | "datetime" | undefined;
    onDateChange: (newDate: Date) => void;
    style?: StyleProp<ViewStyle> | undefined;
}

export interface PickerProps<T> extends ViewProps {
    textColor?: string | undefined;
    textSize?: number | undefined;
    itemSpace?: number | undefined;
    itemStyle?: StyleProp<ViewStyle> | undefined;
    onValueChange: (value: T) => void;
    pickerData: T[];
    style?: StyleProp<ViewStyle> | undefined;
    selectedValue?: T | undefined;
}

export class Picker<T> extends React.Component<PickerProps<T>> {}
export class DatePicker extends React.PureComponent<DatePickerProps> {}
