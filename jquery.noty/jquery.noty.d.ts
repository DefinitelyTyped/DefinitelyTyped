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
	text?: string;
	dismissQueue?: boolean;
	template?: string;
	animation?: NotyAnimationOptions;
	timeout?: number;
	force?: boolean;
	modal?: boolean;
	closeWith?: any[];
	callback?: NotyCallbackOptions;
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
