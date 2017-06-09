

function test() {
	let options: PhonegapPluginPush.InitOptions = {
		android: {
			senderID: '123456789',
			icon: 'phonegap',
			iconColor: 'blue',
			sound: true,
			vibrate: true,
			clearNotifications: false,
			forceShow: true,
			topics: ['foo', 'bar']
		},
		ios: {
			badge: true,
			sound: true,
			alert: true,
			clearBadge: true,
			senderID: '123456789',
			gcmSandbox: true,
			categories: {
				"invite": {
					yes: {
						callback: "app.accept", title: "Accept", foreground: true, destructive: false
					},
					no: {
						callback: "app.reject", title: "Reject", foreground: true, destructive: false
					},
					maybe: {
						callback: "app.maybe", title: "Maybe", foreground: true, destructive: false
					}
				},
				"delete": {
					yes: {
						callback: "app.doDelete", title: "Delete", foreground: true, destructive: true
					},
					no: {
						callback: "app.cancel", title: "Cancel", foreground: true, destructive: false
					}
				}
			},
			topics: ['foo', 'bar']
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

	push.unregister(() => {
		console.log('did unregister');
	}, () => {
		console.log('did not unregister');
	}, ['foo','bar']);

	/*from init*/
	push = PushNotification.init(options);
	push = window.PushNotification.init(options);
	
	/*hasPermission test*/
	PushNotification.hasPermission(function(data) {
		if (data.isEnabled) {
			console.log('isEnabled');
		}
	});

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
		console.log(data.additionalData.coldstart);

		push.finish(() => {
			console.log('did finish');
		}, () => {
			console.log('did not finish');
		}, 'push-1');
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
