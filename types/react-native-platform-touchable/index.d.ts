import * as React from "react";
import { TouchableWithoutFeedbackProps } from "react-native";

// These were removed from react-native's bundled types; they mirror the
// TouchableNativeFeedback background values this library accepts and returns.
export interface ThemeAttributeBackgroundPropType {
    type: "ThemeAttrAndroid";
    attribute: "selectableItemBackground" | "selectableItemBackgroundBorderless";
}

export interface RippleBackgroundPropType {
    type: "RippleAndroid";
    color?: number | null | undefined;
    borderless?: boolean | undefined;
}

export type BackgroundPropType = ThemeAttributeBackgroundPropType | RippleBackgroundPropType;

export interface PlatformTouchableProps extends TouchableWithoutFeedbackProps {
    // TouchableOpacity (default iOS)
    activeOpacity?: number | undefined;
    // TouchableNativeFeedback (default Android)
    background?: BackgroundPropType | undefined;
    foreground?: BackgroundPropType | undefined;
    // TouchableHighlight
    underlayColor?: string | undefined;
    onHideUnderlay?: (() => void) | undefined;
    onShowUnderlay?: (() => void) | undefined;
}

export class Touchable extends React.Component<PlatformTouchableProps> {
    // TouchableOpacity (default iOS)
    setOpacityTo: (value: number) => void;
    // TouchableNativeFeedback (default Android)
    static SelectableBackground(): ThemeAttributeBackgroundPropType;
    static SelectableBackgroundBorderless(): ThemeAttributeBackgroundPropType;
    static Ripple(color: string, borderless?: boolean): RippleBackgroundPropType;
    static canUseNativeForeground(): boolean;
}

export default Touchable;
