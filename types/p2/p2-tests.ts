import p2 = require("p2");
// Create a physics world, where bodies and constraints live
var world = new p2.World({
    gravity:[0, -9.82]
});

// Set default contact material
world.defaultContactMaterial = new p2.ContactMaterial(
    new p2.Material(1), new p2.Material(2),
    { friction: 1, restitution: 0 }
)

// Create an empty dynamic body
var circleBody = new p2.Body({
    mass: 5,
    position: [0, 10]
});

// Add a circle shape to the body.
var circleShape = new p2.Circle({ radius: 1 });
circleBody.addShape(circleShape);

// ...and add the body to the world.
// If we don't add it to the world, it won't be simulated.
world.addBody(circleBody);

// Create an infinite ground plane.
var groundBody = new p2.Body({
    mass: 0 // Setting mass to 0 makes the body static
});
var groundShape = new p2.Plane();
groundBody.addShape(groundShape);
world.addBody(groundBody);

// Create a convex shape. Can use various array types.
const convex = new p2.Convex({
    vertices: [
        new Float32Array([-1, 1]),
        new Uint32Array([0, -1]),
        [1, 1]
    ],
    axes: [
        new Float32Array([-1, 1]),
        new Int32Array([0, -1]),
        [1, 1]
    ]
})

// To get the trajectories of the bodies,
// we must step the world forward in time.
// This is done using a fixed time step size.
var timeStep = 1 / 60; // seconds

// Apply a force to the circle
circleBody.applyForce([10, 0]);

// Apply an impulse to the circle
circleBody.applyImpulse([0, 50]);

// The "Game loop". Could be replaced by, for example, requestAnimationFrame.
setInterval(function(){

    // The step method moves the bodies forward in time.
    world.step(timeStep);

    // Print the circle position to console.
    // Could be replaced by a render call.
    console.log("Circle y position: " + circleBody.position[1]);

}, 1000 * timeStep);
