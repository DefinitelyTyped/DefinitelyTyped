/* ----------------------------------

 NOTE: This typescript definition is not yet complete. I should be extended if definitions are missing.

 ---------------------------------- */

import { EventEmitter2 } from "eventemitter2";

export = ROSLIB;
export as namespace ROSLIB;

declare namespace ROSLIB {
    interface Vector3Like {
        x?: number | null | undefined;
        y?: number | null | undefined;
        z?: number | null | undefined;
    }
    interface QuaternionLike {
        x?: number | null | undefined;
        y?: number | null | undefined;
        z?: number | null | undefined;
        w?: number | null | undefined;
    }
    export class Ros extends EventEmitter2 {
        /**
         * Manages connection to the server and all interactions with ROS.
         *
         * Emits the following events:
         *  * 'error' - There was an error with ROS.
         *  * 'connection' - Connected to the WebSocket server.
         *  * 'close' - Disconnected to the WebSocket server.
         *  * &#60;topicName&#62; - A message came from rosbridge with the given topic name.
         *  * &#60;serviceID&#62; - A service response came from rosbridge with the given ID.
         *
         * @param {Object} options
         * @param {string} [options.url] - The WebSocket URL for rosbridge or the node server URL to connect using socket.io (if socket.io exists in the page). Can be specified later with `connect`.
         * @param {boolean} [options.groovyCompatibility=true] - Don't use interfaces that changed after the last groovy release or rosbridge_suite and related tools.
         * @param {string} [options.transportLibrary=websocket] - One of 'websocket', 'workersocket', 'socket.io' or RTCPeerConnection instance controlling how the connection is created in `connect`.
         * @param {Object} [options.transportOptions={}] - The options to use when creating a connection. Currently only used if `transportLibrary` is RTCPeerConnection.
         */
        constructor(options: {
            url?: string | undefined;
            groovyCompatibility?: boolean | undefined;
            transportLibrary?: "websocket" | "workersocket" | "socket.io" | RTCPeerConnection | undefined;
            transportOptions?: RTCDataChannelInit | undefined;
        });

        readonly isConnected: boolean;

        readonly transportLibrary: "websocket" | "workersocket" | "socket.io" | RTCPeerConnection;

        readonly transportOptions: RTCDataChannelInit | {};

        on(eventName: string, callback: (event: any) => void): this;

        on(eventName: "connection" | "close" | "error", callback: (event: Event) => void): this;

        /**
         * Connect to the specified WebSocket.
         *
         * @param {string} url - WebSocket URL or RTCDataChannel label for rosbridge.
         */
        connect(url: string): void;

        /**
         * Disconnect from the WebSocket server.
         */
        close(): void;

        /**
         * Send an authorization request to the server.
         *
         * @param {string} mac - MAC (hash) string given by the trusted source.
         * @param {string} client - IP of the client.
         * @param {string} dest - IP of the destination.
         * @param {string} rand - Random string given by the trusted source.
         * @param {any} t - Time of the authorization request.
         * @param {string} level - User level as a string given by the client.
         * @param {Object} end - End time of the client's session.
         */
        authenticate(
            mac: string,
            client: string,
            dest: string,
            rand: string,
            t: any,
            level: string,
            end: any,
        ): void;

        /**
         * Send an encoded message over the WebSocket.
         *
         * @param {any} messageEncoded - The encoded message to be sent.
         */
        sendEncodedMessage(messageEncoded: any): void;

        /**
         * Send the message over the WebSocket, but queue the message up if not yet
         * connected.
         *
         * @param {any} message - The message to be sent.
         */
        callOnConnection(message: any): void;

        /**
         * Send a set_level request to the server.
         *
         * @param {string} level - Status level (none, error, warning, info).
         * @param {number} [id] - Operation ID to change status level on.
         */
        setStatusLevel(level: string, id?: number): void;

