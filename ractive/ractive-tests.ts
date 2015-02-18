/// <reference path="ractive.d.ts" />

function test_transition() {
	var plugin: Ractive.TransitionPlugin = (t: Ractive.Transition, params: Object) => {
		// Some stuffs...
	};

	Ractive.transitions['myTransition'] = plugin;
}

Ractive.defaults = {
	template: '',
	debug: true
}

var options: Ractive.NewOptions = {
	template: '',
};

var r: Ractive.Ractive = new Ractive(options);

r.add('keypath', 1);

var re: Ractive.Static = Ractive.extend(options);
var component: Ractive.Static = re.extend(options);
new component(options);