import * as React from 'react';

import { ReactMic } from 'react-mic';

class ReactMicTest extends React.Component {
    render() {
        return (
            <ReactMic
                record={true}
                className="sound-wave"
                onStop={data => console.log(data)}
                onData={data => console.log(data)}
                strokeColor="#000000"
                backgroundColor="#FF4081"
            />
        );
    }
}
