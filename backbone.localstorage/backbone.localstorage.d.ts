//Type definitions for Backbone.LocalStorage v1.1.7
//Project details: <https://github.com/jeromegn/Backbone.localStorage>
//Definitions by: Frank Shaw <http://github.com/FrankShaw>

/// <reference path="../backbone/backbone.d.ts" />

/*
This simple module replaces the default Backbone.sync method with a localStorage-based
sync. Models are assigned a GUID based on their Backbone.Model.id and parsed into JSON
objects for storage. Any models or collections that do not declare a localStorage object
will use the default Backbone.sync function.  

To use inside a Backbone.Model or Backbone.Collection simply add this line:

this.localStorage = new Backbone.LocalStorage("someName");

Additionally, if users would rather use their own serializer versus the default JSON
serializer they can provide that as an optional argument in the constructor.
*/

declare module Backbone {
	class LocalStorage {
		name: string;
		serializer: Serializer;

		constructor(name: string, serializer?: Serializer);
	}

	interface Serializer {
		serialize(item: Model): string;
		deserialize(data: string): Model; 
	}
}