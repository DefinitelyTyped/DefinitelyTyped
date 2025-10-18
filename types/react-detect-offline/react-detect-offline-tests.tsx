import * as React from "react";
import { Detector, Offline, Online } from "react-detect-offline";

declare function render(arg: { online: boolean }): React.JSX.Element;

// Online
{
    <Online />;
    // @ts-expect-error - props.render is not allowed to be in Online.
    <Online render={render} />;

    <Online
        onChange={(online) => {
            // $ExpectType boolean
            online;
        }}
        wrapperType="wrapperType"
    >
        Only shown when you're online
    </Online>;

    <Online polling />;
    <Online polling={{}} />;
    <Online polling={{ url: "url", interval: 1000, timeout: 1000 }} />;
    // @ts-expect-error - `enabled` is not upposed to be proovided by props
    <Online polling={{ enabled: false }} />;
}

// Offline
{
    <Offline />;
    // @ts-expect-error - props.render is not allowed to be in Offline.
    <Offline render={render} />;

    <Offline
        onChange={(online) => {
            // $ExpectType boolean
            online;
        }}
        wrapperType="wrapperType"
    >
        Only shown when you're online
    </Offline>;

    <Offline polling />;
    <Offline polling={{}} />;
    <Offline polling={{ url: "url", interval: 1000, timeout: 1000 }} />;
    // @ts-expect-error - `enabled` is not upposed to be proovided by props
    <Offline polling={{ enabled: false }} />;
}

// Detector
{
    // @ts-expect-error - props.render is required in Detector.
    <Detector />;

    <Detector
        render={(arg) => {
            // $ExpectType boolean
            arg.online;

            return null;
        }}
    />;
    <Detector render={render} />;

    <Detector
        onChange={(online) => {
            // $ExpectType boolean
            online;
        }}
        wrapperType="wrapperType"
        render={render}
    >
        Only shown when you're online
    </Detector>;

    <Detector polling render={render} />;
    <Detector polling={{}} render={render} />;
    <Detector polling={{ url: "url", interval: 1000, timeout: 1000 }} render={render} />;
    // @ts-expect-error - `enabled` is not upposed to be proovided by props
    <Detector polling={{ enabled: false }} render={render} />;
}
