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
                    width={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                        deviceId: 'abc123',
                        width: 720,
                    }}
                />
                <button onClick={this.capture}>Capture photo</button>
            </div>
        );
    }
}
