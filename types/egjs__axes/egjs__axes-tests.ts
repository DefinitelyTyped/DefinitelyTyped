import Axes from "@egjs/axes";

const axes = new Axes({
	something1: {
		range: [0, 150],
		bounce: 50
	},
	something2: {
		range: [0, 200],
		bounce: 100
	},
	somethingN: {
		range: [1, 10],
	}
}, {
		deceleration: 0.0024
	});

axes.on({
	hold: evt => { },
	release: evt => { },
	animationStart: evt => { },
	animationEnd: evt => { },
	change: evt => { }
});

// 3. Initialize inputTypes
const panInputArea = new Axes.PanInput("#area", {
	scale: [0.5, 1]
});
const panInputHmove = new Axes.PanInput("#hmove");
const panInputVmove = new Axes.PanInput("#vmove");
const pinchInputArea = new Axes.PinchInput("#area", {
	scale: 1.5
});

// 4. Connect eg.Axes and InputTypes
// [PanInput] When the mouse or touchscreen is down and moved.
// Connect the 'something2' axis to the mouse or touchscreen x position and
// connect the 'somethingN' axis to the mouse or touchscreen y position.
axes.connect(["something2", "somethingN"], panInputArea);
axes.connect("something2 somethingN", panInputArea);

// Connect only one 'something1' axis to the mouse or touchscreen x position.
axes.connect(["something1"], panInputHmove);
axes.connect("something1", panInputHmove);

// Connect only one 'something2' axis to the mouse or touchscreen y position.
axes.connect(["", "something2"], panInputVmove);
axes.connect(" something2", panInputVmove);

// [PinchInput] Connect 'something2' axis when two pointers are moving toward (zoom-in) or away from each other (zoom-out).
axes.connect("something2", pinchInputArea);
