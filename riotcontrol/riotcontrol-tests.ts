/// <reference path="../typings/tsd.d.ts" />

import riot = require('../bower_components/riot/riot');
import RiotControl = require('../node_modules/riotcontrol/riotcontrol');

module Model
{
	export class TodoItem
	{
		constructor(public id:string, public title:string, public done:boolean) {}
	}
}

module ObservableTest
{
	var item1 = new Model.TodoItem("1", "hello", false);
	//make item1 observable
	riot.observable(item1);

	//test the observable interface on item1
	function add1(...args:string[]):void {
		console.log("+ " + args);
	}
	function remove1(...args:string[]):void {
		console.log("- " + args);
	}

	//on multiple events
	item1.on("add remove", (event:string, ...args:string[])=> {
		console.log("handle " + event + ": " + args);
	});

	//on single events
	item1.on("add", add1).on("remove", remove1);

	//trigger event
	item1.trigger("add", "toto").trigger("remove", "foo", "bar").trigger("add");

	//remove some handlers callback
	console.log("After remove some handlers");
	item1.off("add", add1);
	item1.off("remove", remove1);
	item1.trigger("add", "toto").trigger("remove", "foo", "bar").trigger("add");

	//remove all handlers
	console.log("After remove all handlers");
	item1.off("*");
	item1.trigger("add", "toto").trigger("remove", "foo", "bar").trigger("add");

	console.log("end ObservableTest");
}

module RiotControlTest
{
	/*create a store with 2 observable items*/
	var item1 = new Model.TodoItem("1", "hello", false);
	var item2 = new Model.TodoItem("1", "world", false);
	riot.observable(item1);
	riot.observable(item2);
	RiotControl.addStore(item1);
	RiotControl.addStore(item2);

	//RiotControl
	item1.on("add remove", (event:string, ...args:string[])=> {
		console.log("item1 " + event + ": " + args);
	});
	item2.on("add remove", (event:string, ...args:string[])=> {
		console.log("item2 " + event + ": " + args);
	});
	RiotControl.on("add remove", (event:string, ...args:string[])=> {
		console.log("RiotControl " + event + ": " + args);
	});
	RiotControl.trigger("add", "toto");
	RiotControl.trigger("remove", "foo", "bar");

	//remove add handler
	RiotControl.off("add");
	console.log("After remove add handlers");
	RiotControl.trigger("add", "toto");
	RiotControl.trigger("remove", "foo", "bar");

	//remove all handler
	RiotControl.off("*");
	console.log("After remove all handlers");
	RiotControl.trigger("add", "toto");
	RiotControl.trigger("remove", "foo", "bar");

	console.log("end RiotControlTest");
}
