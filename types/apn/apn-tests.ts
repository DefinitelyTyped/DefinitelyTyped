import apn = require("apn");

//Hand made TypeScript tests
//==========================

//Create with a hex string
var device1 = new apn.Device("ca11ab1e");
//Create with a Buffer
var device2 = new apn.Device(new Buffer("ca55e77e"));

//Create the notification
var notification = new apn.Notification();
notification.alert = {
	title: "The Title",
	body: "This is the body",
};
notification.badge = 5;
//Fluid api
notification.setAlertTitle("The Title")
            .setAlertText("This is the body")
			.setLaunchImage("LaunchImage");

//Establish the connection
var connection = new apn.Connection({
	cert: "path/to/cert.pem",
	key: "path/to/cert.pem"
});
//Testing some specialized event listeners
connection.on("error", (error) => {
	console.log("push error", error.name, error.message);
});
connection.on("transmissionError", (errorCode, notification, device) => {
	console.log("push failed", errorCode, "notification", notification.alert, "device id: ", device.toString());
});

//Send it using hex string
connection.pushNotification(notification, "ba5eba11");
//Send it using Buffer
connection.pushNotification(notification, new Buffer("5ca1ab1e"));
//Send it using Device
connection.pushNotification(notification, device1);

//Connecting to feedback service
var feedbackService = new apn.Feedback({
	cert: "path/to/cert.pem",
	key: "path/to/cert.pem",
	interval: 0
});
feedbackService.on("error", (error:Error) => {
	console.log("push feedback error", error.name, error.message);
});
function processFeedbackData(device:apn.Device, time:number) {
}
feedbackService.on("feedback", (feedbackData) => {
	feedbackData.forEach((data) => {
		processFeedbackData(data.device, data.time);
	})
});
feedbackService.start();


//Original examples from apn package
//==================================

//sending-to-multiple-devices.js
//------------------------------

var tokens = ["<insert token here>", "<insert token here>"];

if(tokens[0] === "<insert token here>") {
	console.log("Please set token to a valid device token for the push notification service");
	process.exit();
}

// Create a connection to the service using mostly default parameters.

var service = new apn.connection({ production: false });

service.on("connected", function() {
    console.log("Connected");
});

service.on("transmitted", function(notification, device) {
    console.log("Notification transmitted to:" + device.token.toString("hex"));
});

service.on("transmissionError", function(errCode, notification, device) {
    console.error("Notification caused error: " + errCode + " for device ", device, notification);
    if (errCode === 8) {
        console.log("A error code of 8 indicates that the device token is invalid. This could be for a number of reasons - are you using the correct environment? i.e. Production vs. Sandbox");
    }
});

service.on("timeout", function () {
    console.log("Connection Timeout");
});

service.on("disconnected", function() {
    console.log("Disconnected from APNS");
});

service.on("socketError", console.error);


// If you plan on sending identical paylods to many devices you can do something like this.
function pushNotificationToMany() {
    console.log("Sending the same notification each of the devices with one call to pushNotification.");
    var note = new apn.notification();
    note.setAlertText("Hello, from node-apn!");
    note.badge = 1;

    service.pushNotification(note, tokens);
}

pushNotificationToMany();


// If you have a list of devices for which you want to send a customised notification you can create one and send it to and individual device.
function pushSomeNotifications() {
    console.log("Sending a tailored notification to %d devices", tokens.length);
    tokens.forEach(function(token, i) {
        var note = new apn.notification();
        note.setAlertText("Hello, from node-apn! You are number: " + i);
        note.badge = i;

        service.pushNotification(note, token);
    });
}

pushSomeNotifications();

//feedback.js
//-----------

function handleFeedback(feedbackData:apn.FeedbackData[]) {
	feedbackData.forEach(function(feedbackItem) {
		console.log("Device: " + feedbackItem.device.toString() + " has been unreachable, since: " + feedbackItem.time);
	});
}

// Setup a connection to the feedback service using a custom interval (10 seconds)
var feedback = new apn.feedback({ production: false, interval: 10 });

feedback.on("feedback", handleFeedback);
feedback.on("feedbackError", console.error);