        /**
         * Retrieve a list of action servers in ROS as an array of string.
         *
         * @param {function} callback - Function with the following params:
         * @param {string[]} callback.actionservers - Array of action server names.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getActionServers(callback: (actionservers: string[]) => void, failedCallback?: (error: string) => void): void;

        /**
         * Retrieve a list of topics in ROS as an array.
         *
         * @param {function} callback - Function with the following params:
         * @param {Object} callback.result - The result object with the following params:
         * @param {string[]} callback.result.topics - Array of topic names.
         * @param {string[]} callback.result.types - Array of message type names.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getTopics(
            callback: (result: { topics: string[]; types: string[] }) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Retrieve a list of topics in ROS as an array of a specific type.
         *
         * @param {string} topicType - The topic type to find.
         * @param {function} callback - Function with the following params:
         * @param {string[]} callback.topics - Array of topic names.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getTopicsForType(
            topicType: string,
            callback: (topics: string[]) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Retrieve a list of active service names in ROS.
         *
         * @param {function} callback - Function with the following params:
         * @param {string[]} callback.services - Array of service names.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getServices(callback: (services: string[]) => void, failedCallback?: (error: string) => void): void;

        /**
         * Retrieve a list of services in ROS as an array as specific type.
         *
         * @param {string} serviceType - The service type to find.
         * @param {function} callback - Function with the following params:
         * @param {string[]} callback.topics - Array of service names.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getServicesForType(
            serviceType: string,
            callback: (topics: string[]) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Retrieve the details of a ROS service request.
         *
         * @param {string} type - The type of the service.
         * @param {function} callback - Function with the following params:
         * @param {Object} callback.result - The result object with the following params:
         * @param {string[]} callback.result.typedefs - An array containing the details of the service request.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getServiceRequestDetails(
            type: string,
            callback: (result: { typedefs: string[] }) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Retrieve the details of a ROS service response.
         *
         * @param {string} type - The type of the service.
         * @param {function} callback - Function with the following params:
         * @param {Object} callback.result - The result object with the following params:
         * @param {string[]} callback.result.typedefs - An array containing the details of the service response.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getServiceResponseDetails(
            type: string,
            callback: (result: { typedefs: string[] }) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Retrieve a list of active node names in ROS.
         *
         * @param {function} callback - Function with the following params:
         * @param {string[]} callback.nodes - Array of node names.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getNodes(callback: (nodes: string[]) => void, failedCallback?: (error: string) => void): void;

        /**
         * Retrieve a list of subscribed topics, publishing topics and services of a specific node.
         * <br>
         * These are the parameters if failedCallback is <strong>defined</strong>.
         *
         * @param {string} node - Name of the node.
         * @param {function} callback - Function with the following params:
         * @param {string[]} callback.subscriptions - Array of subscribed topic names.
         * @param {string[]} callback.publications - Array of published topic names.
         * @param {string[]} callback.services - Array of service names hosted.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        // Note: Use type overloading instead to provide better readability of the available function signatures of getNodeDetails
        // tslint:disable-next-line:unified-signatures
        getNodeDetails(
            node: string,
            callback: (subscriptions: string[], publications: string[], services: string[]) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Retrieve a list of subscribed topics, publishing topics and services of a specific node.
         * <br>
         * These are the parameters if failedCallback is <strong>undefined</strong>.
         *
         * @param {string} node - Name of the node.
         * @param {function} callback - Function with the following params:
         * @param {Object} callback.result - The result object with the following params:
         * @param {string[]} callback.result.subscribing - Array of subscribed topic names.
         * @param {string[]} callback.result.publishing - Array of published topic names.
         * @param {string[]} callback.result.services - Array of service names hosted.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getNodeDetails(
            node: string,
            // Note: Use type overloading instead to provide better readability of the available function signatures of getNodeDetails
            // tslint:disable-next-line:unified-signatures
            callback: (result: { subscribing: string[]; publishing: string[]; services: string[] }) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Retrieve a list of parameter names from the ROS Parameter Server.
         *
         * @param {function} callback - Function with the following params:
         * @param {string[]} callback.params - Array of param names.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getParams(callback: (params: string[]) => void, failedCallback?: (error: string) => void): void;

        /**
         * Retrieve the type of a ROS topic.
         *
         * @param {string} topic - Name of the topic.
         * @param {function} callback - Function with the following params:
         * @param {string} callback.type - The type of the topic.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getTopicType(topic: string, callback: (type: string) => void, failedCallback?: (error: string) => void): void;

        /**
         * Retrieve the type of a ROS service.
         *
         * @param {string} service - Name of the service.
         * @param {function} callback - Function with the following params:
         * @param {string} callback.type - The type of the service.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getServiceType(
            service: string,
            callback: (type: string) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Retrieve the details of a ROS message.
         *
         * @param {string} message - The name of the message type.
         * @param {function} callback - Function with the following params:
         * @param {string} callback.details - An array of the message details.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getMessageDetails(
            message: string,
            callback: (details: string) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Decode a typedef array into a dictionary like `rosmsg show foo/bar`.
         *
         * @param {any[]} defs - Array of type_def dictionary.
         */
        decodeTypeDefs(defs: any[]): any;

