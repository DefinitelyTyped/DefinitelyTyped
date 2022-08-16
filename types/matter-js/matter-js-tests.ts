import Matter = require('matter-js');
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Collision = Matter.Collision,
    Constraint = Matter.Constraint,
    Events = Matter.Events,
    Query = Matter.Query,
    Plugin = Matter.Plugin,
    Render = Matter.Render,
    SAT = Matter.SAT,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Pair = Matter.Pair,
    Pairs = Matter.Pairs,
    Contact = Matter.Contact,
    Vertices = Matter.Vertices,
    Detector = Matter.Detector,
    Resolver = Matter.Resolver;

Matter.use('matter-attractors');
Plugin.use(Matter, ['matter-wrap']);

// $ExpectType Engine
var engine = Engine.create({
    detector: Detector.create(),
});
// $ExpectType Detector
engine.detector;

// Body
// $ExpectType Body
const body = Body.create({});

//Bodies
var box1 = Bodies.rectangle(400, 200, 80, 80);
var box2 = Bodies.rectangle(400, 610, 810, 60, {
    angle: 10,
    angularSpeed: 11,
    angularVelocity: 1,
    density: 4,
    isStatic: true,
});

var circle1 = Bodies.circle(100, 100, 50, {
    plugin: {
        wrap: {
            min: {
                x: 0,
                y: 0,
            },
            max: {
                x: 1024,
                y: 1024,
            },
        },
    },
});
const vertex: Matter.Vertex = {
    x: 1,
    y: 2,
    index: 1,
    body: body,
    isInternal: false,
};
// $ExpectType Body
Bodies.fromVertices(1, 2, [[vertex, { x: 3, y: 4 }]]);

const vector = Matter.Vector.create(10, 10);
var radius = circle1.circleRadius;
Body.setCentre(circle1, vector, true);

World.addBody(engine.world, box1);
World.add(engine.world, [box2, circle1]);

const filter1: Matter.ICollisionFilter = {
    category: 1,
};

const emptyFilter: Matter.ICollisionFilter = {};

// Body - collision filter
var box3 = Bodies.rectangle(400, 200, 80, 80, {
    // Allows only one option to be defined
    collisionFilter: filter1,
});

var box4 = Bodies.rectangle(400, 200, 80, 80, {
    collisionFilter: emptyFilter, // Or none
});

// Composites
var stack = Composites.stack(0, 100, 5, 1, 20, 0, function (x: number, y: number, column: number, row: number) {
    return Bodies.circle(x, y, 75, { restitution: 0.9 });
});

const cradle = Composites.newtonsCradle(200, 50, 5, 20, 250);

World.add(engine.world, [stack, cradle]);

// Constraints
var constraint1 = Constraint.create({
    bodyA: box1,
    bodyB: box2,
    stiffness: 0.02,
    damping: 0.01,
});

World.addConstraint(engine.world, constraint1);

// Query
// $ExpectType Collision[]
var collisions = Query.ray([box1, box2, circle1], { x: 1, y: 2 }, { x: 3, y: 4 });
// $ExpectType Collision[]
collisions = Query.collides(box1, [box2, circle1]);

// events
Events.on(engine, 'beforeTick', (e: Matter.IEventTimestamped<Matter.Engine>) => {});

Engine.run(engine);

// Renderer
var render = Render.create({
    engine: engine,
    bounds: {
        min: {
            x: -500,
            y: -500,
        },
        max: {
            x: 500,
            y: 500,
        },
    },
    // Renderer options
    options: {
        showAxes: true,
        showCollisions: true,
        showConvexHulls: true,
    },
});

// Runner
const runner1 = Matter.Runner.create({
    delta: 1000 / 60,
    isFixed: false,
    enabled: true,
});
const runner2 = Matter.Runner.create({});
const runner3 = Matter.Runner.create();

// Mouse
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, { mouse });

render.mouse = mouse;

Events.on(mouseConstraint, 'mousemove', (e: Matter.IMouseEvent<Matter.MouseConstraint>) => {});

// Composite
// $ExpectType Composite
var composite1 = Composite.create();
// $ExpectType Composite
var composite2 = Composite.create();
// $ExpectType Composite
var composite3 = Composite.create();
composite3.id = 1;
composite3.bodies = [body];
composite3.composites = [composite1];
composite3.constraints = [constraint1];
composite3.isModified = false;
composite3.label = 'test';
composite3.parent = composite2;
composite3.plugin = Plugin.resolve('test')!;
// @ts-expect-error
composite3.type = 'test';

// $ExpectType Composite
Composite.add(composite1, box1);
// $ExpectType Composite
Composite.add(composite2, composite1);
// $ExpectType Composite
Composite.add(composite1, constraint1);
// $ExpectType Composite
Composite.add(composite1, mouseConstraint);
// $ExpectType Composite
Composite.add(composite3, [box1, composite2, constraint1, mouseConstraint]);

// Pairs
// $ExpectType Pairs
const pairs = Pairs.create({});
// $ExpectType Pairs
Pairs.clear(pairs);
// $ExpectType void
Pairs.update(pairs, [], 1);

// Collision
// $ExpectType Collision
let collision = Collision.create(body, body);
collision.pair = null;
collision.collided = true;
collision.bodyA = body;
collision.bodyB = body;
collision.parentA = body;
collision.parentB = body;
// @ts-expect-error
collision.depth = 2;
collision.normal = vector;
collision.tangent = vector;
collision.penetration = vector;
collision.supports = [vector];

// Pair
// $ExpectType Pair
const pair = Pair.create(collision, 1);
// $ExpectType void
Pair.update(pair, collision, 2);
// $ExpectType void
Pair.setActive(pair, true, 3);

// Collision with Pair
collision.pair = pair;

// Contact
// $ExpectType Contact
Contact.create(vertex);

// Vertices
// $ExpectType Vertex[]
Vertices.hull([vertex]);

// $ExpectType Collision | null
Collision.collides(body, body, pairs);

// Detector
// $ExpectType Detector
const detector = Detector.create({});
detector.bodies = [body];
detector.pairs = [pair];
detector.pairs = null;

// $ExpectType boolean
Detector.canCollide(filter1, emptyFilter);
Detector.clear(detector);
// $ExpectType Collision[]
Detector.collisions(detector);
Detector.setBodies(detector, [body]);

// SAT
// $ExpectType Collision
collision = SAT.collides(box1, box2);
// $ExpectType Collision
SAT.collides(box3, box4, collision);

// Resolver
// $ExpectType void
Resolver.postSolvePosition([body]);
// $ExpectType void
Resolver.preSolvePosition([pair]);
// $ExpectType void
Resolver.preSolveVelocity([pair]);
// $ExpectType void
Resolver.solvePosition([pair], 1);
// $ExpectType void
Resolver.solveVelocity([pair], 2);
