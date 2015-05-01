// Type definitions for qtip2 v2.2.1
// Project: http://http://qtip2.com/
// Definitions by: Nathan Pitman <https://github.com/Seltzer100/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Notes:
//   - Deprecated functionality is not supported.


/// <reference path="../jquery/jquery.d.ts" />

declare module QTip2 {
	/**
	 * Content property
	 */
	type Title = string | JQuery | Func | boolean | JQueryGenericPromise<any>;
	type Text = string | JQuery | Func | boolean | JQueryGenericPromise<any>;

	interface Content {
		title?: Title | { text: Title };
		text?: Text;
		attr?: string;
		button?: string | JQuery | boolean;
	}


	/**
	 * Position property
	 */
	interface PositionAdjust {
		x?: number;
		y?: number;
		mouse?: boolean;
		resize?: boolean;
		scroll?: boolean;
		method?: string;
	}

	type Target = JQuery | number[] | string;

	interface Position {
		my?: string | boolean;
		at?: string | boolean;
		target?: Target | boolean;
		container?: JQuery | boolean;
		viewport?: JQuery | boolean;
		effect?: boolean | ((api: any, pos: any, viewport: any) => any);
		adjust?: PositionAdjust;
	}


	/**
	 * Show property
	 */
	interface Show {
		target?: JQuery | boolean;
		event?: string | boolean;
		delay?: number;
		solo?: JQuery | string | boolean;
		ready?: boolean;
		effect?: boolean | ((offset: any) => any);
		modal?: boolean | Modal;
	}

	interface Modal
	{
		on?: boolean;
		blur?: boolean;
		escape?: boolean;
		stealfocus?: boolean;
		effect?: boolean | ((state: any) => any);
	}


	/**
	 * Hide property
	 */
	interface Hide {
		target?: JQuery | boolean;
		event?: string | boolean;
		delay?: number;
		inactive?: number | boolean;
		fixed?: boolean;
		// TODO: What is going on here?
		leave?: string | boolean;
		distance?: number | boolean;
		effect?: boolean | ((offset: any) => any);
	}


	/**
	 * Style property
	 */
	interface Tip {
		corner?: string | boolean;
		mimic?: string | boolean;
		border?: number | boolean;
		width?: number;
		height?: number;
		offset?: number;
	}

	interface Style {
		classes?: string | boolean;
		def?: boolean;
		widget?: boolean;
		width: string | number | boolean;
		height: string | number | boolean;
		tip?: string | boolean | Tip;
	}


	/**
	 * Events property
	 */
	type Func = (event: any, api: any) => any;

	interface Events {
		render?: Func;
		show?: Func;
		hide?: Func;
		toggle?: Func;
		visible?: Func;
		hidden?: Func;
		move?: Func;
		focus?: Func;
		blur?: Func;
	}


	/**
	 * Options
	 */
	interface QTipOptions {
		id?: string | boolean;
		prerender?: boolean;
		overwrite?: boolean;
		suppress?: boolean;
		metadata?: any;
		content?: Text | Content;
		position?: string | Position;
		style?: string | Style;
		show?: string | boolean | JQuery | Show;
		hide?: string | JQuery | Hide;
		events?: Events;
	}
}


interface JQuery {
	qtip(): JQuery;

	qtip(options: QTip2.QTipOptions): JQuery;
}
