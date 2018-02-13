// Type definitions for roslib.js 0.18.2
// Project: http://wiki.ros.org/roslibjs
// Definitions by: Stefan Profanter <https://github.com/Pro>, Cooper Benson <https://github.com/skycoop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/* ----------------------------------

 NOTE: This typescript definition is not yet complete. I should be extended if definitions are missing.

 ---------------------------------- */

export = ROSLIB;
export as namespace ROSLIB;

declare namespace ROSLIB {
	export class Ros {
		/**
		 * Manages connection to the server and all interactions with ROS.
		 *
		 * Emits the following events:
		 *  * 'error' - there was an error with ROS
		 *  * 'connection' - connected to the WebSocket server
		 *  * 'close' - disconnected to the WebSocket server
		 *  * <topicName> - a message came from rosbridge with the given topic name
		 *  * <serviceID> - a service response came from rosbridge with the given ID
		 *
		 * @constructor
		 * @param options - possible keys include:
		 *   * url (optional) - the WebSocket URL for rosbridge (can be specified later with `connect`)
		 */
		constructor(options:{
			url?: string
		});

		on(eventName:string, callback:(event:any) => void):void;

		/**
		 * Connect to the specified WebSocket.
		 *
		 * @param url - WebSocket URL for Rosbridge
		 */
		connect(url:string):void;

		/**
		 * Disconnect from the WebSocket server.
		 */
		close():void;

		/**
		 * Sends an authorization request to the server.
		 *
		 * @param mac - MAC (hash) string given by the trusted source.
		 * @param client - IP of the client.
		 * @param dest - IP of the destination.
		 * @param rand - Random string given by the trusted source.
		 * @param t - Time of the authorization request.
		 * @param level - User level as a string given by the client.
		 * @param end - End time of the client's session.
		 */
		authenticate(mac:string, client:string, dest:string, rand:string, t:number, level:string, end:number):void;


		/**
		 * Sends the message over the WebSocket, but queues the message up if not yet
		 * connected.
		 */
		callOnConnection(message:any):void;

		/**
		 * Retrieves list of actionlib servers in ROS as an array.
		 *
		 * @param callback function with params:
		 *   * action_servers - Array of actionlib servers names
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
    	getActionServers(callback:(action_servers:string[]) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves list of topics in ROS as an array.
		 *
		 * @param callback function with params:
		 *   * topics - Array of topic names
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getTopics(callback:(topics:string[]) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves Topics in ROS as an array as specific type
		 *
		 * @param topicType topic type to find:
		 * @param callback function with params:
		 *   * topics - Array of topic names
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getTopicsForType(topicType:string, callback:(topics:string[]) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves list of active service names in ROS.
		 *
		 * @param callback - function with the following params:
		 *   * services - array of service names
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getServices(callback:(services:string[]) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves list of services in ROS as an array as specific type
		 *
		 * @param serviceType service type to find:
		 * @param callback function with params:
		 *   * topics - Array of service names
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getServicesForType(serviceType:string, callback:(services:string[]) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves list of active node names in ROS.
		 *
		 * @param callback - function with the following params:
		 *   * nodes - array of node names
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getNodes(callback:(nodes:string[]) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves list of param names from the ROS Parameter Server.
		 *
		 * @param callback function with params:
		 *  * params - array of param names.
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getParams(callback:(params:string[]) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves a type of ROS topic.
		 *
		 * @param topic name of the topic:
		 * @param callback - function with params:
		 *   * type - String of the topic type
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getTopicType(topic:string, callback:(type:string) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves a type of ROS service.
		 *
		 * @param service name of service:
		 * @param callback - function with params:
		 *   * type - String of the service type
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getServiceType(service:string, callback:(type:string) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Retrieves a detail of ROS message.
		 *
		 * @param callback - function with params:
		 *   * details - Array of the message detail
		 * @param message - String of a topic type
		 * @param failedCallback - the callback function when the ros call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		getMessageDetails(message:Message, callback:(detail:any) => void, failedCallback?:(error:any)=>void):void;

		/**
		 * Decode a typedefs into a dictionary like `rosmsg show foo/bar`
		 *
		 * @param defs - array of type_def dictionary
		 */
		decodeTypeDefs(defs:any):void;
	}

	export class Message {
		/**
		 * Message objects are used for publishing and subscribing to and from topics.
		 *
		 * @constructor
		 * @param values - object matching the fields defined in the .msg definition file
		 */
		constructor(values:any);
	}

	export class Param {
		/**
		 * A ROS parameter.
		 *
		 * @constructor
		 * @param options - possible keys include:
		 *   * ros - the ROSLIB.Ros connection handle
		 *   * name - the param name, like max_vel_x
		 */
		constructor(options:{
			ros: Ros,
			name: string
		});

		/**
		 * Fetches the value of the param.
		 *
		 * @param callback - function with the following params:
		 *  * value - the value of the param from ROS.
		 */
		get(callback:(response:any) => void):void;

		/**
		 * Sets the value of the param in ROS.
		 *
		 * @param value - value to set param to.
		 * @param callback - function with params:
		 *   * response - the response from the service request
		 */
		set(value:any, callback?:(response:any) => void):void;

		/**
		 * Delete this parameter on the ROS server.
		 */
		delete(callback:(response:any) => void):void;

	}


	export class Service {
		/**
		 * A ROS service client.
		 *
		 * @constructor
		 * @params options - possible keys include:
		 *   * ros - the ROSLIB.Ros connection handle
		 *   * name - the service name, like /add_two_ints
		 *   * serviceType - the service type, like 'rospy_tutorials/AddTwoInts'
		 */
		constructor(data:{
			ros: Ros,
			name: string,
			serviceType: string
		});


