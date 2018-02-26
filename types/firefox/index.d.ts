// Type definitions for Mozilla Web API
// Project: https://developer.mozilla.org/en-US/docs/Web/API
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// required lib.d.ts

// expand Navigator definietion.
interface Navigator {
	mozApps:Apps;
}

interface Apps {
	install(url:string, receipts?:any[]):DOMRequest<App>;
	getSelf():DOMRequest<App>;
	getInstalled():DOMRequest<App[]>;
	checkInstalled(url:string): DOMRequest<App>;
}

interface DOMRequest<T> {
	onsuccess: Function;
	onerror: Function;
	readyState:string; // "done" or "pending"
	result:T;
	error:DOMError;
}

interface App {
	manifest:any;
	manifestURL:string;
	origin:string;
	installOrigin:string;
	installTime:number;
	receipts:any[];

	launch():void;
	checkForUpdate():DOMRequest<any>;
}

