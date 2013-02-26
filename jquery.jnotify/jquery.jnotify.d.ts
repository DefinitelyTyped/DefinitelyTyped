// Typescript type definitions for jQuery.jNotify 1.0 by Fabio Franzini
// Project: http://jnotify.codeplex.com
// Definitions by: James Curran <https://github.com/jamescurran/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path='../jquery/jquery.d.ts'/>

interface JNotifyInitOptions {
    oneAtTime?: bool;
    appendType?: string;
}

interface JNotifyOptions {
    text?: string;
    type?: string;
    showIcon?: bool;
    permanent?: bool;
    disappearTime?: number;
}

interface JQuery {
    jnotifyInizialize(options?: JNotifyInitOptions);
    jnotifyAddMessage(options?: JNotifyOptions);
}