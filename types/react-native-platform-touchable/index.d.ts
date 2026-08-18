import * as React from "react";
import { TouchableNativeFeedback, TouchableNativeFeedbackProps, TouchableWithoutFeedbackProps } from "react-native";

export interface PlatformTouchableProps extends TouchableWithoutFeedbackProps {
    // TouchableOpacity (default iOS)
    activeOpacity?: number | undefined;
    // TouchableNativeFeedback (default Android)
    background?: TouchableNativeFeedbackProps["background"];
    foreground?: TouchableNativeFeedbackProps["background"];
    // TouchableHighlight
    underlayColor?: string | undefined;
    onHideUnderlay?: (() => void) | undefined;
    onShowUnderlay?: (() => void) | undefined;
}

export class Touchable extends React.Component<PlatformTouchableProps> {
    // TouchableOpacity (default iOS)
    setOpacityTo: (value: number) => void;
    // TouchableNativeFeedback (default Android)
    static SelectableBackground(): ReturnType<typeof TouchableNativeFeedback.SelectableBackground>;
    static SelectableBackgroundBorderless(): ReturnType<typeof TouchableNativeFeedback.SelectableBackgroundBorderless>;
    static Ripple(color: string, borderless?: boolean): ReturnType<typeof TouchableNativeFeedback.Ripple>;
    static canUseNativeForeground(): boolean;
}

export default Touchable;
