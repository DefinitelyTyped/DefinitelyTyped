import * as WaveSurfer from './wavesurfer';

declare module './wavesurfer' {
    interface Styles {
        [styleName: string]: string;
    }

    interface DrawingContextAttributes {
        desynchronized: boolean;
    }

    interface XHROptions {
        url?: string;
        method?: string;
        mode?: string;
        credentials?: string;
        cache?: string;
        responseType?: "arraybuffer" | "blob" | "json" | "text";
        requestHeaders?: XHRRequestHeader[];
        redirect?: string;
        referrer?: string;
        withCredentials?: boolean;
    }

    interface XHRRequestHeader {
        key: string;
        value: string;
    }
}
