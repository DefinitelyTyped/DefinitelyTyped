import * as React from "react";
import Webcam = require("react-webcam");

export class ReactWebcamTest extends React.Component {
    private webcam: Webcam;

    setRef = (webcam: Webcam) => {
        this.webcam = webcam;
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
    }

    render() {
        return (
            <div>
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                />
                <button onClick={this.capture}>Capture photo</button>
            </div>
        );
    }
}
