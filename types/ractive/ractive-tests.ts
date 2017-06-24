

function test_transition() {
	var plugin: Ractive.TransitionPlugin = (t: Ractive.Transition, params: Object) => {
		// Some stuffs...
	};

	Ractive.transitions['myTransition'] = plugin;
}

var adaptor: Ractive.AdaptorPlugin;


Ractive.defaults = {
	template: '',
}

var options: Ractive.NewOptions = {
	adapt: ['myAdaptor', adaptor],
	template: '',
	data: {
		someThing: 'value',
	}
};

var r: Ractive.Ractive = new Ractive(options);

r.add('keypath', 1);

var re: Ractive.Static = Ractive.extend(options);
var component: Ractive.Static = re.extend(options);
new component(options);