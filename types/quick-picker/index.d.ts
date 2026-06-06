import * as React from "react";
import { TextStyle, ViewStyle } from "react-native";

export default class QuickPicker extends React.Component {
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    static open: <T = ItemType>(options: QuickPickerOpenOptions<T>) => void;
    static close: () => void;
}

// tslint:disable-next-line
type PickerType = "normal" | "time";

// tslint:disable-next-line
type ItemType = {
    readonly value: string | number;
    readonly label: string;
};

type PickerMode = "date" | "time" | "datetime" | "countdown";

// tslint:disable-next-line
type PickerDisplayType = "default" | "spinner" | "calendar" | "clock";
interface QuickPickerOpenOptions<T = ItemType> {
    /**
     * Picker's selected item
     * @default undefined
     * @platform both
     */
    readonly item?: T;

    /**
     * Picker's items
     * @default [] // an empty array
     * @platform both
     */
    readonly items?: T[];

    /**
     * Callback function when an item is selected
     * @default undefined
     * @platform both
     */
    readonly onChange?: (item: T | Date) => void;

    /**
     * Callback function when Done/Ok button is pressed
     * @default undefined
     * @platform both
     */
    readonly onPressDone?: (item: T | Date) => void;

    /**
     * Callback function when Cancel button is pressed or when user taps Out
     * @default undefined
     * @platform both
     */
    readonly onTapOut?: () => void;

    /**
     * Disable the picker top bar
     * @default false
     * @platform iOS
     */
    readonly disableTopRow?: boolean;

    /**
     * If you want to create your own custom top bar
     * @default undefined
     * @platform iOS
     */
    readonly topRow?: React.ReactNode;

    /**
     * Done button text
     * @default "Done" (iOS) "Ok" (Android)
     * @platform both
     */
    readonly doneButtonText?: string;

    /**
     * Cancel button text
     * @default "Cancel"
     * @platform Android
     */
    readonly cancelButtonText?: string;

    /**
     * Done (and Cancel on Android) button text style
     * @default undefined
     * @platform both
     */
    readonly doneButtonTextStyle?: TextStyle;

    /**
     * Android's modal view style
     * @default undefined
     */
    readonly androidModalStyle?: ViewStyle;

    /**
     * Android's modal items style
     * @default undefined
     */
    readonly androidItemStyle?: ViewStyle;

    /**
     * Android's modal items text style
     * @default undefined
     */
    readonly androidItemTextStyle?: TextStyle;

    /**
     * Android's modal selected item text style
     * @default undefined
     */
    readonly androidSelectedItemStyle?: TextStyle;

    /**
     * sets the picker to his normal mode or to time mode
     * @default "normal"
     * @platform both
     */
    readonly pickerType?: PickerType;

    /**
     * mode if pickerType is set to "time"
     * @default undefined
     * @platform both
     */
    readonly mode?: PickerMode;

    /**
     * Defines the visual display of the picker for Android
     * @default undefined
     * @platform Android
     */
    readonly display?: PickerDisplayType;

    /**
     * Current selected date
     * @default new Date()
     */
    readonly date?: Date;

    /**
     * Maximum date
     * @default undefined
     * @platform both
     */
    readonly maximumDate?: Date;

    /**
     * Minimum date
     * @default undefined
     * @platform both
     */
    readonly minimumDate?: Date;

    /**
     * Allows changing of the timeZone of the date picker. By default it uses the device's time zone.
     * @default undefined
     * @platform both
     */
    readonly timeZoneOffsetInMinutes?: number;

    /**
     * Allows changing of the locale of the component. By default it uses the device's locale.
     * @default undefined
     * @platform iOS
     */
    readonly locale?: string;

    /**
     * Allows changing of the time picker to a 24 hour format.
     * @default undefined
     * @platform iOS
     */
    readonly is24Hour?: boolean;

    /**
     * The interval at which minutes can be selected.
     * @default undefined
     * @platform iOS
     */
    readonly minuteInterval?: 1 | 2 | 6 | 5 | 4 | 3 | 10 | 12 | 15 | 20 | 30;

    /**
     * Use native driver
     * @default true
     * @platform both
     */
    readonly useNativeDriver?: boolean;
}

export { ItemType, QuickPickerOpenOptions };
