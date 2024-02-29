import * as React from "react";
import { ViewStyle } from "react-native";

export interface MarkerProps {
    pressed?: number | undefined;
    markerStyle?: ViewStyle | undefined;
    pressedMarkerStyle?: ViewStyle | undefined;
    value?: number | undefined;
}

export interface MultiSliderProps {
    /**
     * An array containing one or two values (determines one or two markers respectively) that are the initial marker values.
     * Note these must be possible values from your set up.
     *
     * Default [0]
     */
    values?: number[] | undefined;

    /**
     * Function to be called at beginning of press
     */
    onValuesChangeStart?: (() => void) | undefined;

    /**
     * Function called after every change in value, with current values passed in as an array.
     */
    onValuesChange?: ((change: number[]) => void) | undefined;

    /**
     * Function called on end of press with final values passed in as an array
     */
    onValuesChangeFinish?: ((change: number[]) => void) | undefined;

    /**
     * Width of track
     *
     * Default 280
     */
    sliderLength?: number | undefined;

    /**
     * TODO
     */
    sliderOrientation?: "horizontal" | "vertical" | undefined;

    /**
     * Area to be touched, should enclose the whole marker.
     * Will be automatically centered and contain the marker.
     * Slip displacement If finger leaves the marker measures distance before responder cuts out and changes are no
     * longer registered, if not given marker will be active until pressed released.
     */
    touchDimensions?: {
        height: number;
        width: number;
        borderRadius: number;
        slipDisplacement: number;
    } | undefined;

    customMarker?: React.ComponentType<MarkerProps> | undefined;

    /**
     * Slider min value corresponding to far left
     *
     * Default 0
     */
    min?: number | undefined;

    /**
     * Slider max value corresponding to far right
     *
     * Default 10
     */
    max?: number | undefined;

    /**
     * The step size between values. Make sure min max range is divisible by this to get expected results
     *
     * Default 1
     */
    step?: number | undefined;

    /**
     * Array of values corresponding to the slider's position (left to right on slider index 0 to end respectively).
     * Values of any type can be inserted and the slider will simply give them back in the callbacks
     */
    optionsArray?: number[] | undefined;

    /**
     * Style of sliders container, note be careful in applying styles that may affect the children's (i.e. the slider's) positioning
     *
     * Default { height: 30 }
     */
    containerStyle?: ViewStyle | undefined;

    /**
     * Customise the track
     *
     * Default { borderRadius: 7, height: 3.5 }
     */
    trackStyle?: ViewStyle | undefined;

    /**
     * Style for the track up to a single marker or between double markers
     *
     * Default { backgroundColor: 'blue' }
     */
    selectedStyle?: ViewStyle | undefined;

    /**
     * Style for remaining track
     *
     * Default { backgroundColor: 'grey' }
     */
    unselectedStyle?: ViewStyle | undefined;

    /**
     * Customise the marker's style
     *
     * Default {
     *     height:30,
     *     width: 30,
     *     borderRadius: 15,
     *     backgroundColor:'#E8E8E8',
     *     borderWidth: 0.5,
     *     borderColor: 'grey',
     * }
     */
    markerStyle?: ViewStyle | undefined;

    /**
     * Style to be given to marker when pressed
     *
     * Default { backgroundColor:'#D3D3D3' }
     */
    pressedMarkerStyle?: ViewStyle | undefined;
}

export default class MultiSlider extends React.Component<MultiSliderProps> {}
