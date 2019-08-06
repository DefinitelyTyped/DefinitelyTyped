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

    handleCanvas = (canvas: Canvas) => {
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext("2d");
        context.fillStyle = "purple";
        context.fillRect(0, 0, 100, 100);

        const ellipse = new Path2D(canvas);
        ellipse.ellipse(50, 50, 25, 35, (45 * Math.PI) / 180, 0, 2 * Math.PI);
        context.fillStyle = "purple";
        context.fill(ellipse);

        const image = new CanvasImage(canvas);
        canvas.width = 100;
        canvas.height = 100;

        image.src =
            "https://upload.wikimedia.org/wikipedia/commons/6/63/Biho_Takashi._Bat_Before_the_Moon%2C_ca._1910.jpg";
        image.addEventListener("load", () => {
            context.drawImage(image, 0, 0, 100, 100);
        });

        const imageData = context.getImageData(0, 0, 100, 100);
        const data = Object.values(imageData.data);
        const length = Object.keys(data).length;
        for (let i = 0; i < length; i += 4) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
        }
        const imgData = new ImageData(canvas, data, 100, 100);
        context.putImageData(imgData, 0, 0);
    }
}