        /**
         * Retrieve a list of topics and their associated type definitions.
         *
         * @param {function} callback - Function with the following params:
         * @param {Object} callback.result - The result object with the following params:
         * @param {string[]} callback.result.topics - Array of topic names.
         * @param {string[]} callback.result.types - Array of message type names.
         * @param {string[]} callback.result.typedefs_full_text - Array of full definitions of message types, similar to `gendeps --cat`.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        getTopicsAndRawTypes(
            callback: (result: { topics: string[]; types: string[]; typedefs_full_text: string[] }) => void,
            failedCallback?: (error: string) => void,
        ): void;
    }

    export class Message {
        /**
         * Message objects are used for publishing and subscribing to and from topics.
         *
         * @param {any} values - An object matching the fields defined in the .msg definition file.
         */
        constructor(values: any);
    }

    export class Param {
        /**
         * A ROS parameter.
         *
         * @param {Object} options
         * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
         * @param {string} options.name - The param name, like max_vel_x.
         */
        constructor(options: { ros: Ros; name: string });

        /**
         * Fetch the value of the param.
         *
         * @param {function} callback - Function with the following params:
         * @param {any} callback.value - The value of the param from ROS.
         */
        get(callback: (value: any) => void): void;

        /**
         * Set the value of the param in ROS.
         *
         * @param {any} value - The value to set param to.
         * @param {function} callback - The callback function.
         */
        set(value: any, callback: (response: any) => void): void;

        /**
         * Delete this parameter on the ROS server.
         *
         * @param {function} callback - The callback function.
         */
        delete(callback: (response: any) => void): void;
    }

    export class Service<TServiceRequest = any, TServiceResponse = any> {
        /**
         * A ROS service client.
         *
         * @param {Object} options
         * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
         * @param {string} options.name - The service name, like '/add_two_ints'.
         * @param {string} options.serviceType - The service type, like 'rospy_tutorials/AddTwoInts'.
         */
        constructor(data: { ros: Ros; name: string; serviceType: string });

        // getter
        public name: string;
        // getter
        public serviceType: string;

        /**
         * Call the service. Returns the service response in the
         * callback. Does nothing if this service is currently advertised.
         *
         * @param {TServiceRequest} request - The ROSLIB.ServiceRequest to send.
         * @param {function} callback - Function with the following params:
         * @param {TServiceResponse} callback.response - The response from the service request.
         * @param {function} [failedCallback] - The callback function when the service call failed with params:
         * @param {string} failedCallback.error - The error message reported by ROS.
         */
        callService(
            request: TServiceRequest,
            callback: (response: TServiceResponse) => void,
            failedCallback?: (error: string) => void,
        ): void;

        /**
         * Advertise the service. This turns the Service object from a client
         * into a server. The callback will be called with every request
         * that's made on this service.
         *
         * @param {function} callback - This works similarly to the callback for a C++ service and should take the following params:
         * @param {TServiceRequest} callback.request - The service request.
         * @param {TServiceResponse} callback.response - An empty dictionary. Take care not to overwrite this. Instead, only modify the values within.
         *     It should return true if the service has finished successfully,
         *     i.e., without any fatal errors.
         */
        advertise(callback: (request: TServiceRequest, response: TServiceResponse) => void): void;

