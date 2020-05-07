// Type definitions for react-native-app-intro-slider 3.0
// Project: https://github.com/jacse/react-native-app-intro-slider
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
//                 Oliver Welter <https://github.com/oliverwelter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react';
import { TextProps, ViewStyle } from 'react-native';

export interface AppIntroProps {
    skipLabel?: string;
    doneLabel?: string;
    nextLabel?: string;
    prevLabel?: string;
    bottomButton?: boolean;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextProps;
    dotStyle?: ViewStyle;
    activeDotStyle?: ViewStyle;
    paginationStyle?: ViewStyle;
    hidePagination?: boolean;
    renderNextButton?: () => void;
    renderPrevButton?: () => void;
    renderDoneButton?: () => void;
    renderSkipButton?: () => void;
    renderItem?: (item: any) => React.ReactElement;
    slides: any[];
    showSkipButton?: boolean;
    showPrevButton?: boolean;
    showNextButton?: boolean;
    showDoneButton?: boolean;
    onSlideChange?: (index: number, lastIndex: number) => void;
    onDone?: () => void;
    onSkip?: () => void;
}

export default class AppIntroSlider extends React.Component<AppIntroProps> {}
