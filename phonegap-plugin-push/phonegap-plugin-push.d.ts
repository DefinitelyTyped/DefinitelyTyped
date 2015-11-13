// Type definitions for phonegap-plugin-push
// Project: https://github.com/phonegap/phonegap-plugin-push
// Definitions by: Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module PhonegapPluginPush {
	type EventResponse = RegistrationEventResponse | NotificationEventResponse | Error

	interface PushNotification {
		/**
		 * The event registration will be triggered on each successful registration with the 3rd party push service.
		 * @param event
		 * @param callback
		 */
		on(event:"registration", callback:(response:RegistrationEventResponse)=>any):void
		/**
		 * The event notification will be triggered each time a push notification is received by a 3rd party push service on the device.
		 * @param event
		 * @param callback
		 */
		on(event:"notification", callback:(response:NotificationEventResponse)=>any):void
		/**
		 * The event error will trigger when an internal error occurs and the cache is aborted.
		 * @param event
		 * @param callback
		 */
		on(event:"error", callback:(response:Error)=>any):void
		/*Generic one, needed for the overloads*/
		/**
		 *
		 * @param event Name of the event to listen to. See below(above) for all the event names.
		 * @param callback is called when the event is triggered.
		 */
		on(event:string, callback:(response:EventResponse)=>any):void

		/**
		 * The unregister method is used when the application no longer wants to receive push notifications.
		 * @param successHandler
		 * @param errorHandler
		 */
		unregister(successHandler:()=>any, errorHandler?:()=>any):void
		/*TODO according to js source code, "errorHandler" is optional, but is "count" also optional? I can't read objetive-C code (can anyone at all? I wonder...)*/
		/**
		 * Set the badge count visible when the app is not running
		 *
		 * The count is an integer indicating what number should show up in the badge. Passing 0 will clear the badge. Each notification event contains a data.count value which can be used to set the badge to correct number.
		 * @param successHandler
		 * @param errorHandler
		 * @param count
		 */
		setApplicationIconBadgeNumber(successHandler:()=>any, errorHandler:()=>any, count:number):void
	}

	/**
	 * platform specific initialization options.
	 */
	interface InitOptions {
		/**
		 * Android specific initialization options.
		 */
		android?: {
			/**
			 * Maps to the project number in the Google Developer Console.
			 */
			senderID:string
			/**
			 * The name of a drawable resource to use as the small-icon.
			 */
			icon?:string
			/**
			 * Sets the background color of the small icon.
			 * Supported Formats - http://developer.android.com/reference/android/graphics/Color.html#parseColor(java.lang.String)
			 */
			iconColor?:string
			/**
			 * If true it plays the sound specified in the push data or the default system sound. Default is true.
			 */
			sound?:boolean
			/**
			 * If true the device vibrates on receipt of notification. Default is true.
			 */
			vibrate?:boolean
			/**
			 * If true the app clears all pending notifications when it is closed. Default is true.
			 */
			clearNotifications?:boolean
		}

		/**
		 * iOS specific initialization options.
		 */
		ios?: {
			/**
			 * If true the device shows an alert on receipt of notification. Default is false.
			 */
			badge?: boolean
			/**
			 * If true the device sets the badge number on receipt of notification. Default is false.
			 */
			sound?: boolean
			/**
			 * If true the device plays a sound on receipt of notification. Default is false.
			 */
			alert?: boolean
		}

		/**
		 * Windows specific initialization options.
		 */
		windows?: {

		}
	}

	interface RegistrationEventResponse {
		/**
		 * The registration ID provided by the 3rd party remote push service.
		 */
		registrationId:string
	}

	interface NotificationEventResponse {
		/**
		 * The text of the push message sent from the 3rd party service.
		 */
		message:string
		/**
		 * The optional title of the push message sent from the 3rd party service.
		 */
		title?:string
		/**
		 * The number of messages to be displayed in the badge iOS or message count in the notification shade in Android.
		 * For windows, it represents the value in the badge notification which could be a number or a status glyph.
		 */
		count:string
		/**
		 * The name of the sound file to be played upon receipt of the notification.
		 */
		sound:string
		/**
		 * The path of the image file to be displayed in the notification.
		 */
		image:string
		/**
		 * An optional collection of data sent by the 3rd party push service that does not fit in the above properties.
		 */
		additionalData: NotificationEventAdditionalData
	}

	interface NotificationEventAdditionalData {
		/**
		 * TODO: document all possible properties (I only got the android ones)
		 *
		 * Loosened up with a dictionary notation, but all non-defined properties need to use (map['prop']) notation
		 *
		 * Ideally the developer would overload (merged declaration) this or create a new interface that would extend this one
		 * so that he could specify any custom code without having to use array notation (map['prop']) for all of them.
		 */
		[name: string]: any
		/**
		 * Whether the notification was received while the app was in the foreground
		 */
		foreground?:boolean
		collapse_key?:string
		from?:string
		notId?:string
	}

	interface PushNotificationStatic {
		init(options:InitOptions):PushNotification
		new(options:InitOptions):PushNotification
	}
}

interface Window {
	PushNotification:PhonegapPluginPush.PushNotificationStatic
}
declare var PushNotification:PhonegapPluginPush.PushNotificationStatic;
