// Typescript type definitions for jQuery.jNotify v1  by Fabio Franzini
// Project: http://jnotify.codeplex.com
// Definitions by: James Curran <https://github.com/jamescurran/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// To Use add line   ///<reference path='jquery.jnotify.d.ts'/>


export interface JNotifyInitOptions
    {
        oneAtTime:bool;
        appendType:string;
    }

export interface JNotifyOptions
    {
        text?:string;
        type?: string;
        showIcon? : bool;
        permanent?: bool;
        disappearTime?: number;        
    }

interface JQuery
    {
            jnotifyInizialize(options?: JNotifyInitOptions ) ;
            jnotifyAddMessage(options?: JNotifyOptions ) ;
    }

