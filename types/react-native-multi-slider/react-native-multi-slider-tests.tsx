import * as React from "react";
import { View } from "react-native";
import MultiSlider from "react-native-multi-slider";

class SliderTest extends React.Component {
    getInitialState() {
        return {
            sliderOneChanging: false,
            sliderOneValue: [ 5 ],
        };
    }

    SliderOneValuesChangeStart() {
        return true;
    }

    SliderOneValuesChange(values: number[]) {
        return values[0];
    }

    SliderOneValuesChangeFinish() {
        return false;
    }

    /**
     * Examples as from https://github.com/JackDanielsAndCode/react-native-multi-slider/blob/master/index.ios.js
     */
    render() {
        return (
            <React.Fragment>
                <MultiSlider
                    values={[ 5 ]}
                    sliderLength={280}
                    onValuesChangeStart={this.SliderOneValuesChangeStart}
                    onValuesChange={this.SliderOneValuesChange}
                    onValuesChangeFinish={this.SliderOneValuesChangeFinish}
                />

                <MultiSlider values={[ 3, 7 ]} sliderLength={280} />

                <MultiSlider
                    selectedStyle={{
                        backgroundColor: "gold",
                    }}
                    unselectedStyle={{
                        backgroundColor: "silver",
                    }}
                    values={[ 5 ]}
                    containerStyle={{
                        height: 40,
                    }}
                    trackStyle={{
                        height: 10,
                        backgroundColor: "red",
                    }}
                    touchDimensions={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        slipDisplacement: 40,
                    }}
                    customMarker={({ markerStyle, pressed, pressedMarkerStyle, value}) => <View style={pressed ? pressedMarkerStyle : markerStyle}>value: {value}</View>}
                    sliderLength={280}
                />
            </React.Fragment>
        );
    }
}
