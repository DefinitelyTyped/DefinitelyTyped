// Type definitions for react-native-onboarding-swiper 1.1
// Project: https://github.com/jfilter/react-native-onboarding-swiper#readme
// Definitions by: Shirsh Zibbu <https://github.com/zhirzh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, FC } from 'react';
import { FlatListProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface SkipButtonProps {
    skipLabel: string | JSX.Element;
    isLight: boolean;
    allowFontScaling: boolean;
    onPress: () => any;
}

export interface NextButtonProps {
    nextLabel: string | JSX.Element;
    isLight: boolean;
    allowFontScaling: boolean;
    onPress: () => any;
}

export interface DoneButtonProps {
    isLight: boolean;
    allowFontScaling: boolean;
    onPress: () => any;
}

export interface DotProps {
    selected: boolean;
    isLight: boolean;
}

export interface Page {
    /**
     * A background color. The color of the font and dots adapts to the background color.
     */
    backgroundColor: string;

    /**
     * A component (e.g. <Image />) to display at the top of the page.
     */
    image: JSX.Element;

    /**
     * A string OR a React-Native component.
     */
    title: string | JSX.Element;

    /**
     * A string OR a React-Native component.
     */
    subtitle: string | JSX.Element;

    // INDIVIDUAL PAGE STYLES

    /**
     * Modify styles of a specific page's title.
     */
    titleStyles?: StyleProp<TextStyle>;

    /**
     * Modify styles of a specific page's subtitle.
     */
    subTitleStyles?: StyleProp<TextStyle>;
}

export interface Props {
    /**
     * An array of pages in the following shape.
     */
    pages: Page[];

    // BUTTONS

    /**
     * A string OR a React-Native component for the Next label.
     * @default "Next"
     */
    nextLabel?: string | JSX.Element;

    /**
     * A bool flag indicating whether the Next button is visible.
     * @default true
     */
    showNext?: boolean;

    /**
     * A string OR a React-Native component for the Skip label.
     * @default "Skip"
     */
    skipLabel?: string | JSX.Element;

    /**
     * A bool flag indicating whether the Skip button is visible.
     * @default true
     */
    showSkip?: boolean;

    /**
     * A callback that is fired if the Onboarding is skipped.
     */
    onSkip?: () => any;

    /**
     * When pressing skip, go to that page (e.g. skipToPage={2}). If this prop is provided, ignores onSkip.
     */
    skipToPage?: number;

    /**
     * A callback that is fired after the Onboarding is completed.
     */
    onDone?: () => any;

    /**
     * A bool flag indicating whether the Done checkmark button is visible.
     * @default true
     */
    showDone?: boolean;

    // GENERAL

    /**
     * A number for the height of the bottom bar.
     * @default 60
     */
    bottomBarHeight?: number;

    /**
     * BackgroundColor of the bottom bar.
     * @default "transparent"
     */
    bottomBarColor?: string;

    /**
     * A bool flag indicating whether the bottom bar should be highlighted.
     * @default true
     */
    bottomBarHighlight?: number;

    /**
     * A bool flag indicating whether the status bar should change with the background color.
     * @default true
     */
    controlStatusBar?: boolean;

    /**
     * Whether to show the bottom pagination bar.
     * @default true
     */
    showPagination?: boolean;

    /**
     * Additional props for the FlatList which holds all the pages.
     */
    flatlistProps?: FlatListProps<Page>;

    /**
     * The duration in milliseconds for the animation of the background color for the page transition.
     * @default 500
     */
    transitionAnimationDuration?: number;

    /**
     * Font scaling can cause troubles with high-resolution screens. You may want to disable it.
     * @default true
     */
    allowFontScaling?: boolean;

    /**
     * A function that receives the page index as a parameter on page change. Example Usage.
     */
    pageIndexCallback?: (pageIndex: number) => any;

    // DEFAULT PAGE STYLES

    /**
     * Override the default container styles.
     */
    containerStyles?: StyleProp<ViewStyle>;

    /**
     * Override the default image container styles e.g. the paddingBottom of 60.
     */
    imageContainerStyles?: StyleProp<ViewStyle>;

    /**
     * Override the default title styles.
     */
    titleStyles?: StyleProp<TextStyle>;

    /**
     * Override the default subtitle styles.
     */
    subTitleStyles?: StyleProp<TextStyle>;

    // CUSTOM COMPONENTS

    /**
     * Skip Button, gets skipLabel as prop.
     */
    SkipButtonComponent?: FC<SkipButtonProps>;

    /**
     * Next Button, gets nextLabel as prop.
     */
    NextButtonComponent?: FC<NextButtonProps>;

    /**
     * Done Button.
     */
    DoneButtonComponent?: FC<DoneButtonProps>;

    /**
     * Dot for the pagination, gets selected as prop to indicate the active page.
     */
    DotComponent?: FC<DotProps>;
}

export default class Onboarding extends Component<Props> {}
