import * as React from "react";
// import 'node';
import { Online, Offline, Detector, IPooling } from 'react-detect-offline';

import * as ReactTestRenderer from 'react-test-renderer';

const polling: IPooling = {
    enabled: true,
    interval: 2000,
    timeout: 1000
};

ReactTestRenderer.create(
    <React.Fragment>
        <Online>You are Online</Online>
        <Offline>You're offline right now. Check your connection.</Offline>

        <Online polling={polling}>Online 🆗</Online>
        <Offline polling={polling}>⚠️Offline⚠️</Offline>

        <Detector
            render={({ online }) => (
                <div className={online ? "normal" : "warning"}>
                    You are currently {online ? "online" : "offline"}
                </div>
            )}
        />
    </React.Fragment>
);