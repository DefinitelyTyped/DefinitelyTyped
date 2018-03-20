import ROSLIB = require("roslib");

var ros = new ROSLIB.Ros({
	url: 'ws://localhost:9090'
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
	messageType: 'geometry_msgs/Twist'
});

var twist = new ROSLIB.Message({
	linear: {
		x: 0.1,
		y: 0.2,
		z: 0.3
	},
	angular: {
		x: -0.1,
		y: -0.2,
		z: -0.3
	}
});
cmdVel.publish(twist);

// Subscribing to a Topic
// ----------------------

var listener = new ROSLIB.Topic({
	ros: ros,
	name: '/listener',
	messageType: 'std_msgs/String'
});

let subscription_callback = function (message:ROSLIB.Message) {
	console.log('Received message on ' + listener.name + ': ' + message);
	listener.unsubscribe();
}

listener.subscribe(subscription_callback);
listener.unsubscribe(subscription_callback);

// Calling a service
// -----------------

var addTwoIntsClient = new ROSLIB.Service({
	ros: ros,
	name: '/add_two_ints',
	serviceType: 'rospy_tutorials/AddTwoInts'
});

var request = new ROSLIB.ServiceRequest({
	a: 1,
	b: 2
});

addTwoIntsClient.callService(request, function (result) {
	console.log('Result for service call on '
		+ addTwoIntsClient.name
		+ ': '
		+ result.sum);
});

// Providing a service
// -------------------

var addTwoInts = new ROSLIB.Service({
	ros: ros,
	name: '/add_two_ints',
	serviceType: 'beginner_tutorials/AddTwoInts'
});

addTwoInts.advertise((req, resp) => {
	resp.sum = req.a + req.b
	return true;
});

// Getting and setting a param value
// ---------------------------------

ros.getParams(function (params:string[]) {
	console.log(params);
});

var maxVelX = new ROSLIB.Param({
	ros: ros,
	name: 'max_vel_y'
});

maxVelX.set(0.8);
maxVelX.get(function (value) {
	console.log('MAX VAL: ' + value);
});

// Creating a TF Client
// --------------------
const tfClient = new ROSLIB.TFClient({
    ros: ros,
    fixedFrame: '/world'
})
const tfclient_callback = function (transform: ROSLIB.Transform) {
    console.log('Received transform: ' + transform);
    tfClient.unsubscribe('/transform');
}

tfClient.subscribe('/transform', tfclient_callback);
tfClient.unsubscribe('/transform', tfclient_callback);
