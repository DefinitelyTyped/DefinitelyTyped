import { Component } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type DigitType = "D" | "H" | "M" | "S";

export interface CountDownProps {
    /**
     * Counter id, to determine whether to reset the counter or not
     * @default null
     */
    id?: string | null;

    /**
     * Override the component style
     * @default {}
     */
    style?: StyleProp<ViewStyle>;

    /**
     *  Digit style
     * @default {backgroundColor: '#FAB913'}
     */
    digitStyle?: StyleProp<ViewStyle>;

    /**
     * Digit Text style
     * @default {color: #FAB913 '#000'}
     */
    digitTxtStyle?: StyleProp<TextStyle>;

    /**
     * Time Label style
     * @default {color: #FAB913 '#000'}
     */
    timeLabelStyle?: StyleProp<TextStyle>;

    /**
     * Separator style
     * @default {color: #FAB913 '#000'}
     */
    separatorStyle?: StyleProp<TextStyle>;

    /**
     * Size of the countdown component
     * @default 15
     */
    size?: number;

    /**
     * Number of seconds to countdown
     * @default 0
     */
    until?: number;

    /**
     * What function should be invoked when the time is 0
     * @default null
     */
    onFinish?: () => void;

    /**
     * What function should be invoked when the timer is changing
     * @default null
     */
    onChange?: (until: number) => void;

    /**
     * What function should be invoked when clicking on the timer
     * @default null
     */
    onPress?: () => void;

    /**
     * What Digits to show
     * @default ['D', 'H', 'M', 'S']
     */
    timeToShow?: DigitType[];

    /**
     * Text to show in time label
     * @default {d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}
     */
    timeLabels?: { d?: string; h?: string; m?: string; s?: string };

    /**
     * Should show separator
     * @default false
     */
    showSeparator?: boolean;

    /**
     * A boolean to pause and resume the component
     * @default true
     */
    running?: boolean;
}

export interface CountDownState {
    until: number;
    lastUntil: number | null;
    wentBackgroundAt: number | null;
}

export default class CountDown extends Component<CountDownProps, CountDownState> {}