        /**
         * Unadvertise a previously advertised service.
         */
        unadvertise(): void;
    }

    export class ServiceRequest {
        /**
         * A ServiceRequest is passed into the service call.
         *
         * @param {any} values - Object matching the fields defined in the .srv definition file.
         */
        constructor(values: any);
    }

    export class ServiceResponse {
        /**
         * A ServiceResponse is returned from the service call.
         *
         * @param {any} values - Object matching the fields defined in the .srv definition file.
         */
        constructor(values: any);
    }

    export class Topic<TMessage = Message> extends EventEmitter2 {
        /**
         * Publish and/or subscribe to a topic in ROS.
         *
         * Emits the following events:
         *  * 'warning' - If there are any warning during the Topic creation.
         *  * 'message' - The message data from rosbridge.
         *
         * @param {Object} options
         * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
         * @param {string} options.name - The topic name, like '/cmd_vel'.
         * @param {string} options.messageType - The message type, like 'std_msgs/String'.
         * @param {string} [options.compression=none] - The type of compression to use, like 'png', 'cbor', or 'cbor-raw'.
         * @param {number} [options.throttle_rate=0] - The rate (in ms in between messages) at which to throttle the topics.
         * @param {number} [options.queue_size=100] - The queue created at bridge side for re-publishing webtopics.
         * @param {boolean} [options.latch=false] - Latch the topic when publishing.
         * @param {number} [options.queue_length=0] - The queue length at bridge side used when subscribing.
         * @param {boolean} [options.reconnect_on_close=true] - The flag to enable resubscription and readvertisement on close event.
         */
        constructor(options: {
            ros: Ros;
            name: string;
            messageType: string;
            compression?: string | undefined;
            throttle_rate?: number | undefined;
            queue_size?: number | undefined;
            latch?: boolean | undefined;
            queue_length?: number | undefined;
            reconnect_on_close?: boolean | undefined;
        });

        // getter
        public name: string;
        // getter
        public messageType: string;

        /**
         * Every time a message is published for the given topic, the callback
         * will be called with the message object.
         *
         * @param {function} callback - Function with the following params:
         * @param {TMessage} callback.message - The published message.
         */
        subscribe(callback: (message: TMessage) => void): void;

        /**
         * Unregister as a subscriber for the topic. Unsubscribing will stop
         * and remove all subscribe callbacks. To remove a callback, you must
         * explicitly pass the callback function in.
         *
         * @param {function} [callback] - The callback to unregister, if
         *     provided and other listeners are registered the topic won't
         *     unsubscribe, just stop emitting to the passed listener.
         */
        unsubscribe(callback?: (message: TMessage) => void): void;

        /**
         * Register as a publisher for the topic.
         */
        advertise(): void;

        /**
         * Unregister as a publisher for the topic.
         */
        unadvertise(): void;

        /**
         * Publish the message.
         *
         * @param {TMessage} message - A ROSLIB.Message object.
         */
        publish(message: TMessage): void;
    }

    export class TFClient {
        /**
         * A TF Client that listens to TFs from tf2_web_republisher.
         *
         * @param {Object} options
         * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
         * @param {string} [options.fixedFrame=base_link] - The fixed frame.
         * @param {number} [options.angularThres=2.0] - The angular threshold for the TF republisher.
         * @param {number} [options.transThres=0.01] - The translation threshold for the TF republisher.
         * @param {number} [options.rate=10.0] - The rate for the TF republisher.
         * @param {number} [options.updateDelay=50] - The time (in ms) to wait after a new subscription
         *     to update the TF republisher's list of TFs.
         * @param {number} [options.topicTimeout=2.0] - The timeout parameter for the TF republisher.
         * @param {string} [options.serverName=/tf2_web_republisher] - The name of the tf2_web_republisher server.
         * @param {string} [options.repubServiceName=/republish_tfs] - The name of the republish_tfs service (non groovy compatibility mode only).
         */
        constructor(options: {
            ros: Ros;
            fixedFrame?: string | undefined;
            angularThres?: number | undefined;
            transThres?: number | undefined;
            rate?: number | undefined;
            updateDelay?: number | undefined;
            topicTimeout?: number | undefined;
            serverName?: string | undefined;
            repubServiceName?: string | undefined;
        });

