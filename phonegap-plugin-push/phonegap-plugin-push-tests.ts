/// <reference path="phonegap-plugin-push.d.ts" />

function test() {
	let options: PhonegapPluginPush.InitOptions = {
		android: {
			senderID: '123456789',
			icon: 'phonegap',
			iconColor: 'blue',
			sound: true,
			vibrate: true,
			clearNotifications: false,
			forceShow: true
		},
		ios: {
			badge: true,
			sound: true,
			alert: true,
			clearBadge: true
		},
		windows: {}
	};

	let iosStringOptions = {
		badge: 'true',
		sound: 'true',
		alert: 'true',
		clearBadge: 'true'
	};

	options.ios = iosStringOptions;

	let push: PhonegapPluginPush.PushNotification;

	/*from constructor*/
	push = new PushNotification(options);
	push = new window.PushNotification(options);

	push.unregister(() => {
		console.log('did unregister');
	}, () => {
		console.log('did not unregister');
	});

	/*from init*/
	push = PushNotification.init(options);
	push = window.PushNotification.init(options);

	let registrationHandler = (data: PhonegapPluginPush.RegistrationEventResponse) => {
		console.log(data.registrationId);
	};

	let notificationHandler = (data: PhonegapPluginPush.NotificationEventResponse) => {
		console.log(data.message);
		console.log(data.title);
		console.log(data.count);
		console.log(data.sound);
		console.log(data.image);

		/*the rest of the additional fields are not 'canon'*/
		console.log(data.additionalData);
		console.log(data.additionalData.foreground);

		push.finish(() => {
			console.log('did finish');
		}, () => {
			console.log('did not finish');
		});
	};

	let errorHandler = (e: Error) => {
		console.log(e.message);
	};

	push.on('registration', registrationHandler);
	push.on('notification', notificationHandler);
	push.on('error', errorHandler);

	push.off('registration', registrationHandler);
	push.off('notification', notificationHandler);
	push.off('error', errorHandler);

	push.setApplicationIconBadgeNumber(() => {
		console.log('did setApplicationIconBadgeNumber');
	}, () => {
		console.log('did not setApplicationIconBadgeNumber');
	}, 1);

	push.getApplicationIconBadgeNumber((count: number) => {
		console.log('did getApplicationIconBadgeNumber', count);
	}, () => {
		console.log('did not getApplicationIconBadgeNumber');
	});
}
