/// <reference path="./riotcontrol.d.ts" />

import riotcontrol = require('riotcontrol');

{
	let store: RiotControl.Store;
	let result: void;
	result = riotcontrol.addStore(store);
}

{
	let events: string;
	let fn: Function;
	let result: void;
	result = riotcontrol.on(events, fn);
}

{
	let name: string;
	let fn: Function;
	let result: void;
	result = riotcontrol.one(name, fn);
}

{
	let events: string;
	let fn: Function;
	let result: void;
	result = riotcontrol.off(events);
	result = riotcontrol.off(events, fn);
}

{
	let name: string;
	let arg: any;
	let result: void;
	result = riotcontrol.trigger(name);
	result = riotcontrol.trigger(name, arg);
	result = riotcontrol.trigger(name, arg, arg);
	result = riotcontrol.trigger(name, arg, arg, arg);
}
