import MultiSlider from "@ptomasroos/react-native-multi-slider";
import * as React from "react";
import { Text } from "react-native";

const CustomSliderMarker: React.SFC<{ currentValue: number }> = ({ currentValue }) => <Text>{currentValue}</Text>;

const MultiSliderTest: React.SFC = () => (
    <MultiSlider
        min={0}
        max={10}
        step={1}
        values={[ 0, 10 ]}
        onValuesChange={(a) => console.log(a[0])}
        onValuesChangeStart={() => console.log("wow")}
        onValuesChangeFinish={() => console.log("amazing")}
        containerStyle={{ marginTop: 20 }}
        selectedStyle={{ backgroundColor: "#FFF" }}
        unselectedStyle={{ backgroundColor: "#DDD" }}
        markerStyle={{ backgroundColor: "#FFF" }}
        pressedMarkerStyle={{ backgroundColor: "silver" }}
        isMarkersSeparated={true}
        customMarkerLeft={(e) => {
            return <CustomSliderMarker currentValue={e.currentValue} />;
        }}
        customMarkerRight={(e) => {
            return <CustomSliderMarker currentValue={e.currentValue} />;
        }}
    />
);
