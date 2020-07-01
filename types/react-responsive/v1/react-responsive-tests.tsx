import * as React from "react";
import MediaQuery = require("react-responsive");

class Test extends React.Component {
    render() {
        return (
            <div>
                <div>Device Test!</div>
                <MediaQuery minDeviceWidth={1224}>
                    <div>You are a desktop or laptop</div>
                    <MediaQuery minDeviceWidth={1824}>
                        <div>You also have a huge screen</div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1224}>
                        <div>You are sized like a tablet or mobile phone though</div>
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    <div>You are a tablet or mobile phone</div>
                </MediaQuery>
                <MediaQuery orientation="portrait">
                    <div>You are portrait</div>
                </MediaQuery>
                <MediaQuery orientation="landscape">
                    <div>You are landscape</div>
                </MediaQuery>
                <MediaQuery minResolution="2dppx">
                    <div>You are retina</div>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div>You are a desktop or laptop</div>
                    <MediaQuery query="(min-device-width: 1824px)">
                        <div>You also have a huge screen</div>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1224px)">
                        <div>You are sized like a tablet or mobile phone though</div>
                    </MediaQuery>
                </MediaQuery>
            </div>
        );
    }
}
