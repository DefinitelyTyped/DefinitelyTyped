/// <reference types="jquery"/>

interface JNotifyInitOptions {
    oneAtTime?: boolean | undefined;
    appendType?: string | undefined;
}

interface JNotifyOptions {
    text?: string | undefined;
    type?: string | undefined;
    showIcon?: boolean | undefined;
    permanent?: boolean | undefined;
    disappearTime?: number | undefined;
}

interface JQuery {
    jnotifyInizialize(options?: JNotifyInitOptions);
    jnotifyAddMessage(options?: JNotifyOptions);
}
