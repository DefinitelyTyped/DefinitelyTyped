import * as React from "react";
import { View } from "react-native";
import MultiSlider from "react-native-multi-slider";

// Without props
<MultiSlider />;

// Without optional props
<MultiSlider
    values={[5]}
    onValuesChangeStart={() => {}}
    onValuesChange={(change) => {
        // $ExpectType number[]
        change;
    }}
    onValuesChangeFinish={(change) => {
        // $ExpectType number[]
        change;
    }}
    sliderLength={280}
    sliderOrientation="horizontal"
    touchDimensions={{
        height: 40,
        width: 40,
        borderRadius: 20,
        slipDisplacement: 40,
    }}
    customMarker={({ markerStyle, pressed, pressedMarkerStyle, value }) => (
        <View style={pressed ? pressedMarkerStyle : markerStyle}>value: {value}</View>
    )}
    min={1}
    max={10}
    step={1}
    optionsArray={[1, 2, 3]}
    containerStyle={{
        height: 40,
    }}
    trackStyle={{
        height: 10,
        backgroundColor: "red",
    }}
    selectedStyle={{
        backgroundColor: "gold",
    }}
    unselectedStyle={{
        backgroundColor: "silver",
    }}
    markerStyle={{
        backgroundColor: "gold",
    }}
    pressedMarkerStyle={{
        backgroundColor: "silver",
    }}
/>;
