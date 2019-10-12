import * as React from "react";
import * as ReactNative from "react-native";

// See https://github.com/react-native-china/react-native-ART-doc/blob/6ba9c0f7c7e495a12045f3d7061834d2c74413c5/doc.md

const { Surface, Shape, Group, Text, ClippingRectangle } = ReactNative.ART;

class Test extends React.Component {
    render() {
        return (
            <Surface width={200} height={200}>
                <ClippingRectangle width={20} height={20} x={100} y={100}>
                    <Shape d={/*new Path().moveTo(0,0).lineTo(200,200)*/ "fixme"} stroke="black" strokeWidth={10} />
                </ClippingRectangle>
            </Surface>
        );
    }
}
