/// <reference path="ammo.d.ts"/>

// From https://github.com/kripken/ammo.js/blob/master/examples/webgl_demo/worker.js
var Module = { TOTAL_MEMORY: 256*1024*1024 };

var NUM = 0, NUMRANGE = [];

// Bullet-interfacing code

var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
var overlappingPairCache = new Ammo.btDbvtBroadphase();
var solver = new Ammo.btSequentialImpulseConstraintSolver();
var dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
dynamicsWorld.setGravity(new Ammo.btVector3(0, -10, 0));

var groundShape = new Ammo.btBoxShape(new Ammo.btVector3(50, 50, 50));

var bodies = [];

var groundTransform = new Ammo.btTransform();
groundTransform.setIdentity();
groundTransform.setOrigin(new Ammo.btVector3(0, -56, 0));

(function() {
    var mass = 0;
    var localInertia = new Ammo.btVector3(0, 0, 0);
    var myMotionState = new Ammo.btDefaultMotionState(groundTransform);
    var rbInfo = new Ammo.btRigidBodyConstructionInfo(0, myMotionState, groundShape, localInertia);
    var body = new Ammo.btRigidBody(rbInfo);

    dynamicsWorld.addRigidBody(body);
    bodies.push(body);
})();

var boxShape = new Ammo.btBoxShape(new Ammo.btVector3(1, 1, 1));

function resetPositions() {
    var side = Math.ceil(Math.pow(NUM, 1/3));
    var i = 1;
    for (var x = 0; x < side; x++) {
        for (var y = 0; y < side; y++) {
            for (var z = 0; z < side; z++) {
                if (i == bodies.length) break;
                var body = bodies[i++];
                var origin = body.getWorldTransform().getOrigin();
                origin.setX((x - side/2)*(2.2 + Math.random()));
                origin.setY(y * (3 + Math.random()));
                origin.setZ((z - side/2)*(2.2 + Math.random()) - side - 3);
                body.activate(true);
                var rotation = body.getWorldTransform().getRotation();
                rotation.setX(1);
                rotation.setY(0);
                rotation.setZ(0);
                rotation.setW(1);
            }
        }
    }
}

function startUp() {
    NUMRANGE.forEach(function(i) {
        var startTransform = new Ammo.btTransform();
        startTransform.setIdentity();
        var mass = 1;
        var localInertia = new Ammo.btVector3(0, 0, 0);
        boxShape.calculateLocalInertia(mass, localInertia);

        var myMotionState = new Ammo.btDefaultMotionState(startTransform);
        var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, myMotionState, boxShape, localInertia);
        var body = new Ammo.btRigidBody(rbInfo);

        dynamicsWorld.addRigidBody(body);
        bodies.push(body);
    });

    resetPositions();
}

var transform = new Ammo.btTransform(); // taking this out of readBulletObject reduces the leaking

function readBulletObject(i, object) {
    var body = bodies[i];
    body.getMotionState().getWorldTransform(transform);
    var origin = transform.getOrigin();
    object[0] = origin.x();
    object[1] = origin.y();
    object[2] = origin.z();
    var rotation = transform.getRotation();
    object[3] = rotation.x();
    object[4] = rotation.y();
    object[5] = rotation.z();
    object[6] = rotation.w();
}

var nextTimeToRestart = 0;
function timeToRestart() { // restart if at least one is inactive - the scene is starting to get boring
    if (nextTimeToRestart) {
        if (Date.now() >= nextTimeToRestart) {
            nextTimeToRestart = 0;
            return true;
        }
        return false;
    }
    for (var i = 1; i <= NUM; i++) {
        var body = bodies[i];
        if (!body.isActive()) {
            nextTimeToRestart = Date.now() + 1000; // add another second after first is inactive
            break;
        }
    }
    return false;
}

var meanDt = 0, meanDt2 = 0, frame = 1;

function simulate(dt) {
    dt = dt || 1;

    dynamicsWorld.stepSimulation(dt, 2);

    var alpha;
    if (meanDt > 0) {
        alpha = Math.min(0.1, dt/1000);
    } else {
        alpha = 0.1; // first run
    }
    meanDt = alpha*dt + (1-alpha)*meanDt;

    var alpha2 = 1/frame++;
    meanDt2 = alpha2*dt + (1-alpha2)*meanDt2;

    var data = { objects: [], currFPS: Math.round(1000/meanDt), allFPS: Math.round(1000/meanDt2) };

    // Read bullet data into JS objects
    for (var i = 0; i < NUM; i++) {
        var object = [];
        readBulletObject(i+1, object);
        data.objects[i] = object;
    }

    if (timeToRestart()) resetPositions();
}

function localCreateRigidBody(mass, startTransform, shape, options?:any){
    if((!shape || shape.getShapeType() == this.INVALID_SHAPE_PROXYTYPE))
        return null;

    // rigidbody is dynamic if and only if mass is non zero, otherwise static
    var isDynamic = (mass != 0.0);

    var localInertia = new Ammo.btVector3(0,0,0);
    if(isDynamic)
        shape.calculateLocalInertia(mass,localInertia);

    var myMotionState = new Ammo.btDefaultMotionState(startTransform);
    var cInfo = new Ammo.btRigidBodyConstructionInfo(mass,myMotionState,shape,localInertia);
    var body = new Ammo.btRigidBody(cInfo);
    body.setLinearVelocity(new Ammo.btVector3(0,0,0));
    body.setAngularVelocity(new Ammo.btVector3(0,0,0));
    body.setContactProcessingThreshold(5);
    dynamicsWorld.addRigidBody(body);
    return body;
};

// From http://schteppe.github.io/ammo.js-demos/demos/BoxDemo/BoxDemo.js

// Bullet-interfacing code
var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
var overlappingPairCache = new Ammo.btDbvtBroadphase();
//var overlappingPairCache = new Ammo.btAxisSweep3(new Ammo.btVector3(-10,-10,-10),new Ammo.btVector3(10,10,10));
var solver = new Ammo.btSequentialImpulseConstraintSolver();
dynamicsWorld.setGravity(new Ammo.btVector3(0, -9.82, 0));

// Create ground
var groundShape = new Ammo.btBoxShape(new Ammo.btVector3(6, 0.5, 6));
var groundTransform = new Ammo.btTransform();
groundTransform.setIdentity();
groundTransform.setOrigin(new Ammo.btVector3(0, -1.0, 0));
var ground = localCreateRigidBody(0, groundTransform, groundShape);

// Create infinite ground plane
var aabbShape = new Ammo.btStaticPlaneShape(new Ammo.btVector3(0, 1, 0), -1.5);
var aabbTransform = new Ammo.btTransform();
aabbTransform.setIdentity();
this.localCreateRigidBody(0, aabbTransform, aabbShape);

// Create smaller boxes
var s = 1;
var boxShape = new Ammo.btBoxShape(new Ammo.btVector3(s*0.5, s*0.5, s*0.5));
var boxTransform = new Ammo.btTransform();
var Nsqrt = 5;
for(var j=0; j<Nsqrt; j++){
    for(var i=0; i<Nsqrt; i++){
        boxTransform.setIdentity();
        boxTransform.setOrigin(new Ammo.btVector3(s*j-(Nsqrt-1)*s*0.5, s*i, 0));
        localCreateRigidBody(1, boxTransform, boxShape);
    }
}
