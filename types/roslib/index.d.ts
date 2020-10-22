// Type definitions for roslib.js 1.1.0
// Project: http://wiki.ros.org/roslibjs
// Definitions by: Stefan Profanter <https://github.com/Pro>,
//                 Cooper Benson <https://github.com/skycoop>,
//                 David Gonzalez <https://github.com/dgorobopec>
//                 Arvid Norlander <https://github.com/VorpalBlade>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/* ----------------------------------

 NOTE: This typescript definition is not yet complete. I should be extended if definitions are missing.

 ---------------------------------- */

export = ROSLIB;
export as namespace ROSLIB;

declare namespace ROSLIB {
    interface Vector3Like {
        x?: number | null;
        y?: number | null;
        z?: number | null;
    }
    interface QuaternionLike {
        x?: number | null;
        y?: number | null;
        z?: number | null;
        w?: number | null;
    }
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
         *   * url (optional) - (can be specified later with `connect`) the WebSocket URL for rosbridge or the node server url to connect using socket.io (if socket.io exists in the page) <br>
         *   * groovyCompatibility - don't use interfaces that changed after the last groovy release or rosbridge_suite and related tools (defaults to true)
         *   * transportLibrary (optional) - one of 'websocket' (default), 'socket.io' or RTCPeerConnection instance controlling how the connection is created in `connect`.
         *   * transportOptions (optional) - the options to use use when creating a connection. Currently only used if `transportLibrary` is RTCPeerConnection.
         */
        constructor(options: {
            url?: string;
            groovyCompatibility?: boolean;
            transportLibrary?: 'websocket' | 'socket.io' | RTCPeerConnection;
            transportOptions?: RTCDataChannelInit;
        });

        on(eventName: string, callback: (event: any) => void): void;

        /**
         * Connect to the specified WebSocket.
         *
         * @param url - WebSocket URL for Rosbridge
         */
        connect(url: string): void;

        /**
         * Disconnect from the WebSocket server.
         */
        close(): void;

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
        authenticate(
            mac: string,
            client: string,
            dest: string,
            rand: string,
            t: number,
            level: string,
            end: number,
        ): void;

        /**
         * Sends the message over the WebSocket, but queues the message up if not yet
         * connected.
         */
        callOnConnection(message: any): void;

        /**
         * Retrieves list of actionlib servers in ROS as an array.
         *
         * @param callback function with params:
         *   * action_servers - Array of actionlib servers names
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getActionServers(callback: (action_servers: string[]) => void, failedCallback?: (error: any) => void): void;

        /**
         * Retrieves list of topics in ROS as an array.
         *
         * @param callback function with params:
         *   * topics - Array of topic names
         *   * types - Array of message type names
         * @param failedCallback - the callback function when the service call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getTopics(
            callback: (topics: { topics: string[]; types: string[] }) => void,
            failedCallback?: (error: any) => void,
        ): void;

        /**
         * Retrieves Topics in ROS as an array as specific type
         *
         * @param topicType topic type to find:
         * @param callback function with params:
         *   * topics - Array of topic names
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getTopicsForType(
            topicType: string,
            callback: (topics: string[]) => void,
            failedCallback?: (error: any) => void,
        ): void;

        /**
         * Retrieves list of active service names in ROS.
         *
         * @param callback - function with the following params:
         *   * services - array of service names
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getServices(callback: (services: string[]) => void, failedCallback?: (error: any) => void): void;

        /**
         * Retrieves list of services in ROS as an array as specific type
         *
         * @param serviceType service type to find:
         * @param callback function with params:
         *   * topics - Array of service names
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getServicesForType(
            serviceType: string,
            callback: (services: string[]) => void,
            failedCallback?: (error: any) => void,
        ): void;

        /**
         * Retrieves list of active node names in ROS.
         *
         * @param callback - function with the following params:
         *   * nodes - array of node names
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getNodes(callback: (nodes: string[]) => void, failedCallback?: (error: any) => void): void;

        /**
         * Retrieves list of param names from the ROS Parameter Server.
         *
         * @param callback function with params:
         *  * params - array of param names.
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getParams(callback: (params: string[]) => void, failedCallback?: (error: any) => void): void;

        /**
         * Retrieves a type of ROS topic.
         *
         * @param topic name of the topic:
         * @param callback - function with params:
         *   * type - String of the topic type
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getTopicType(topic: string, callback: (type: string) => void, failedCallback?: (error: any) => void): void;

        /**
         * Retrieves a type of ROS service.
         *
         * @param service name of service:
         * @param callback - function with params:
         *   * type - String of the service type
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getServiceType(service: string, callback: (type: string) => void, failedCallback?: (error: any) => void): void;

        /**
         * Retrieves a detail of ROS message.
         *
         * @param callback - function with params:
         *   * details - Array of the message detail
         * @param message - String of a topic type
         * @param failedCallback - the callback function when the ros call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getMessageDetails(
            message: Message,
            callback: (detail: any) => void,
            failedCallback?: (error: any) => void,
        ): void;

        /**
         * Decode a typedefs into a dictionary like `rosmsg show foo/bar`
         *
         * @param defs - array of type_def dictionary
         */
        decodeTypeDefs(defs: any): void;

