/// <reference path="phonegap-plugin-push.d.ts" />

function test() {
	var options:PhonegapPluginPush.InitOptions = {
		android: {
			senderID: '123456789',
			icon: 'phonegap',
			iconColor: 'blue',
			sound: true,
			vibrate: true,
			clearNotifications: false
		},
		ios: {
			badge: true,
			sound: true,
			alert: true
		},
		windows: {}
	};
	var push:PhonegapPluginPush.PushNotification;

	/*from constructor*/
	push = new PushNotification(options);

	push.unregister(() => {
		console.log('did unregister');
	}, () => {
		console.log('did not unregister');
	});

	/*from init*/
	push = PushNotification.init(options);

	push.on('registration', (data:PhonegapPluginPush.RegistrationEventResponse) => {
		console.log(data.registrationId);
	});

	push.on('notification', (data:PhonegapPluginPush.NotificationEventResponse) => {
		console.log(data.message);
		console.log(data.title);
		console.log(data.count);
		console.log(data.sound);
		console.log(data.image);

		/*the rest of the additional fields are not 'canon'*/
		console.log(data.additionalData);
		console.log(data.additionalData.foreground);
	});

	push.on('error', (e:Error) => {
		console.log(e.message);
	});

	push.setApplicationIconBadgeNumber(() => {
		console.log('did setApplicationIconBadgeNumber');
	}, () => {
		console.log('did not setApplicationIconBadgeNumber');
	}, 1);
}
