// Type definitions for jQuery.jNotify 1.0
// Project: http://jnotify.codeplex.com
// Definitions by: James Curran <https://github.com/jamescurran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
// Project by: Fabio Franzini

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
