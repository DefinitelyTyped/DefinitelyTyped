import * as React from "react";
import { Offline, Online } from "react-detect-offline";

function ReactDetectOfflineTests() {
    return (
        <div>
            <Online>Only shown when you're online</Online>
            <Offline>Only shown offline (surprise!)</Offline>
        </div>
    );
}
