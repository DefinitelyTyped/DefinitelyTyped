// Type definitions for jQuery.jNotify 1.0
// Project: http://jnotify.codeplex.com
// Definitions by: James Curran <https://github.com/jamescurran/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
// Project by: Fabio Franzini

/// <reference types="jquery"/>

interface JNotifyInitOptions {
    oneAtTime?: boolean;
    appendType?: string;
}

interface JNotifyOptions {
    text?: string;
    type?: string;
    showIcon?: boolean;
    permanent?: boolean;
    disappearTime?: number;
}

interface JQuery {
    jnotifyInizialize(options?: JNotifyInitOptions);
    jnotifyAddMessage(options?: JNotifyOptions);
}
