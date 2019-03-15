import * as React from "react";
import { View } from "react-native";
import Canvas, {
    Image as CanvasImage,
    Path2D,
    ImageData
} from "react-native-canvas";

class CanvasTest extends React.Component {
    render() {
        return (
            <View>
                <Canvas ref={this.handleCanvas} />
            </View>
        );
    }

    handleCanvas = (canvas: Canvas) => {};
}
