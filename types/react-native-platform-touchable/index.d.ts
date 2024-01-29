import * as React from "react";
import {
    BackgroundPropType,
    RippleBackgroundPropType,
    ThemeAttributeBackgroundPropType,
    TouchableWithoutFeedbackProps,
} from "react-native";

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