        /**
         * Retrieves a detail of ROS service request.
         *
         * @param service name of service:
         * @param callback - function with params:
         *   * type - String of the service type
         * @param failedCallback - the callback function when the service call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        getServiceRequestDetails(
            service: string,
            callback: (type: string) => void,
            failedCallback?: (error: any) => void,
        ): void;
    }

    export class Message {
        /**
         * Message objects are used for publishing and subscribing to and from topics.
         *
         * @constructor
         * @param values - object matching the fields defined in the .msg definition file
         */
        constructor(values: any);
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
        constructor(options: { ros: Ros; name: string });

        /**
         * Fetches the value of the param.
         *
         * @param callback - function with the following params:
         *  * value - the value of the param from ROS.
         */
        get(callback: (response: any) => void): void;

        /**
         * Sets the value of the param in ROS.
         *
         * @param value - value to set param to.
         * @param callback - function with params:
         *   * response - the response from the service request
         */
        set(value: any, callback?: (response: any) => void): void;

        /**
         * Delete this parameter on the ROS server.
         */
        delete(callback: (response: any) => void): void;
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
        constructor(data: { ros: Ros; name: string; serviceType: string });

        // getter
        public name: string;
        // getter
        public serviceType: string;

        /**
         * Calls the service. Returns the service response in the callback.
         *
         * @param request - the ROSLIB.ServiceRequest to send
         * @param callback - function with params:
         *   * response - the response from the service request
         * @param failedCallback - the callback function when the service call failed (optional). Params:
         *   * error - the error message reported by ROS
         */
        callService(
            request: ServiceRequest,
            callback: (response: any) => void,
            failedCallback?: (error: any) => void,
        ): void;

        /**
         * Advertise this service and call the callback each time a client calls it.
         *
         * @param callback - function with the following params:
         *   * request - the service request data
         *   * response - the data which should be sent back to the caller
         */
        advertise(callback: (request: any, response: any) => void): void;

