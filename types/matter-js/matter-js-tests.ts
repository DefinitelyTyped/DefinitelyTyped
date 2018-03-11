import Matter = require("matter-js");
var Engine = Matter.Engine, 
	World = Matter.World,
	Body = Matter.Body,
	Bodies = Matter.Bodies,
	Composites = Matter.Composites,
	Constraint = Matter.Constraint,
	Events = Matter.Events,
	Query = Matter.Query,
    Plugin = Matter.Plugin;
    

Matter.use('matter-attractors');
Plugin.use(Matter, ["matter-wrap"]);

var engine = Engine.create();

//Bodies
var box1 = Bodies.rectangle(400,200,80,80);
var box2 = Bodies.rectangle(400,610,810,60, {
	angle: 10,
	angularSpeed: 11,
	angularVelocity: 1,
	density: 4,
	isStatic: true
});

var circle1 = Bodies.circle(100,100,50);

World.addBody(engine.world, box1);
World.add(engine.world, [box2, circle1]);


//Composites
var stack = Composites.stack(0, 100, 5, 1, 20, 0, function(x:number, y:number, column:number, row:number) {
            return Bodies.circle(x, y, 75, { restitution: 0.9 });
        });
        
World.add(engine.world, stack);
 
//Constraints
var constraint1 = Constraint.create({
	bodyA: box1,
	bodyB: box2,
	stiffness: 0.02
});

//Query 
var collisions = Query.ray([box1, box2, circle1], {x:1, y:2}, {x:3, y:4});

World.addConstraint(engine.world, constraint1);


//events
Events.on(engine, "beforeTick", (e:Matter.IEventTimestamped<Matter.Engine>)=>{

});


Engine.run(engine);
