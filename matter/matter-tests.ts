/// <reference path="matter.d.ts" />
var Engine = Matter.Engine,
	World = Matter.World,
	Body = Matter.Body,
	Bodies = Matter.Bodies,
	Common = Matter.Common,
	Composites = Matter.Composites,
	MouseConstraint = Matter.MouseConstraint;

// create a Matter.js engine
var engine = Engine.create(document.body, {
	render: {
		options: {
			showAngleIndicator: true,
			wireframes: true
		}
	}
});

// add a mouse controlled constraint
var mouseConstraint = MouseConstraint.create(engine);
World.add(engine.world, mouseConstraint);

// create a load of circle bodies
var stack = Composites.stack(20, 20, 20, 5, 0, 0, function (x, y, column, row) {
	return Bodies.circle(x, y, Common.random(10, 20), { friction: 0.00001, restitution: 0.5, density: 0.001 });
});

// add circle bodies to the world
World.add(engine.world, stack);

// add some ramps to the world for the bodies to roll down
World.add(engine.world, [
	Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.06 }),
	Bodies.rectangle(500, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.06 }),
	Bodies.rectangle(340, 580, 700, 20, { isStatic: true, angle: Math.PI * 0.04 })
]);

// add some some walls to the world
var offset = 5;
World.add(engine.world, [
	Bodies.rectangle(400, -offset, 800 + 2 * offset, 50, { isStatic: true }),
	Bodies.rectangle(400, 600 + offset, 800 + 2 * offset, 50, { isStatic: true }),
	Bodies.rectangle(800 + offset, 300, 50, 600 + 2 * offset, { isStatic: true }),
	Bodies.rectangle(-offset, 300, 50, 600 + 2 * offset, { isStatic: true })
]);

// run the engine
Engine.run(engine);