        /**
         * Unadvertise a previously advertised service
         */
        unadvertise(): void;
    }

    export class ServiceRequest {
        /**
         * A ServiceRequest is passed into the service call.
         *
         * @constructor
         * @param values - object matching the fields defined in the .srv definition file
         */
        constructor(values?: any);
    }

    export class ServiceResponse {
        /**
         * A ServiceResponse is returned from the service call.
         *
         * @constructor
         * @param values - object matching the fields defined in the .srv definition file
         */
        constructor(values?: any);
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
        constructor(options: {
            ros: Ros;
            name: string;
            messageType: string;
            compression?: string;
            throttle_rate?: number;
            queue_size?: number;
            latch?: boolean;
            queue_length?: number;
        });

        // getter
        public name: string;
        // getter
        public messageType: string;

        /**
         * Every time a message is published for the given topic, the callback
         * will be called with the message object.
         *
         * @param callback - function with the following params:
         *   * message - the published message
         */
        subscribe(callback: (message: Message) => void): void;

        /**
         * Unregisters as a subscriber for the topic. Unsubscribing stop remove
         * all subscribe callbacks. To remove a call back, you must explicitly
         * pass the callback function in.
         *
         * @param callback - the optional callback to unregister, if
         *     * provided and other listeners are registered the topic won't
         *     * unsubscribe, just stop emitting to the passed listener
         */
        unsubscribe(callback?: (callback: (message: Message) => void) => void): void;

        /**
         * Registers as a publisher for the topic.
         */
        advertise(): void;

        /**
         * Unregisters as a publisher for the topic.
         */
        unadvertise(): void;

        /**
         * Publish the message.
         *
         * @param message - A ROSLIB.Message object.
         */
        publish(message: Message): void;
    }

    export class TFClient {
        /**
         * A TF Client that listens to TFs from tf2_web_republisher.
         *
         * @constructor
         * @param options - object with following keys:
         *   * ros - the ROSLIB.Ros connection handle
         *   * fixedFrame - the fixed frame, like /base_link
         *   * angularThres - the angular threshold for the TF republisher
         *   * transThres - the translation threshold for the TF republisher
         *   * rate - the rate for the TF republisher
         *   * updateDelay - the time (in ms) to wait after a new subscription to update the TF republisher's list of TFs
         *   * topicTimeout - the timeout parameter for the TF republisher
         *   * serverName (optional) - the name of the tf2_web_republisher server
         *   * repubServiceName (optional) - the name of the republish_tfs service (non groovy compatibility mode only) default: '/republish_tfs'
         */
        constructor(options: {
            ros: Ros;
            fixedFrame?: string;
            angularThres?: number;
            transThres?: number;
            rate?: number;
            updateDelay?: number;
            topicTimeout?: number;
            serverName?: string;
            repubServiceName?: string;
        });

        /**
         * Unsubscribe and unadvertise all topics associated with this TFClient.
         */
        dispose(): void;

        /**
         * Process the service response and subscribe to the tf republisher topic.
         *
         * @param response - the service response containing the topic name
         */
        processResponse(response: any): void;

        /**
         * Process the incoming TF message and send them out using the callback functions
         * @param tf - the TF message from the server
         */
        processTfArray(tf: any): void;

        /**
         * Subscribe to the given TF frame.
         * @param frameId - the TF frame to subscribe to
         * @param callback - function with params:
         *  * transform - the transform data
         */
        subscribe(frameId: string, callback: (transform: Transform) => void): void;

        /**
         * Unsubscribe from the given TF frame.
         *
         * @param frameId - the TF frame to unsubscribe from
         * @param callback - the callback function to remove
         */
        unsubscribe(frameId: string, callback?: (transform: Transform) => void): void;

        /**
         * Create and send a new goal (or service request) to the tf2_web_republisher based on the current list of TFs.
         */
        updateGoal(): void;
    }

    export class Transform {
        /**
         * A Transform in 3-space. Values are copied into this object.
         *
         * @constructor
         * @param options - object with following keys:
         *   * translation - the Vector3 describing the translation
         *   * rotation - the ROSLIB.Quaternion describing the rotation
         */
        constructor(options?: { translation?: Vector3Like | null; rotation?: QuaternionLike | null });

        // getters
        public translation: Vector3;
        public rotation: Quaternion;
        /**
         * Clone a copy of this transform.
         *
         */
        clone(): Transform;
    }

    export class Vector3 implements Vector3Like {
        /**
         * A 3D vector.
         *
         * @constructor
         * @param options - object with following keys:
         *   * x - the x value
         *   * y - the y value
         *   * z - the z value
         */
        constructor(options?: { x?: number | null; y?: number | null; z?: number | null } | null);

        // getters
        public x: number;
        public y: number;
        public z: number;

        /**
         * Set the values of this vector to the sum of itself and the given vector.
         *
         * @param v - the vector to add with
         */
        add(v: Vector3): void;

        /**
         * Clone a copy of this vector.
         */
        clone(): Vector3;

        /**
         * Multiply the given Quaternion with this vector.
         * @param q - the quaternion to multiply with
         */
        multiplyQuaternion(q: Quaternion): void;

        /**
         * Set the values of this vector to the difference of itself and the given vector.
         *
         * @param v - the vector to subtract with
         */
        subtract(v: Vector3): void;
    }

    export class Quaternion implements QuaternionLike {
        /**
         * A Quaternion.
         *
         * @constructor
         * @param options - object with following keys:
         *   * x - the x value
         *   * y - the y value
         *   * z - the z value
         *   * w - the w value
         */
        constructor(options?: { x?: number | null; y?: number | null; z?: number | null; w?: number | null } | null);

        // getters
        public x: number;
        public y: number;
        public z: number;
        public w: number;

        /**
         * Clone a copy of this quaternion.
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
         * @param q - the quaternion to multiply with
         */
        multiply(q: Quaternion): void;

        /**
         * Return the norm of this quaternion.
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
         *  @constructor
         *  @param options - object with following keys:
         *   * position - the Vector3 describing the position
         *   * orientation - the ROSLIB.Quaternion describing the orientation
         */
        constructor(
            options?: {
                position?: Vector3Like | null;
                orientation?: QuaternionLike | null;
            } | null,
        );

        /**
         * Apply a transform against this pose.
         *
         * @param tf the transform
         */
        applyTransform(tf: Transform): void;

        /**
         * Clone a copy of this pose.
         *
         * @returns the cloned pose
         */
        clone(): Pose;
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
        constructor(options: { ros: Ros; serverName: string; actionName: string; timeout: number });

        /**
         * Cancel all goals associated with this ActionClient.
         */
        cancel(): void;
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
        constructor(options: { actionClient: ActionClient; goalMessage: any });

        /**
         * Connect callback functions to goal based events
         *
         * @param eventName Name of event ('timeout', 'status', 'feedback', 'result')
         * @param callback Callback function executed on connected event
         */
        on(eventName: string, callback: (event: any) => void): void;

        /**
         * Send the goal to the action server.
         *
         * @param timeout (optional) - a timeout length for the goal's result
         */
        send(timeout?: number): void;

        /**
         * Cancel the current goal.
         */
        cancel(): void;
    }

    export class UrdfColor {
        r: number;
        g: number;
        b: number;
        a: number;
        /**
         * A Color element in a URDF.
         *
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
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
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
         */
        constructor(options: { xml: Node });

        isLink(): boolean;
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
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
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
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
         */
        constructor(options: { xml: Node });
    }

    export class UrdfBox {
        type: typeof URDF_BOX;
        dimension: Vector3;

        /**
         * A Box element in a URDF.
         *
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
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
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
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
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
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
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
         */
        constructor(options: { xml: Node });
    }

    export class UrdfLink {
        name: string;
        visuals: UrdfVisual[];

        /**
         * A Link element in a URDF.
         *
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
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
         * @constructor
         * @param options - object with following keys:
         *  * xml - the XML element to parse
         *  * string - the XML element to parse as a string
         */
        constructor(options: { xml: Node; string?: string | null } | { string: string });
    }
}
