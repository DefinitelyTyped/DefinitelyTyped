/// <reference path="roslib.d.ts" />

var ros = new ROSLIB.Ros({url: "http://localhost:9090"});

ros.on('error', function(event) {
	//do nothing
});

var service = new ROSLIB.Service({
	ros: ros,
	name: '/service_name',
	serviceType: 'service_type'
});
