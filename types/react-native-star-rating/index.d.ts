// Type definitions for react-native-star-rating 1.1
// Project: https://github.com/djchie/react-native-star-rating
// Definitions by: iRoachie <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ImageURISource, StyleProp, ViewStyle } from 'react-native';

export interface StarRatingProps {
    /**
     * Number between 0 to 1 to determine the opacity of the button.
     * Default is 0.2
     */
    activeOpacity?: number;
    /**
     * Style of the button containing the star.
     */
    buttonStyle?: StyleProp<ViewStyle>;

    /**
     * Style of the element containing the star rating component.
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Sets the interactivity of the star buttons.
     *
     * Default is false
     */
    disabled?: boolean;

    /**
     * Add an animation to the stars upon selection.
     */
    animation?: "bounce" | "flash" | "jello" | "pulse" | "rotate" | "rubberBand" | "shake" | "swing" | "tada" | "wobble";

    /**
     * The name of the icon to represent an empty star.
     * Refer to react-native-vector-icons.
     * Also can be a image object, both {uri:xxx.xxx} and require('xx/xx/xx.xxx').
     *
     * Default is "star-o"
     */
    emptyStar?: string | ImageURISource;

    /**
     * Color of an empty star.
     *
     * Default is gray
     */
    emptyStarColor?: string;

    /**
     * The name of the icon to represent a full star.
     * Refer to react-native-vector-icons.
     * Also can be a image object, both {uri:xxx.xxx} and require('xx/xx/xx.xxx')
     *
     * Default is "star"
     */
    fullStar?: string | ImageURISource;

    /**
     * Color of a filled star.
     *
     * Default is black
     */
    fullStarColor?: string;

    /**
     * The name of the icon to represent an half star.
     * Refer to react-native-vector-icons.
     * Also can be a image object, both {uri:xxx.xxx} and require('xx/xx/xx.xxx').
     *
     * Default is "star-half-o"
     */
    halfStar?: string | ImageURISource;

    /**
     * Color of a half-filled star.
     *
     * Defaults to fullStarColor.
     */
    halfStarColor?: string;

    /**
     * Sets ability to select half stars
     *
     * Default is false
     */
    halfStarEnabled?: boolean;

    /**
     * The name of the icon set the star image belongs to.
     * Refer to react-native-vector-icons.
     *
     * Default is "FontAwesome"
     */
    iconSet?: string;

    /**
     * The maximum number of stars possible.
     *
     * Default is 5
     */
    maxStars?: number;

    /**
     * The current rating to show.
     *
     * Default is 0
     */
    rating?: number;

    /**
     * Renders stars from right to left
     *
     * Default is false
     */
    reversed?: boolean;

    /**
     * Size of the star.
     *
     * Default is 40
     */
    starSize?: number;

    /**
     * Style to apply to the star.
     */
    starStyle?: StyleProp<ViewStyle>;

    /**
     * A function to handle star button presses.
     */
    selectedStar?(rating: number): void;
}

export default class StarRating extends React.Component<StarRatingProps> {}
