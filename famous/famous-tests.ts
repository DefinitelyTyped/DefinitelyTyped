

import { Node, Size, FamousEngine } from 'famous/core'
import { DOMElement } from 'famous/dom-renderables'
import { PhysicsEngine, Box, RotationalSpring } from 'famous/physics'
import { Vec3, Quaternion } from 'famous/math'

function test_seed() {
	FamousEngine.init();

	var logo = FamousEngine.createScene().addChild();

	new DOMElement(logo, { tagName: 'img' })
	    .setAttribute('src', './images/famous_logo.png');

	logo
	    .setSizeMode('absolute', 'absolute', 'absolute')
	    .setAbsoluteSize(250, 250)
	    .setAlign(0.5, 0.5)
	    .setMountPoint(0.5, 0.5)
	    .setOrigin(0.5, 0.5);

	var spinner = logo.addComponent({
	    onUpdate: function(time: number) {
	        logo.setRotation(0, time / 1000, 0);
	        logo.requestUpdateOnNextTick(spinner);
	    }
	});

	logo.requestUpdate(spinner);
}

function test_physics() {
	let button = new Node()
		.setSizeMode(Size.ABSOLUTE, Size.ABSOLUTE)
		.setAbsoluteSize(120, 40)
		.setAlign(.5, .5)
		.setMountPoint(.5, .5)
		.setOrigin(.5, .4);
	
	button.addUIEvent('mousedown');
	button.addUIEvent('touchstart');
	button.addUIEvent('mouseup');
	button.addUIEvent('touchend');
	
	let engine = new PhysicsEngine();
	let box = new Box({
		mass: .25,
		size: [1, 1, 1]
	});
	engine.add(box);
	
	let anchor = new Quaternion();
	let rotationalSpring = new RotationalSpring(null, box, {
        period: 0.5,
        dampingRatio: 0.3,
        anchor: anchor
    });
	engine.add(rotationalSpring);
	
	let started = false;
	let id = button.addComponent({
		onUpdate: (time: number) => {
			engine.update(time);

			if (box.getAngularVelocity().length() < 1e-7) {
				return;
			}
			
			let t = engine.getTransform(box);
			button.setRotation(t.rotation[0], t.rotation[1], t.rotation[2], t.rotation[3]);
			
			button.requestUpdateOnNextTick(id);
		},
		onReceive: (event: string) => {
			if (event == 'mousedown' || event == 'touchstart') {
				anchor.fromEuler(Math.PI, 0, 0);
				started = true;
				button.requestUpdate(id);
			}
			
			if (event == 'mouseup' || event == 'touchend') {
				anchor.fromEuler(0, 0, 0);
				started = false;					
			}
		}
	});
}