        /**
         * Unsubscribe and unadvertise all topics associated with this TFClient.
         */
        dispose(): void;

        /**
         * Process the service response and subscribe to the tf republisher
         * topic.
         *
         * @param {any} response - The service response containing the topic name.
         */
        processResponse(response: any): void;

        /**
         * Process the incoming TF message and send them out using the callback
         * functions.
         *
         * @param {any} tf - The TF message from the server.
         */
        processTFArray(tf: any): void;

        /**
         * Subscribe to the given TF frame.
         *
         * @param {string} frameID - The TF frame to subscribe to.
         * @param {function} callback - Function with the following params:
         * @param {Transform} callback.transform - The transform data.
         */
        subscribe(frameId: string, callback: (transform: Transform) => void): void;

        /**
         * Unsubscribe from the given TF frame.
         *
         * @param {string} frameID - The TF frame to unsubscribe from.
         * @param {function} callback - The callback function to remove.
         */
        unsubscribe(frameId: string, callback: (transform: Transform) => void): void;

        /**
         * Create and send a new goal (or service request) to the tf2_web_republisher
         * based on the current list of TFs.
         */
        updateGoal(): void;
    }

    export class Transform {
        /**
         * A Transform in 3-space. Values are copied into this object.
         *
         * @param {Object} options
         * @param {Vector3Like} options.translation - The ROSLIB.Vector3 describing the translation.
         * @param {QuaternionLike} options.rotation - The ROSLIB.Quaternion describing the rotation.
         */
        constructor(options?: {
            translation?: Vector3Like | null | undefined;
            rotation?: QuaternionLike | null | undefined;
        });

        // getters
        public translation: Vector3;
        public rotation: Quaternion;
        /**
         * Clone a copy of this transform.
         *
         * @returns {Transform} The cloned transform.
         */
        clone(): Transform;
    }

    export class Vector3 implements Vector3Like {
        /**
         * A 3D vector.
         *
         * @param {Object} options
         * @param {number} [options.x=0] - The x value.
         * @param {number} [options.y=0] - The y value.
         * @param {number} [options.z=0] - The z value.
         */
        constructor(
            options?: {
                x?: number | null | undefined;
                y?: number | null | undefined;
                z?: number | null | undefined;
            } | null,
        );

        // getters
        public x: number;
        public y: number;
        public z: number;

        /**
         * Set the values of this vector to the sum of itself and the given vector.
         *
         * @param {Vector3} v - The vector to add with.
         */
        add(v: Vector3): void;

        /**
         * Clone a copy of this vector.
         *
         * @returns {Vector3} The cloned vector.
         */
        clone(): Vector3;

        /**
         * Multiply the given Quaternion with this vector.
         *
         * @param {Quaternion} q - The quaternion to multiply with.
         */
        multiplyQuaternion(q: Quaternion): void;

        /**
         * Set the values of this vector to the difference of itself and the given vector.
         *
         * @param {Vector3} v - The vector to subtract with.
         */
        subtract(v: Vector3): void;
    }

    export class Quaternion implements QuaternionLike {
        /**
         * A Quaternion.
         *
         * @param {Object} options
         * @param {number} [options.x=0] - The x value.
         * @param {number} [options.y=0] - The y value.
         * @param {number} [options.z=0] - The z value.
         * @param {number} [options.w=1] - The w value.
         */
        constructor(
            options?: {
                x?: number | null | undefined;
                y?: number | null | undefined;
                z?: number | null | undefined;
                w?: number | null | undefined;
            } | null,
        );

        // getters
        public x: number;
        public y: number;
        public z: number;
        public w: number;

