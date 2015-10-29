// Type definitions for VoxImplant Web SDK 3.0.x 
// Project: http://voximplant.com/
// Definitions by: Alexey Aylarov <https://github.com/aylarov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare namespace VoxImplant {	

	module Events {

		/**
		*	Event dispatched after login , loginWithOneTimeKey, requestOneTimeLoginKey or loginWithCode function call
		*/
		interface AuthEvent {
			/**
			*	Auth error code, possible values are: 301 - code for 'code' auth type was sent, 302 - key for 'onetimekey' auth type received, 401 - invalid password, 404 - invalid username, 403 - user account is frozen, 500 - internal error
			*/
			code? : number;
			/**
			*	Authorized user's display name
			*/
			displayName?: string;
			/**
			*	This parameter is used to calculate hash parameter for loginWithOneTimeKey method. AuthEvent with the key dispatched after requestOneTimeLoginKey method was called
			*/
			key?: string;
			/**
			*	Application options
			*/
			options?: Object;
			/**
			*	True in case of successful authorization, false - otherwise
			*/
			result: boolean;
		}

		/**
		*	Event dispatched if connection to VoxImplant Cloud was closed because of network problems. See connect function
		*/
		interface ConnectionClosed {}

		/**
		*	Event dispatched after connection to VoxImplant Cloud was established successfully. See connect function
		*/
		interface ConnectionEstablished {}

		/**
		*	Event dispatched if connection to VoxImplant Cloud couldn't be established. See connect function
		*/
		interface ConnectionFailed {
			/**
			*	Failure reason description
			*/
			message: string;
		}

		/**
		*	Event dispatched in case of instant messaging subsystem error
		*/
		interface IMError {
			/**
			*	Error data object, contains the error details
			*/
			errorData: Object;
			/**
			*	Error type
			*/
			errorType: IMErrorType;
		}

		/**
		*	Event dispatched when there is a new incoming call to current user
		*/
		interface IncomingCall {
			/**
			*	Incoming call instance. See VoxImplant.Call for details
			*/
			call: Call;
			/**
			*	Optional SIP headers received with the message
			*/
			headers?: Object;
		}

		/**
		*	Event dispatched after user interaction with the mic access dialog.
		*/
		interface MicAccessResult {
			/**
			*	True is access was allowed, false - otherwise
			*/
			result: boolean;
		}

		/**
		*	Event dispatched when packet loss data received from VoxImplant servers
		*/
		interface NetStatsReceived {
			/**
			*	Network info object
			*/
			stats: NetworkInfo;
		}

		/**
		*	Event dispatched after sound playback was stopped. See playToneScript and stopPlayback functions
		*/
		interface PlaybackFinished {}

		/**
		*	Event dispatched after SDK was successfully initialized after init function call
		*/
		interface SDKReady {
			/**
			*	SDK version
			*/
			version: string;
		}

		/**
		*	Event dispatched when audio and video sources information was updated. See audioSources and videoSources for details
		*/
		interface SourcesInfoUpdated {}

	}

	module CallEvents {

		/**
		*	Event dispatched after call was connected
		*/
		interface Connected {
			/**
			*	Call that dispatched the event
			*/
			call: Call;
			/**
			*	Optional SIP headers received with the message
			*/
			headers?: Object;
		}
		
		/**
		*	Event dispatched after call was disconnected
		*/
		interface Disconnected {
			/**
			*	Call that dispatched the event
			*/
			call: Call;
			/**
			*	Optional SIP headers received with the message
			*/
			headers?: Object;
		}

		/**
		*	Event dispatched after if call failed
		*/
		interface Failed {
			/**
			*	Call that dispatched the event
			*/
			call: Call;
			/**
			*	Status code of the call (i.e. 486)
			*/
			code: number;
			/**
			*	Optional SIP headers received with the message
			*/
			headers?: Object;
			/**
			*	Status message of call failure (i.e. Busy Here)
			*/
			reason: string;
		}

		/**
		*	Event dispatched when INFO message is received
		*/
		interface InfoReceived {
			/**
			*	Content of the message
			*/
			body: string;
			/**
			*	Call that dispatched the event
			*/
			call: Call;
			/**
			*	Optional SIP headers received with the message
			*/
			headers?: Object;
			/**
			*	MIME type of INFO message
			*/
			mimeType: string;
		}

		/**
		*	Event dispatched when text message is received
		*/
		interface MessageReceived {
			/**
			*	Call that dispatched the event
			*/
			call: Call;
			/**
			*	Content of the message
			*/
			text: string;
		}

		/**
		*	Event dispatched when progress tone playback starts
		*/
		interface ProgressToneStart {
			/**
			*	Call that dispatched the event
			*/
			call: Call;
		}

		/**
		*	Event dispatched when progress tone playback stops
		*/
		interface ProgressToneStop {
			/**
			*	Call that dispatched the event
			*/
			call: Call;
		}

		/**
		*	Event dispatched when call has been transferred successfully
		*/
		interface TransferComplete {
			/**
			*	Call that dispatched the event
			*/
			call: Call;
		}

		/**
		*	Event dispatched when call transfer failed
		*/
		interface TransferFailed {
			/**
			*	Call that dispatched the event
			*/
			call: Call;
		}
	}

	module IMEvents {

		/**
		*	Event dispatched when chat session state updated
		*/
		interface ChatStateUpdate {
			/**
			*	User id
			*/
			id: string,
			/**
			*	Resource name
			*/
			resource?: string,
			/**
			*	Current chat session state. See VoxImplant.ChatStateType enum
			*/
			state: ChatStateType
		}

		/**
		*	Event dispatched when instant message received
		*/
		interface MessageReceived {
			/**
			*	Message content
			*/
			content: string,
			/**
			*	User id
			*/
			id: string,
			/**
			*	Message id
			*/
			message_id: string,
			/**
			*	Resource name
			*/
			resource?: string
		}

		/**
		*	Event dispatched when sent message status changed
		*/
		interface MessageStatus {
			/**
			*	User id
			*/
			id: string,
			/**
			*	Message id
			*/
			message_id: string,
			/**
			*	Resource name
			*/
			resource?: string,
			/**
			*	Message event type. See VoxImplant.MessageEventType enum
			*/
			type: MessageEventType
		}

		/**
		*	Event dispatched when self presence updated
		*/
		interface PresenceUpdate {
			/**
			* User id
			*/
			id: string,
			/**
			*	Status message
			*/
			message: string,
			/**
			*	Current presence status
			*/
			presence: UserStatuses,
			/**
			*	Resource name
			*/
			resource?: string
		}

		/**
		*	Event dispatched when roster item changed
		*/
		interface RosterItemChange {
			/**
			*	User display name
			*/
			displayName: string,
			/**
			*	User id
			*/
			id: string,
			/**
			*	Resource name
			*/
			resource?: string,
			/**
			*	Roster item event type. See VoxImplant.RosterItemEvent enum
			*/
			type: RosterItemEvent
		}

		/**
		*	Event dispatched when roster item presence update happened
		*/
		interface RosterPresenceUpdate {
			/**
			*	User id
			*/
			id: string,
			/**
			*	Status message
			*/
			message?: string,
			/**
			*	Current presence status
			*/
			presence: UserStatuses,
			/**
			*	Resource name
			*/
			resource?: string
		}

		/**
		*	Event dispatched when roster data received
		*/
		interface RosterReceived {
			/**
			*	User id
			*/
			id: string,
			/**
			*	Array contains VoxImplant.RosterItem elements
			*/
			roster: RosterItem[]
		}

		/**
		*	Event dispatched when some user tries to add current user into his roster. Current user can confirm or reject the subscription, then VoxImplant.IMEvents.RosterItemChange will be dispatched on for user that made the request
		*/
		interface SubscriptionRequest {
			/**
			*	User id
			*/
			id: string,
			/**
			*	Optional message
			*/
			message?: string,
			/**
			*	Resource name
			*/
			resource?: string,
			/**
			*	Message event type. See VoxImplant.SubscriptionRequestType enum
			*/
			type: SubscriptionRequestType
		}

	}

	type VoxImplantEvent = Events.AuthEvent | Events.ConnectionClosed | Events.ConnectionEstablished |
		Events.ConnectionFailed | Events.IMError | Events.IncomingCall | Events.MicAccessResult | 
		Events.NetStatsReceived | Events.PlaybackFinished | Events.SDKReady | Events.SourcesInfoUpdated;


	type VoxImplantCallEvent = CallEvents.Connected | CallEvents.Disconnected | CallEvents.Failed |
		CallEvents.InfoReceived | CallEvents.MessageReceived | CallEvents.ProgressToneStart |
		CallEvents.ProgressToneStop | CallEvents.TransferComplete | CallEvents.TransferFailed;

	type VoxImplantIMEvent = IMEvents.ChatStateUpdate | IMEvents.MessageReceived | IMEvents.MessageStatus |
		IMEvents.PresenceUpdate | IMEvents.RosterItemChange | IMEvents.RosterPresenceUpdate |
		IMEvents.RosterReceived | IMEvents.SubscriptionRequest;

	/**
	*	VoxImplant SDK Configuration
	*/
	interface Config {
		/**
		*	XSS protection for inbound instant messages that can contain HTML content
		*/
		imXSSprotection?: boolean;
		/**
		*	If set to true microphone access dialog will be shown and all functions will become available only after user allowed access
		*/
		micRequired?: boolean;
		/**
		*	Automatically plays progress tone by means of SDK according to specified progressToneCountry
		*/
		progressTone?: boolean;
		/**
		*	Country code for progress tone generated automatically if progressTone set to true
		*/
		progressToneCountry?: string;
		/**
		*	Show debug info in console
		*/
		showDebugInfo?: boolean;
		/**
		*	Show Flash Settings panel instead of standard Allow/Deny dialog (in Flash mode)
		*/
		showFlashSettings?: boolean;
		/**
		*	Id of HTMLElement that will be used as container for Flash component of SDK (Mic/cam access dialog will appear in the container). If micRequired set to true element should have size not less than 215x138 (px) for access dialog to be shown
		*/
		swfContainer?: string;
		/**
		*	Force VoxImplant to use Flash (WebRTC is used if available by default)
		*/
		useFlashOnly?: boolean;
		/**
		*	Force VoxImplant to use WebRTC (WebRTC is used if available by default). Error will be thrown if WebRTC in unavailable
		*/
		useRTCOnly?: boolean;
		/**
		*	Default constraints that will be applied while the next attachRecordingDevice function call or if micRequired set to true
		*/
		videoConstraints?: VideoSettings;
		/**
		*	Video support
		*/
		videoSupport?: boolean;
	}

	/**
	*	VoxImplant login options
	*/
	interface LoginOptions {
		/**
		*	If set to false Web SDK can be used only for ACD status management
		*/
		receiveCalls?: boolean;
		/**
		*	If set to true user presence will be changed automatically while a call
		*/
		serverPresenceControl?: boolean;
	}

	/**
	*	Audio recording device info
	*/
	interface AudioSourceInfo {
		/**
		*	Device id that can be used to choose audio recording device
		*/
		id: number | string;
		/**
		*	Device name , in WebRTC mode populated with real data only when app has been opened using HTTPS protocol
		*/
		name: string;
	}

	/**
	*	Video recording device info
	*/
	interface VideoSourceInfo {
		/**
		*	Device id that can be used to choose video recording device
		*/
		id: number | string;
		/**
		*	Device name , in WebRTC mode populated with real data only when app has been opened using HTTPS protocol
		*/
		name: string;
	}

	enum ChatStateType {
		/** 
		*	User is actively participating in the chat session 
		*/
		Active,
		/** 
		*	User is composing a message
		*/
		Composing,
		/** 
		*	User has effectively ended their participation in the chat session
		*/
		Gone,
		/** 
		*	User has not been actively participating in the chat session
		*/
		Inactive,
		/** 
		*	Invalid type
		*/
		Invalid,
		/**
		*	User had been composing but now has stopped
		*/
		Paused
	}

	enum IMErrorType {
		RemoteFunctionError,
		Error,
		RosterError
	}

	enum MessageEventType {
		/**
		*	Cancels the 'Composing' event
		*/
		Cancel,
		/**
		*	Indicates that a reply is being composed
		*/
		Composing,
		/**
		*	Indicates that the message has been delivered to the recipient
		*/
		Delivered,
		/**
		*	Indicates that the message has been displayed
		*/
		Displayed,
		/**
		*	Invalid type
		*/
		Invalid,
		/**
		*	Indicates that the message has been stored offline by the intended recipient's server
		*/
		Offline
	}

	enum OperatorACDStatuses {
		AfterService,
		DND,
		InService,
		Offline,
		Online,
		Ready,
		Timeout
	}

	enum RosterItemEvent {
		/**
		*	Roster item added
		*/
		Added,
		/**
		*	Roster item removed
		*/
		Removed,
		/**
		*	User subscribed on your status updates (authorized the request)
		*/
		Subscribed,
		/**
		*	User unsubscribed from your status updates (didn't authorize the request)
		*/
		Unsubscribed,
		/**
		*	Roster item updated
		*/
		Updated
	}

	enum SubscriptionRequestType {
		/**
		*	User is asking for permission to add you into his roster
		*/
		Subscribe,
		/**
		*	User removed you from his roster
		*/
		Unsubscribe
	}

	enum UserStatuses {
		/**
		*	User is away
		*/
		Away,
		/**
		*	User is available for chat
		*/
		Chat,
		/**
		*	User is in DND state (Do Not Disturbed)
		*/
		DND,
		/**
		*	User is offline
		*/
		Offline,
		/**
		*	User is online
		*/
		Online,
		/**
		*	User is in XA state (eXtended Away)
		*/
		XA
	}

	/**
	*	Client class used to control platform functions. Can't be instantiatied directly (singleton), please use VoxImplant.getInstance to get the class instance
	*/
	interface Client {
		/**
		*	Register handler for specified event
		*
		*	@param eventName Event name
		*	@param eventHandler Handler function. A single parameter is passed - object with the event information
		*/
		addEventListener(eventName: string, eventHandler: (eventObject: VoxImplantEvent | VoxImplantIMEvent) => any): void;
		/**
		*	Add roster item (IM)
		*
		*	@param user_id User id
		*	@param name Display name
		*	@param group User group
		*/
		addRosterItem(user_id: string, name: string, group?: string): void;
		/**
		*	Add roster item group (IM)
		*
		*	@param user_id User id
		*	@param group Group name
		*/
		addRosterItemGroup(user_id: string, group: string): void;
		/**
		*	Enable microphone/camera if micRequired in VoxImplant.Config was set to false (WebRTC mode only)
		*
		*	@param successCallback A function called in case of successful audio recording device change
		*	@param failedCallback A function called in case of problems while changing audio recording device
		*/
		attachRecordingDevice(successCallback?: () => any, failedCallback?: () => any): void;
		/**
		*	Get a list of all currently available audio sources / microphones
		*/
		audioSources(): AudioSourceInfo[];
		/**
		*	Create call
		*
		*	@param number The number to call
		*	@param useVideo Tells if video should be supported for the call
		*	@param customData Custom string associated with the call session. It can be later obtained from Call History using HTTP API
		*	@param extraHeaders Optional custom parameters (SIP headers) that should be passed with call (INVITE) message. Parameter names must start with "X-" to be processed by application. IMPORTANT: Headers size limit is 200 bytes
		*/
		call(number: string, useVideo?: boolean, customData?: string, extraHeaders?: Object): Call;
		/**
		*	Get current config
		*/
		config(): Config;
		/**
		*	Connect to VoxImplant Cloud
		*/
		connect(): void;
		/**
		*	Check if connected to VoxImplant Cloud
		*/
		connected(): boolean;
		/**
		*	Disable microphone/camera if micRequired in VoxImplant.Config was set to false (WebRTC mode only)
		*/
		detachRecordingDevice(): void;
		/**
		*	Disconnect from VoxImplant Cloud
		*/
		disconnect(): void;
		/**
		*	Initialize SDK. SDKReady event will be dispatched after succesful SDK initialization. SDK can't be used until it's initialized
		*
		*	@param config Client configuration options
		*/
		init(config?: Config): void;
		/**
		*	Check if WebRTC support is available
		*/
		isRTCsupported(): boolean;
		/**
		*	Login into application
		*
		*	@param username 
		*	@param password
		*	@param options Login options 
		*/
		login(username: string, password: string, options?: LoginOptions): void;
		/**
		*	Login into application using 'code' auth method
		*
		*	@param username 
		*	@param code
		*	@param options Login options 
		*/
		loginWithCode(username: string, code: string, options?: LoginOptions): void;
		/**
		*	Login into application using 'onetimekey' auth method
		*
		*	@param username 
		*	@param hash
		*	@param options Login options 
		*/
		loginWithOneTimeKey(username: string, hash: string, options?: LoginOptions): void;
		/**
		*	Move roster item group (IM)
		*
		*	@param user_id User id
		*	@param groupSrc Group name (source)
		*	@param groupDst Group name (destination)
		*/
		moveRosterItemGroup(user_id: string, groupSrc: string, groupDst: string): void;
		/**
		*	Play ToneScript using WebAudio API
		*
		*	@param script Tonescript string
		*	@param loop Loop playback if true
		*/
		playToneScript(script: string, loop?: boolean): void;
		/**
		*	Remove handler for specified event
		*
		*	@param eventName Event name
		*	@param eventHandler Handler function
		*/
		removeEventListener(eventName: string, eventHandler: () => any): void;
		/**
		*	Remove roster item (IM)
		*
		*	@param user_id User id
		*/
		removeRosterItem(user_id: string): void;
		/**
		*	Remove roster item group (IM)
		*
		*	@param user_id User id
		*	@param group Group name
		*/
		remoteRosterItemGroup(user_id: string, group: string): void;
		/**
		*	Rename roster item (IM)
		*
		*	@param user_id User id
		*	@param name New display name
		*/
		renameRosterItem(user_id: string, name: string): void;
		/**
		*	Request a key for 'onetimekey' auth method. Server will send the key in AuthResult event with code 302
		*
		*	@param username
		*/
		requestOneTimeLoginKey(username: string): void;
		/**
		*	Send message to user (IM)
		*
		*	@param user_id User id
		*	@param content Message content
		*/
		sendInstantMessage(user_id: string, content: string): string;
		/**
		*	Start/stop sending local video to remote party/parties
		*
		*	@param flag Start/stop - true/false
		*/
		sendVideo(flag: boolean): void;
		/**
		*	Set active call
		*
		*	@param call VoxImplant call instance
		*	@param active If true make call active, otherwise make call inactive
		*/
		setCallActive(call: Call, active: boolean): void;
		/**
		*	Set chat session state info
		*
		*	@param user_id User id
		*	@param status Chat session status. See VoxImplant.ChatStateType enum
		*/
		setChatState(user_id: string, status: ChatStateType): void;
		/**
		*	Set local video position
		*
		*	@param x Horizontal position (px)
		*	@param y Vertical position (px)
		*/
		setLocalVideoPosition(x: number, y: number): void;
		/**
		*	Set local video size
		*
		*	@param width Width in pixels
		*	@param height Height in pixels
		*/
		setLocalVideoSize(width: number, height: number): void;
		/**
		*	Set local video size
		*
		*	@param user_id User id
		*	@param type Message event type: VoxImplant.MessageEventType.Delivered or VoxImplant.MessageEventType.Displayed. See VoxImplant.MessageEventType enum
		*	@param message_id Message id(s)
		*/
		setMessageStatus(user_id: string, type: MessageEventType, message_id: string[]): void;
		/**
		*	Set ACD status
		*
		*	@param status Presence status string, see VoxImplant.OperatorACDStatuses
		*/
		setOperatorACDStatus(status: OperatorACDStatuses): void;
		/**
		*	Set presence
		*
		*	@param status Presence status from VoxImplant.UserStatuses
		*	@param msg Presence text message
		*/
		setPresenceStatus(status: UserStatuses, msg: string): void;
		/**
		*	Set background color of flash app (only for Flash mode)
		*	
		*	@param color Color in web format (i.e. #000000 for black)
		*/
		setSwfColor(color: string): void;
		/**
		*	Set bandwidth limit for video calls. Currently supported by Chrome/Chromium. The limit will be applied for the next call. (WebRTC mode only)
		*
		*	@param bandwidth Bandwidth limit in kilobits per second (kbps)
		*/
		setVideoBandwidth(bandwidth: number): void;
		/**
		*	Set video settings globally. This settings will be used for the next call.
		*
		*	@param settings Video settings
		*	@param successCallback Success callback function
		*	@param failedCallback Failed callback function
		*/
		setVideoSettings(settings: VideoSettings | FlashVideoSettings, successCallback?: () => any, failedCallback?: () => any): void;
		/**
		*	Show flash settings panel
		*	
		*	@param panel Settings type - default/microphone/camera/etc as described in SecurityPanel class
		*/
		showFlashSettingsPanel(panel?: string): void;
		/**
		*	Show/hide local video
		*
		*	@param flag Show/hide - true/false
		*/
		showLocalVideo(flag: boolean): void;
		/**
		*	Stop playing ToneScript using WebAudio API
		*/
		stopPlayback(): void;
		/**
		*	Transfer call, depending on the result VoxImplant.CallEvents.TransferComplete or VoxImplant.CallEvents.TransferFailed event will be dispatched
		*
		*	@param call1 Call which will be transferred
		*	@param call2 Call where call1 will be transferred
		*/
		transferCall(call1: Call, call2: Call): void;
		/**
		*	Use specified audio source , use audioSources to get the list of available audio sources
		*
		*	@param id Id of the audio source
		*	@param successCallback Called in WebRTC mode if audio source changed successfully
		*	@param failedCallback Called in WebRTC mode if audio source couldn't be changed successfully
		*/
		useAudioSource(id: number | string, successCallback?: () => any, failedCallback?: () => any): void;
		/**
		*	Use specified audio source , use audioSources to get the list of available audio sources
		*
		*	@param id Id of the video source
		*	@param successCallback Called in WebRTC mode if video source changed successfully
		*	@param failedCallback Called in WebRTC mode if video source couldn't be changed successfully
		*/
		useVideoSource(id: number | string, successCallback?: () => any, failedCallback?: () => any): void;
		/**
		*	Get a list of all currently available video sources / cameras
		*/
		videoSources(): VideoSourceInfo[];
	}

	interface Call {
		/**
		*	Returns information about the call's media state (active/inactive)
		*/
		active(): boolean;
		/**
		*	Register handler for specified event
		*
		*	@param eventName Event name
		*	@param eventHandler Handler function. A single parameter is passed - object with the event information
		*/
		addEventListener(eventName: string, eventHandler: (eventObject: VoxImplantCallEvent) => any): void;	
		/**
		*	Answer on incoming call
		*
		*	@param customData Set custom string associated with call session. It can be later obtained from Call History using HTTP API
		*	@param extraHeaders Optional custom parameters (SIP headers) that should be sent after accepting incoming call. Parameter names must start with "X-" to be processed by application 
		*/
		answer(customData?: string, extraHeaders?: Object): void;
		/**
		*	Reject incoming call
		*
		*	@param extraHeaders Optional custom parameters (SIP headers) that should be sent after accepting incoming call. Parameter names must start with "X-" to be processed by application 
		*/
		decline(extraHeaders?: Object): void;
		/**
		*	Returns display name
		*/
		displayName(): string;
		/**
		*	Returns HTML video element's id for the call (WebRTC mode)
		*/
		getVideoElementId(): string;
		/**
		*	Hangup call
		*
		*	@param extraHeaders Optional custom parameters (SIP headers) that should be sent after disconnecting/cancelling call. Parameter names must start with "X-" to be processed by application
		*/
		hangup(extraHeaders?: Object): void;
		/**
		*	Returns headers object
		*/
		headers(): Object;
		/**
		*	Returns call id
		*/
		id(): string;
		/**
		*	Mute microphone
		*/
		muteMicrophone(): void;
		/**
		*	Mute sound
		*/
		mutePlayback(): void;
		/**
		*	Returns dialed number or caller id
		*/
		number(): string;
		/**
		*	Reject incoming call
		*
		*	@param extraHeaders Optional custom parameters (SIP headers) that should be sent after disconnecting/cancelling call. Parameter names must start with "X-" to be processed by application
		*/
		reject(extraHeaders?: Object): void;
		/**
		*	Remove handler for specified event
		*
		*	@param eventName Event name
		*	@param eventHandler Handler function
		*/
		removeEventListener(eventName: string, eventHandler: () => any): void;
		/**
		*	Send Info (SIP INFO) message inside the call
		*
		*	@param mimeType MIME type of the message
		*	@param body Message content
		*	@param extraHeaders Optional headers to be passed with the message
		*/
		sendInfo(mimeType: string, body: string, extraHeaders?: Object): void;
		/**
		*	Send text message
		*
		*	@param msg Message text
		*/
		sendMessage(msg: string): void;
		/**
		*	Send tone (DTMF)
		*
		*	@param key Send tone according to pressed key: 0-9 , * , #
		*/
		sendTone(key: string): void;
		/**
		*	Set remote video position
		*
		*	@param x Horizontal position (px)
		*	@param y Vertical position (px)
		*/
		setRemoteVideoPosition(x: number, y: number): void;
		/**
		*	Set remote video size
		*
		*	@param width Width in pixels
		*	@param height Height in pixels
		*/
		setRemoteVideoSize(width: number, height: number): void;
		/**
		*	Set video settings
		*
		*	@param settings Video settings for current call
		*	@param successCallback Called in WebRTC mode if video settings were applied successfully
		*	@param failedCallback Called in WebRTC mode if video settings couldn't be applied
		*/
		setVideoSettings(settings: VideoSettings | FlashVideoSettings, successCallback?: () => any, failedCallback?: () => any): void;
		/**
		*	Show/hide remote party video
		*
		*	@param flag Show/hide - true/false
		*/
		showRemoteVideo(flag: boolean): void;
		/**
		*	Get call's current state
		*/
		state(): string;
		/**
		*	Unmute microphone
		*/
		unmuteMicrophone(): void;
		/**
		*	Unmute sound
		*/
		unmutePlayback(): void;
	}

	/**
	*	WebRTC Video Settings (aka Constraints)
	*/
	interface VideoSettings {
		/**
		*	Mandatory constraints object
		*/
		mandatory: Object;
		/**
		*	Optional constraints object
		*/
		optional: Object; 
	}

	/**
	*	Flash Video Settings
	*/
	interface FlashVideoSettings {
		/**
		*	The maximum amount of bandwidth the current outgoing video feed can use, in bytes
		*/
		bandwidth?: number;
		/**
		*	The maximum rate at which the camera can capture data, in frames per second
		*/
		fps?: number;
		/**
		*	Height in pixels (should be set together with width)
		*/
		height?: number;
		/**
		*	Width in pixels (should be set together with height)
		*/
		width?: number;
		/**
		*	Keyframe interval (seconds)
		*/
		keyframeInterval?: number;
		/**
		*	H.264 video codec level
		*/
		level?: string;
		/**
		*	H.264 video codec profile
		*/
		profile?: string;
		/**
		*	The required level of picture quality, as determined by the amount of compression being applied to each video frame. Acceptable quality values range from 1 (lowest quality, maximum compression) to 100 (highest quality, no compression). The default value is 0, which means that picture quality can vary as needed to avoid exceeding available bandwidth
		*/
		quality?: number;
	}

	/**
	*	Network information
	*/
	interface NetworkInfo {
		/**
		*	Packet loss percentage
		*/
		packetLoss: number;
	}

	/**
	*	VoxImplant roster item
	*/
	interface RosterItem {
		/**
		*	Groups this roster item belongs to
		*/
		groups: string[],
		/**
		*	User id
		*/
		id: string,
		/**
		*	User display name
		*/
		name: string,
		/**
		*	Resources
		*/
		resources: string[],
		/**
		*	Subscription type
		*/
		subscription_type: number
	}

	/**
	*	Get Client instance to use platform functions
	*/
	function getInstance(): Client;
	/**
	*	VoxImplant Web SDK lib version
	*/
	function version(): String;
	
}

declare module "voximplant-websdk" {
    export = VoxImplant;
}
