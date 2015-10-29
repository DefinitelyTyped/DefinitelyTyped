/// <reference path="rivets.d.ts" />

Rivets.configure({
		  // Attribute prefix in templates
		  prefix: 'rv',
		  // Preload templates with initial data on bind
		  preloadData: true,
		  // Root sightglass interface for keypaths
		  rootInterface: '.',
		  // Template delimiters for text bindings
		  templateDelimiters: ['[[', ']]'],
		  // Augment the event handler of the on-* binder
		  handler: function(target:any, event:any, binding:any) {
		    this.call(target, event, binding.view.models)
		  }
		})
var t = {test: ["hello", "one", "two"]}
Rivets.bind(document.getElementById("para1"), t)