		// getter
		public name:string;
		// getter
		public serviceType:string;

		/**
		 * Calls the service. Returns the service response in the callback.
		 *
		 * @param request - the ROSLIB.ServiceRequest to send
		 * @param callback - function with params:
		 *   * response - the response from the service request
		 * @param failedCallback - the callback function when the service call failed (optional). Params:
		 *   * error - the error message reported by ROS
		 */
		callService(request:ServiceRequest, callback:(response:any) => void, failedCallback?:(error:any) => void):void;

		/**
		 * Advertise this service and call the callback each time a client calls it.
		 *
		 * @param callback - function with the following params:
		 *   * request - the service request data
		 *   * response - the data which should be sent back to the caller
		 */
		advertise(callback:(request:any, response:any) => void):void;

		/**
		 * Unadvertise a previously advertised service
		 */
		unadvertise():void;
	}

	export class ServiceRequest {
		/**
		 * A ServiceRequest is passed into the service call.
		 *
		 * @constructor
		 * @param values - object matching the fields defined in the .srv definition file
		 */
		constructor(values?:any);
	}

	export class ServiceResponse {
		/**
		 * A ServiceResponse is returned from the service call.
		 *
		 * @constructor
		 * @param values - object matching the fields defined in the .srv definition file
		 */
		constructor(values?:any);
	}

	export class Topic {
		/**
		 * Publish and/or subscribe to a topic in ROS.
		 *
		 * Emits the following events:
		 *  * 'warning' - if there are any warning during the Topic creation
		 *  * 'message' - the message data from rosbridge
		 *
		 * @constructor
		 * @param options - object with following keys:
		 *   * ros - the ROSLIB.Ros connection handle
		 *   * name - the topic name, like /cmd_vel
		 *   * messageType - the message type, like 'std_msgs/String'
		 *   * compression - the type of compression to use, like 'png'
		 *   * throttle_rate - the rate (in ms in between messages) at which to throttle the topics
		 *   * queue_size - the queue created at bridge side for re-publishing webtopics (defaults to 100)
		 *   * latch - latch the topic when publishing
		 *   * queue_length - the queue length at bridge side used when subscribing (defaults to 0, no queueing).
		 */
		constructor(options:{
			ros: Ros,
			name: string,
			messageType: string,
			compression?: string,
			throttle_rate?: number,
			queue_size?: number,
			latch?: boolean,
			queue_length?: number
		});

		// getter
		public name:string;
		// getter
		public messageType:string;

		/**
		 * Every time a message is published for the given topic, the callback
		 * will be called with the message object.
		 *
		 * @param callback - function with the following params:
		 *   * message - the published message
		 */
		subscribe(callback:(message:Message) => void):void;

		/**
		 * Unregisters as a subscriber for the topic. Unsubscribing stop remove
		 * all subscribe callbacks. To remove a call back, you must explicitly
		 * pass the callback function in.
		 *
		 * @param callback - the optional callback to unregister, if
		 *     * provided and other listeners are registered the topic won't
		 *     * unsubscribe, just stop emitting to the passed listener
		 */
		unsubscribe(callback?:(callback:(message:Message) => void) => void):void;

		/**
		 * Registers as a publisher for the topic.
		 */
		advertise():void;

		/**
		 * Unregisters as a publisher for the topic.
		 */
		unadvertise():void;

		/**
		 * Publish the message.
		 *
		 * @param message - A ROSLIB.Message object.
		 */
		publish(message:Message):void;
	}

	class ActionClient {
		/**
		 * An actionlib action client.
		 *
		 * Emits the following events:
		 *  * 'timeout' - if a timeout occurred while sending a goal
		 *  * 'status' - the status messages received from the action server
		 *  * 'feedback' -  the feedback messages received from the action server
		 *  * 'result' - the result returned from the action server
		 *
		 *  @constructor
		 *  @param options - object with following keys:
		 *   * ros - the ROSLIB.Ros connection handle
		 *   * serverName - the action server name, like /fibonacci
		 *   * actionName - the action message name, like 'actionlib_tutorials/FibonacciAction'
		 *   * timeout - the timeout length when connecting to the action server
		 */
		constructor(options:{
			ros: Ros,
			serverName: string,
			actionName: string,
			timeout: number
		});

		/**
		 * Cancel all goals associated with this ActionClient.
		 */
		cancel():void;
	}

	class Goal {
		/**
		 * An actionlib goal goal is associated with an action server.
		 *
		 * Emits the following events:
		 *  * 'timeout' - if a timeout occurred while sending a goal
		 *
		 *  @constructor
		 *  @param options with following keys:
		 *   * actionClient - the ROSLIB.ActionClient to use with this goal
		 *   * goalMessage - The JSON object containing the goal for the action server
		 */
		constructor(options:{
			actionClient: ActionClient,
			goalMessage: any
		});

		/**
		 * Connect callback functions to goal based events
		 * 
		 * @param eventName Name of event ('timeout', 'status', 'feedback', 'result')
		 * @param callback Callback function executed on connected event
		 */
		on(eventName:string, callback:(event:any) => void):void;
		
		/**
		 * Send the goal to the action server.
		 *
		 * @param timeout (optional) - a timeout length for the goal's result
		 */
		send(timeout?:number):void;

		/**
		 * Cancel the current goal.
		 */
		cancel():void;
	}
}
