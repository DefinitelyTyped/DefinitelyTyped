// Type definitions for react-responsive 1.1
// Project: https://github.com/contra/react-responsive
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

declare namespace MediaQuery {
    interface MediaQueryProps {
        query?: string | undefined;
        // matchers
        orientation?: "portrait" | "landscape" | undefined;
        scan?: "progressive" | "interlace" | undefined;
        aspectRatio?: string | undefined;
        deviceAspectRatio?: string | undefined;
        height?: number | string | undefined;
        deviceHeight?: number | string | undefined;
        width?: number | string | undefined;
        deviceWidth?: number | string | undefined;
        color?: boolean | undefined;
        colorIndex?: boolean | undefined;
        monochrome?: boolean | undefined;
        resolution?: number | string | undefined;
        // types
        minAspectRatio?: string | undefined;
        maxAspectRatio?: string | undefined;
        minDeviceAspectRatio?: string | undefined;
        maxDeviceAspectRatio?: string | undefined;
        minHeight?: number | string | undefined;
        maxHeight?: number | string | undefined;
        minDeviceHeight?: number | string | undefined;
        maxDeviceHeight?: number | string | undefined;
        minDeviceWidth?: number | string | undefined;
        maxDeviceWidth?: number | string | undefined;
        minWidth?: number | string | undefined;
        maxWidth?: number | string | undefined;
        minColor?: number | undefined;
        maxColor?: number | undefined;
        minColorIndex?: number | undefined;
        maxColorIndex?: number | undefined;
        minMonochrome?: number | undefined;
        maxMonochrome?: number | undefined;
        minResolution?: number | string | undefined;
        maxResolution?: number | string | undefined;
        // types
        all?: boolean | undefined;
        grid?: boolean | undefined;
        aural?: boolean | undefined;
        braille?: boolean | undefined;
        handheld?: boolean | undefined;
        print?: boolean | undefined;
        projection?: boolean | undefined;
        screen?: boolean | undefined;
        tty?: boolean | undefined;
        tv?: boolean | undefined;
        embossed?: boolean | undefined;
        children?: React.ReactNode;
    }
}

declare class MediaQuery extends React.Component<MediaQuery.MediaQueryProps, any> { }
export = MediaQuery;