        /**
         * Clone a copy of this quaternion.
         *
         * @returns {Quaternion} The cloned quaternion.
         */
        clone(): Quaternion;

        /**
         * Perform a conjugation on this quaternion.
         */
        conjugate(): void;

        /**
         * Convert this quaternion into its inverse.
         */
        invert(): void;

        /**
         * Set the values of this quaternion to the product of itself and the given quaternion.
         *
         * @param {Quaternion} q - The quaternion to multiply with.
         */
        multiply(q: Quaternion): void;

        /**
         * Return the norm of this quaternion.
         *
         * @returns {number} The norm of this quaternion.
         */
        norm(): number;

        /**
         * Perform a normalization on this quaternion.
         */
        normalize(): void;
    }

    export class Pose {
        position: Vector3;
        orientation: Quaternion;

        /**
         * A Pose in 3D space. Values are copied into this object.
         *
         * @param {Object} options
         * @param {Vector3Like} options.position - The ROSLIB.Vector3 describing the position.
         * @param {QuaternionLike} options.orientation - The ROSLIB.Quaternion describing the orientation.
         */
        constructor(
            options?: {
                position?: Vector3Like | null | undefined;
                orientation?: QuaternionLike | null | undefined;
            } | null,
        );

        /**
         * Apply a transform against this pose.
         *
         * @param {Transform} tf - The transform to be applied.
         */
        applyTransform(tf: Transform): void;

        /**
         * Clone a copy of this pose.
         *
         * @returns {Pose} The cloned pose.
         */
        clone(): Pose;

        /**
         * Multiply this pose with another pose without altering this pose.
         *
         * @returns {Pose} The result of the multiplication.
         */
        multiply(pose: Pose): void;

        /**
         * Compute the inverse of this pose.
         *
         * @returns {Pose} The inverse of the pose.
         */
        getInverse(): Pose;
    }

    export class ActionClient {
        /**
         * An actionlib action client.
         *
         * Emits the following events:
         *  * 'timeout' - If a timeout occurred while sending a goal.
         *  * 'status' - The status messages received from the action server.
         *  * 'feedback' - The feedback messages received from the action server.
         *  * 'result' - The result returned from the action server.
         *
         * @param {Object} options
         * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
         * @param {string} options.serverName - The action server name, like '/fibonacci'.
         * @param {string} options.actionName - The action message name, like 'actionlib_tutorials/FibonacciAction'.
         * @param {number} [options.timeout] - The timeout length when connecting to the action server.
         * @param {boolean} [options.omitFeedback] - The flag to indicate whether to omit the feedback channel or not.
         * @param {boolean} [options.omitStatus] - The flag to indicate whether to omit the status channel or not.
         * @param {boolean} [options.omitResult] - The flag to indicate whether to omit the result channel or not.
         */
        constructor(
            options: {
                ros: Ros;
                serverName: string;
                actionName: string;
                timeout?: number;
                omitFeedback?: boolean;
                omitStatus?: boolean;
                omitResult?: boolean;
            },
        );

        /**
         * Cancel all goals associated with this ActionClient.
         */
        cancel(): void;

        /**
         * Unsubscribe and unadvertise all topics associated with this ActionClient.
         */
        dispose(): void;
    }

    export class ActionListener {
        /**
         * An actionlib action listener.
         *
         * Emits the following events:
         *  * 'status' - The status messages received from the action server.
         *  * 'feedback' - The feedback messages received from the action server.
         *  * 'result' - The result returned from the action server.
         *
         * @param {Object} options
         * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
         * @param {string} options.serverName - The action server name, like '/fibonacci'.
         * @param {string} options.actionName - The action message name, like 'actionlib_tutorials/FibonacciAction'.
         */
        constructor(options: { ros: Ros; serverName: string; actionName: string });
    }

    export class Goal {
        /**
         * An actionlib goal that is associated with an action server.
         *
         * Emits the following events:
         *  * 'timeout' - If a timeout occurred while sending a goal.
         *
         * @param {Object} options
         * @param {ActionClient} options.actionClient - The ROSLIB.ActionClient to use with this goal.
         * @param {any} options.goalMessage - The JSON object containing the goal for the action server.
         */
        constructor(options: { actionClient: ActionClient; goalMessage: any });

