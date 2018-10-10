// Type definitions for react-youtube 7.4
// Project: https://github.com/troybetz/react-youtube
// Definitions by: kgtkr <https://github.com/kgtkr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
export default class YouTube extends React.Component<{
    videoId?: string,
    id?: string,
    className?: string,
    opts?: {
        height?: string,
        width?: string,
        playerVars?: {
            autoplay?: 0 | 1,
            cc_load_policy?: 1,
            color?: 'red' | 'white',
            controls?: 0 | 1 | 2,
            disablekb?: 0 | 1,
            enablejsapi?: 0 | 1,
            end?: number,
            fs?: 0 | 1,
            hl?: string,
            iv_load_policy?: 1 | 3,
            list?: string,
            listType?: 'playlist' | 'search' | 'user_uploads',
            loop?: 0 | 1,
            modestbranding?: 1,
            origin?: string,
            playlist?: string,
            playsinline?: 0 | 1,
            rel?: 0 | 1,
            showinfo?: 0 | 1,
            start?: number
        }
    },
    onReady?(event: { target: any }): void,
    onError?(event: { target: any, data: number }): void,
    onPlay?(event: { target: any, data: number }): void,
    onPause?(event: { target: any, data: number }): void,
    onEnd?(event: { target: any, data: number }): void,
    onStateChange?(event: { target: any, data: number }): void,
    onPlaybackRateChange?(event: { target: any, data: number }): void,
    onPlaybackQualityChange?(event: { target: any, data: string }): void,
}> {
}
