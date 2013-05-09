// Typescript type definitions for jQuery.noty v2.0 by Nedim Carter <http://needim.github.io>
// Project: http://needim.github.io/noty/
// Definitions by: Aaron King <https://github.com/kingdango/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../jquery/jquery.d.ts'/>

interface NotyOptions {
	layout?: string;
	theme?: string;
	type?: string;
	text?: string;
	dismissQueue?: bool;
	template?: string;
	animation?: NotyAnimationOptions;
	timeout?: number;
	force?: bool;
	modal?: bool;
	closeWith?: Array;
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

	closed: bool;
	shown: bool;
}