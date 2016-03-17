// Type definitions for status-bar
// Project: https://github.com/atom/status-bar
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../space-pen/space-pen.d.ts" />
/// <reference path="../text-buffer/text-buffer.d.ts" />

declare namespace StatusBar {
	interface IStatusBarViewStatic {
		content():any;

		new(...args:any[]):IStatusBarView;
	}

	interface IStatusBarView extends View {

		initialize():any;
		attach():any;
		destroy():any;
		appendLeft(view:View):any;
		prependLeft(view:View):any;
		appendRight(view:View):any;
		prependRight(view:View):any;
		getActiveBuffer():TextBuffer.ITextBuffer;
		getActiveItem():any;
		storeActiveBuffer():TextBuffer.ITextBuffer;
		subscribeToBuffer(event:string, callback:Function):any;
		subscribeAllToBuffer():any[];
		unsubscribeAllFromBuffer():any[];
	}
}
