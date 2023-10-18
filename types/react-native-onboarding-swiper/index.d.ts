import { Component, FC } from "react";
import { FlatList, FlatListProps, StyleProp, TextStyle, ViewStyle } from "react-native";

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
    titleStyles?: StyleProp<TextStyle> | undefined;

    /**
     * Modify styles of a specific page's subtitle.
     */
    subTitleStyles?: StyleProp<TextStyle> | undefined;
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
    nextLabel?: string | JSX.Element | undefined;

    /**
     * A bool flag indicating whether the Next button is visible.
     * @default true
     */
    showNext?: boolean | undefined;

    /**
     * A string OR a React-Native component for the Skip label.
     * @default "Skip"
     */
    skipLabel?: string | JSX.Element | undefined;

    /**
     * A bool flag indicating whether the Skip button is visible.
     * @default true
     */
    showSkip?: boolean | undefined;

    /**
     * A callback that is fired if the Onboarding is skipped.
     */
    onSkip?: (() => any) | undefined;

    /**
     * When pressing skip, go to that page (e.g. skipToPage={2}). If this prop is provided, ignores onSkip.
     */
    skipToPage?: number | undefined;

    /**
     * A callback that is fired after the Onboarding is completed.
     */
    onDone?: (() => any) | undefined;

    /**
     * A bool flag indicating whether the Done checkmark button is visible.
     * @default true
     */
    showDone?: boolean | undefined;

    // GENERAL

    /**
     * A number for the height of the bottom bar.
     * @default 60
     */
    bottomBarHeight?: number | undefined;

    /**
     * BackgroundColor of the bottom bar.
     * @default "transparent"
     */
    bottomBarColor?: string | undefined;

    /**
     * A bool flag indicating whether the bottom bar should be highlighted.
     * @default true
     */
    bottomBarHighlight?: boolean | undefined;

    /**
     * A bool flag indicating whether the status bar should change with the background color.
     * @default true
     */
    controlStatusBar?: boolean | undefined;

    /**
     * Whether to show the bottom pagination bar.
     * @default true
     */
    showPagination?: boolean | undefined;

    /**
     * Additional props for the FlatList which holds all the pages.
     */
    flatlistProps?: FlatListProps<Page> | undefined;

    /**
     * The duration in milliseconds for the animation of the background color for the page transition.
     * @default 500
     */
    transitionAnimationDuration?: number | undefined;

    /**
     * Font scaling can cause troubles with high-resolution screens. You may want to disable it.
     * @default true
     */
    allowFontScaling?: boolean | undefined;

    /**
     * A function that receives the page index as a parameter on page change. Example Usage.
     */
    pageIndexCallback?: ((pageIndex: number) => any) | undefined;

    // DEFAULT PAGE STYLES

    /**
     * Override the default container styles.
     */
    containerStyles?: StyleProp<ViewStyle> | undefined;

    /**
     * Override the default image container styles e.g. the paddingBottom of 60.
     */
    imageContainerStyles?: StyleProp<ViewStyle> | undefined;

    /**
     * Override the default title styles.
     */
    titleStyles?: StyleProp<TextStyle> | undefined;

    /**
     * Override the default subtitle styles.
     */
    subTitleStyles?: StyleProp<TextStyle> | undefined;

    // CUSTOM COMPONENTS

    /**
     * Skip Button, gets skipLabel as prop.
     */
    SkipButtonComponent?: FC<SkipButtonProps> | undefined;

    /**
     * Next Button, gets nextLabel as prop.
     */
    NextButtonComponent?: FC<NextButtonProps> | undefined;

    /**
     * Done Button.
     */
    DoneButtonComponent?: FC<DoneButtonProps> | undefined;

    /**
     * Dot for the pagination, gets selected as prop to indicate the active page.
     */
    DotComponent?: FC<DotProps> | undefined;
}

export default class Onboarding extends Component<Props> {
    flatList?: FlatList;
    goNext: () => void;
}
