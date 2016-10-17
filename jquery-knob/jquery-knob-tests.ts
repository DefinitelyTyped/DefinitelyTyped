// create from html attrs
$('<input type="text" name="knob" value="50" data-min="0" data-max="100">').knob();

// create with object
$('<input type="text" name="knob-2">').knob({
	min: 0,
	max: 100,
	angleArc: 270
});

// hooks
var hookKnob = $('<input type="text" name="knob-2">').knob({
	release: function(value) {
		console.log(value);
	},
	change: function(value) {
		console.log(value);
	},
	draw: function() {
		console.log(this);
	},
	cancel: function() {
		console.log(this);
	},
	format: function(value) {
		console.log(value);
	}
});

// trigger
hookKnob.trigger('release');
hookKnob.trigger('change');
hookKnob.trigger('draw');
hookKnob.trigger('cancel');
hookKnob.trigger('format');