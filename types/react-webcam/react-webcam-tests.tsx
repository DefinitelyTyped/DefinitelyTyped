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

    onUserMedia = () => {
    }

    onUserMediaError = (err: Error) => {
        console.error(err);
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
                    screenshotQuality={0.8}
                    screenshotWidth={300}
                    onUserMedia={this.onUserMedia}
                    onUserMediaError={this.onUserMediaError}
                    audioConstraints={{
                        channelCount: 2
                    }}
                    videoConstraints={{
                        deviceId: "device0"
                    }}
                />
                <button onClick={this.capture}>Capture photo</button>
            </div>
        );
    }
}
