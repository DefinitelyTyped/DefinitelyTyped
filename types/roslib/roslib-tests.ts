import ROSLIB = require('roslib');

var ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090',
});

ros.on('connection', function () {
    console.log('Connected to websocket server.');
});

ros.on('error', function (error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function () {
    console.log('Connection to websocket server closed.');
});

// Publishing a Topic
// ------------------

var cmdVel = new ROSLIB.Topic({
    ros: ros,
    name: '/cmd_vel',
    messageType: 'geometry_msgs/Twist',
});

var twist = new ROSLIB.Message({
    linear: {
        x: 0.1,
        y: 0.2,
        z: 0.3,
    },
    angular: {
        x: -0.1,
        y: -0.2,
        z: -0.3,
    },
});
cmdVel.publish(twist);

// Subscribing to a Topic
// ----------------------

var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/listener',
    messageType: 'std_msgs/String',
});

let subscription_callback = function (message: ROSLIB.Message) {
    console.log('Received message on ' + listener.name + ': ' + message);
    listener.unsubscribe();
};

listener.subscribe(subscription_callback);
listener.unsubscribe(subscription_callback);

// Calling a service
// -----------------

var addTwoIntsClient = new ROSLIB.Service({
    ros: ros,
    name: '/add_two_ints',
    serviceType: 'rospy_tutorials/AddTwoInts',
});

var request = new ROSLIB.ServiceRequest({
    a: 1,
    b: 2,
});

addTwoIntsClient.callService(request, function (result) {
    console.log('Result for service call on ' + addTwoIntsClient.name + ': ' + result.sum);
});

// Providing a service
// -------------------

var addTwoInts = new ROSLIB.Service({
    ros: ros,
    name: '/add_two_ints',
    serviceType: 'beginner_tutorials/AddTwoInts',
});

addTwoInts.advertise((req, resp) => {
    resp.sum = req.a + req.b;
    return true;
});

// Getting and setting a param value
// ---------------------------------

ros.getParams(function (params: string[]) {
    console.log(params);
});

var maxVelX = new ROSLIB.Param({
    ros: ros,
    name: 'max_vel_y',
});

maxVelX.set(0.8);
maxVelX.get(function (value) {
    console.log('MAX VAL: ' + value);
});

// Creating a TF Client
// --------------------
const tfClient = new ROSLIB.TFClient({
    ros: ros,
    fixedFrame: '/world',
});
const tfclient_callback = function (transform: ROSLIB.Transform) {
    console.log('Received transform: ' + transform);
    tfClient.unsubscribe('/transform');
};

tfClient.subscribe('/transform', tfclient_callback);
tfClient.unsubscribe('/transform', tfclient_callback);

new ROSLIB.Pose();
new ROSLIB.Pose(null);
new ROSLIB.Pose({});
new ROSLIB.Pose({ position: null });
new ROSLIB.Pose({ orientation: null });
new ROSLIB.Pose({ position: {} });
new ROSLIB.Pose({ position: { x: 5 } });
new ROSLIB.Pose({ position: { x: null } });
new ROSLIB.Pose({ orientation: {} });
new ROSLIB.Pose({ orientation: { y: -1 } });
new ROSLIB.Pose({ orientation: { y: null } });
const pose = new ROSLIB.Pose({ orientation: { w: 0, x: 0, y: 0, z: 0 }, position: { x: 0, y: 0, z: 0 } });
// $ExpectType Pose
pose.clone();
// $ExpectType Vector3
pose.position;
// $ExpectType Quaternion
pose.orientation;

// URDF
{
    const parser = new DOMParser();
    const document = parser.parseFromString('<actual-xml />', 'text/xml');
    // $ExpectError
    new ROSLIB.UrdfModel({});
    // $ExpectError
    new ROSLIB.UrdfModel();
    new ROSLIB.UrdfModel({ xml: document });
    new ROSLIB.UrdfModel({ xml: document, string: '<actual-xml />' });
    const model = new ROSLIB.UrdfModel({ string: '<actual-xml />' });

    const material: ROSLIB.UrdfMaterial = model.materials[0];

    // $ExpectType string | null
    material.textureFilename;
    // $ExpectType UrdfColor | null
    material.color;
    // $ExpectType string
    material.name;
    // $ExpectType boolean
    material.isLink();

    if (material.color) {
        // $ExpectType number
        material.color.r;
        // $ExpectType number
        material.color.g;
        // $ExpectType number
        material.color.b;
        // $ExpectType number
        material.color.a;
    }

    const link: ROSLIB.UrdfLink = model.links[0];
    // $ExpectType string
    link.name;

    const visual: ROSLIB.UrdfVisual = link.visuals[0];
    // $ExpectType Pose | null
    visual.origin;
    // $ExpectType UrdfMaterial | null
    visual.material;
    switch (visual.geometry?.type) {
        case ROSLIB.URDF_SPHERE:
            // $ExpectType number
            visual.geometry.radius;
            // $ExpectError
            visual.geometry.dimension;
            break;
        case ROSLIB.URDF_BOX:
            // $ExpectType Vector3
            visual.geometry.dimension;
            break;
        case ROSLIB.URDF_CYLINDER:
            // $ExpectType number
            visual.geometry.length;
            // $ExpectType number
            visual.geometry.radius;
            break;
        case ROSLIB.URDF_MESH:
            // $ExpectType string
            visual.geometry.filename;
            // $ExpectType Vector3 | null
            visual.geometry.scale;
            // $ExpectError
            visual.geometry.length;
            break;
    }
    // $ExpectError
    visual.geometry?.radius;

    const joint: ROSLIB.UrdfJoint = model.joints[0];
    // $ExpectType string
    joint.name;
    // $ExpectType string
    joint.type;
    // $ExpectType string | null
    joint.parent;
    // $ExpectType string | null
    joint.child;
    // $ExpectType number | null
    joint.minval;
    // $ExpectType number | null
    joint.maxval;
}
