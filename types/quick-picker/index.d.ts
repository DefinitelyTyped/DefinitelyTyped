// Type definitions for quick-picker 2.0
// Project: https://github.com/Valiums/react-native-quickpicker#readme
// Definitions by: Tamas Illes <https://github.com/illestomas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

declare module 'quick-picker' {
    export default class QuickPicker extends React.Component {
        static open: <T>(options: QuickPickerOpenOptions<T>) => void;
        static close: () => void;
    }

    export type PickerType = 'normal' | 'time';

    export type ItemType = {
        readonly value: string | number;
        readonly label: string;
    };

    export type PickerMode = 'date' | 'time' | 'datetime' | 'countdown';

    export type PickerDisplayType = 'default' | 'spinner' | 'calendar' | 'clock';
    export interface QuickPickerOpenOptions<T = {}> {
        /**
         * Picker's selected item
         * @default undefined
         * @platform both
         */
        item?: T;

        /**
         * Picker's items
         * @default [] // an empty array
         * @platform both
         */
        items?: T[];

        /**
         * Callback function when an item is selected
         * @default undefined
         * @platform both
         */
        onChange?: (item: T | Date) => void;

        /**
         * Callback function when Done/Ok button is pressed
         * @default undefined
         * @platform both
         */
        onPressDone?: (item: T | Date) => void;

        /**
         * Callback function when Cancel button is pressed or when user taps Out
         * @default undefined
         * @platform both
         */
        onTapOut?: () => void;

        /**
         * Disable the picker top bar
         * @default false
         * @platform iOS
         */
        disableTopRow?: boolean;

        /**
         * If you want to create your own custom top bar
         * @default undefined
         * @platform iOS
         */
        topRow?: React.ReactNode;

        /**
         * Done button text
         * @default "Done" (iOS) "Ok" (Android)
         * @platform both
         */
        doneButtonText?: string;

        /**
         * Cancel button text
         * @default "Cancel"
         * @platform Android
         */
        cancelButtonText?: string;

        /**
         * Done (and Cancel on Android) button text style
         * @default undefined
         * @platform both
         */
        doneButtonTextStyle?: TextStyle;

        /**
         * Android's modal view style
         * @default undefined
         */
        androidModalStyle?: ViewStyle;

        /**
         * Android's modal items style
         * @default undefined
         */
        androidItemStyle?: ViewStyle;

        /**
         * Android's modal items text style
         * @default undefined
         */
        androidItemTextStyle?: TextStyle;

        /**
         * Android's modal selected item text style
         * @default undefined
         */
        androidSelectedItemStyle?: TextStyle;

        /**
         * sets the picker to his normal mode or to time mode
         * @default "normal"
         * @platform both
         */
        pickerType?: PickerType;

        /**
         * mode if pickerType is set to "time"
         * @default undefined
         * @platform both
         */
        mode?: PickerMode;

        /**
         * Defines the visual display of the picker for Android
         * @default undefined
         * @platform Android
         */
        display?: PickerDisplayType;

        /**
         * Current selected date
         * @default new Date()
         */
        date?: Date;

        /**
         * Maximum date
         * @default undefined
         * @platform both
         */
        maximumDate?: Date;

        /**
         * Minimum date
         * @default undefined
         * @platform both
         */
        minimumDate?: Date;

        /**
         * Allows changing of the timeZone of the date picker. By default it uses the device's time zone.
         * @default undefined
         * @platform both
         */
        timeZoneOffsetInMinutes?: number;

        /**
         * Allows changing of the locale of the component. By default it uses the device's locale.
         * @default undefined
         * @platform iOS
         */
        locale?: string;

        /**
         * Allows changing of the time picker to a 24 hour format.
         * @default undefined
         * @platform iOS
         */
        is24Hour?: boolean;

        /**
         * The interval at which minutes can be selected.
         * @default undefined
         * @platform iOS
         */
        minuteInterval?: 1 | 2 | 6 | 5 | 4 | 3 | 10 | 12 | 15 | 20 | 30;

        /**
         * Use native driver
         * @default true
         * @platform both
         */
        useNativeDriver?: boolean;
    }
}