        /**
         * Connect callback functions to goal based events.
         *
         * @param {string} eventName - Name of event ('timeout', 'status', 'feedback', 'result').
         * @param {function} callback - Callback function executed on connected event.
         */
        on(eventName: "timeout" | "status" | "feedback" | "result", callback: (event: any) => void): void;

        /**
         * Send the goal to the action server.
         *
         * @param {number} [timeout] - A timeout length for the goal's result.
         */
        send(timeout?: number): void;

        /**
         * Cancel the current goal.
         */
        cancel(): void;
    }

    export class SimpleActionServer {
        /**
         * An actionlib action server client.
         *
         * Emits the following events:
         *  * 'goal' - Goal sent by action client.
         *  * 'cancel' - Action client has canceled the request.
         *
         * @param {Object} options
         * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
         * @param {string} options.serverName - The action server name, like '/fibonacci'.
         * @param {string} options.actionName - The action message name, like 'actionlib_tutorials/FibonacciAction'.
         */
        constructor(options: { ros: Ros; serverName: string; actionName: string });

        /**
         * Set action state to succeeded and return to client.
         *
         * @param {any} result - The result to return to the client.
         */
        setSucceeded(result: any): void;

        /**
         * Set action state to aborted and return to client.
         *
         * @param {any} result - The result to return to the client.
         */
        setAborted(result: any): void;

        /**
         * Send a feedback message.
         *
         * @param {any} feedback - The feedback to send to the client.
         */
        sendFeedback(feedback: any): void;

        /**
         * Handle case where client requests preemption.
         */
        setPreempted(): void;
    }

    export class UrdfColor {
        r: number;
        g: number;
        b: number;
        a: number;
        /**
         * A Color element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });
    }

    export class UrdfMaterial {
        textureFilename: string | null;
        color: UrdfColor | null;
        name: string;

        /**
         * A Material element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });

        isLink(): boolean;

        assign(obj: UrdfMaterial): UrdfMaterial;
    }

    export class UrdfJoint {
        name: string;
        type: string;
        parent: string | null;
        child: string | null;
        minval: number | null;
        maxval: number | null;

        /**
         * A Joint element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });
    }

    export const URDF_SPHERE: 0;
    export const URDF_BOX: 1;
    export const URDF_CYLINDER: 2;
    export const URDF_MESH: 3;

    export type UrdfGeometry = UrdfSphere | UrdfBox | UrdfCylinder | UrdfMesh;

    export class UrdfSphere {
        type: typeof URDF_SPHERE;
        radius: number;

        /**
         * A Sphere element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });
    }

    export class UrdfBox {
        type: typeof URDF_BOX;
        dimension: Vector3;

        /**
         * A Box element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });
    }

    export class UrdfCylinder {
        type: typeof URDF_CYLINDER;
        length: number;
        radius: number;

        /**
         * A Cylinder element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });
    }

    export class UrdfMesh {
        type: typeof URDF_MESH;
        filename: string;
        scale: Vector3 | null;

        /**
         * A Box element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });
    }

    export class UrdfVisual {
        origin: Pose | null;
        geometry: UrdfGeometry | null;
        material: UrdfMaterial | null;

        /**
         * A Visual element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });
    }

    export class UrdfLink {
        name: string;
        visuals: UrdfVisual[];

        /**
         * A Link element in a URDF.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         */
        constructor(options: { xml: Node });
    }

    export class UrdfModel {
        materials: Record<string, UrdfMaterial>;
        links: Record<string, UrdfLink>;
        joints: Record<string, UrdfJoint>;

        /**
         * A URDF Model can be used to parse a given URDF into the appropriate elements.
         *
         * @param {Object} options
         * @param {Node} options.xml - The XML element to parse.
         * @param {string} options.string - The XML element to parse as a string.
         */
        constructor(options: { xml: Node; string?: string | null | undefined } | { string: string });
    }
}
