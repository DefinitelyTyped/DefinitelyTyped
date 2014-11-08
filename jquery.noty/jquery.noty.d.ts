// Type definitions for jQuery.noty v2.0
// Project: http://needim.github.io/noty/
// Definitions by: Aaron King <https://github.com/kingdango/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Project by: Nedim Carter <http://needim.github.io>

/// <reference path='../jquery/jquery.d.ts'/>

interface NotyOptions {
    layout?: string;
    theme?: string;
    type?: string;
    /** Text to show. Can be html or string. */
    text?: string; 
    /** If you want to use queue feature set this true. */
    dismissQueue?: boolean; 
    /** The note`s optional template like '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>' */
    template?: string; 
    animation?: NotyAnimationOptions;
    /** Delay for closing event. Set false for sticky notifications */
    timeout?: any; 
    /** Adds notification to the beginning of queue when set to true */
    force?: boolean; 
    modal?: boolean;
    /** You can set max visible notification for dismissQueue true option */
    maxVisible?: number;
    /** To close all notifications before show */
    killer?: boolean;
    closeWith?: any[];
    callback?: NotyCallbackOptions;
    /** An array of buttons or false to hide them */
    buttons?: any;
}

interface NotyAnimationOptions {
	open?: any;
	close?: any;
	easing?: string;
	speed?: number;
}

interface NotyCallbackOptions {
	onShow?: Function;
	afterShow?: Function;
	onClose?: Function;
	afterClose?: Function;
}

interface NotyStatic {

	(notyOptions: NotyOptions);
	defaults: NotyOptions;

	get(id: any);
	close(id: any);
	clearQueue();
	closeAll();
	setText(id: any, text: string);
	setType(id: any, type: string);

}

interface JQueryStatic {
	noty: NotyStatic;
}

declare var noty: {

	(notyOptions: NotyOptions);

	show();
	close();
	setText(text: string);
	setType(type: string);
	setTimeout(timeout: number);

	closed: boolean;
	shown: boolean;
}
