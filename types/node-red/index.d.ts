// Type definitions for node-red 0.17
// Project: http://nodered.org
// Definitions by: Anders E. Andersen <https://github.com/andersea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import EventEmitter = require('events');

/**
 * Node-RED node creation api.
 */
export interface Red {
    /** Node lifecycle management api. Used by all nodes. */
    nodes: Nodes;
    log: any;
    settings: any;
    events: any;
    util: any;
    /** Returns the version of the running Node-RED environment. */
    version(): string;
}

/**
 * Node base type.
 *
 * See the Nodes interfaces registerType() method for information about
 * declaring node constructors in typescript.
 *
 * The id, type and name properties are available after the
 * call to RED.nodes.createNode().
 */
export interface Node extends EventEmitter, NodeProperties {
    updateWires(wires: any): void;
    context(): any;
    close(removed: any): void;
    /**
     * Send one or more messages to multiple downstream nodes.
     * It is possible to send multiple messages to any
     * one node by sending an array to the node instead
     * of a single message.
     * @param msg - array of messages and/or message bundle arrays.
     */
    send(msg: any[]): void;
    /**
     * Send a message to the downstream node. If msg is null or
     * undefined, no message is sent.
     * @param msg - optional message to send.
     */
    send(msg?: any): void;
    /**
     * Send a message to this node.
     * @param msg - optional message to send.
     */
    receive(msg: any): void;
    /**
     * Log an log-level event. Used for mundane events
     * that are part of the normal functioning of the
     * node.
     * @param msg - message to log.
     */
    log(msg: any): void;
    /**
     * Log a warn-level event. For important events
     * that the user should be made aware of.
     * @param msg - message to log.
     */
    warn(msg: any): void;
    /**
     * Log an error-level event. To trigger catch nodes on
     * the workflow call the function with msg set to the
     * original message.
     * @param logMessage - description of the error.
     * @param msg - optional payload that caused the error.
     */
    error(logMessage: any, msg?: any): void;
    /**
     * Log a debug-level event. Use this is for logging
     * internal detail not needed for normal operation.
     * @param msg - message to log.
     */
    debug(msg: any): void;
    /**
     * Log a trace-level event. Even more internal details than
     * debug-level.
     * @param msg - message to log.
     */
    trace(msg: any): void;
    metric(eventname?: any, msg?: any, metricValue?: any): void;
    /**
     * Set or clear node status.
     *
     * For more info see: https://nodered.org/docs/creating-nodes/status
     * @param status - the status to set or an empty object to clear the
     *  node status.
     */
    status(status: NodeStatus | ClearNodeStatus): void;
}

/**
 * Contains the user selected property values
 * for the node.
 *
 * This object is also known as the node's definition
 * object.
 */
export interface NodeProperties {
    /** This node's unique identifier. */
    id: NodeId;
    /** The type name for this node. */
    type: NodeType;
    /**
     * The UI visible name for this node. Many nodes
     * allow the user to pick the name and provide
     * a fallback name, if they leave it blank.
     */
    name: string;
}

/** Unique node identifier. */
export type NodeId = string;
/** Node type name. */
export type NodeType = string;

/** Node status icon color choices. */
export type StatusFill = "red" | "green" | "yellow" | "blue" | "grey";
/** Node status icon shape choices. */
export type StatusShape = "ring" | "dot";

/**
 * Object used to set the nodes status flag.
 */
export interface NodeStatus {
    /** Selects the icon color. */
    fill: StatusFill;
    /** Selects either ring or dot shape. */
    shape: StatusShape;
    /** Status label. */
    text: string;
}

/** Fancy definition that matches an empty object. */
export interface ClearNodeStatus {
    fill?: undefined;
    shape?: undefined;
    text?: undefined;
}

export interface Nodes {
    /**
     * Node constructor functions must call this to
     * finish setting up the node. Among other things
     * it adds the node credentials, which are stored
     * outside the flow.
     *
     * @param node - the node object under construction.
     * @param props - the node's properties object, aka.
     * the node instance definition.
     */
    createNode(node: Node, props: NodeProperties): void;
    /**
     * Get a node by NodeID.
     *
     * If your node uses a configuration
     * node, this call is used to get access to the running
     * instance.
     * @param id - the id of the node.
     * @return - the node matching the given id.
     */
    getNode(id: NodeId): Node;
    /**
     * Cycle through all node definition objects.
     *
     * To get the actual node, use getNode() with the id
     * from the definition object.
     */
    eachNode(callback: (node: NodeProperties) => any): void;
    /**
     * Adds a set of credentials for the given node id.
     * @param id the node id for the credentials
     * @param creds an object of credential key/value pairs
     */
    addCredentials(id: NodeId, creds: object): void;
    /**
     * Gets the credentials for the given node id.
     * @param id the node id for the credentials
     * @return the credentials
     */
    getCredentials(id: NodeId): object;
    /**
     * Deletes the credentials for the given node id.
     * @param id the node id for the credentials
     */
    deleteCredentials(id: NodeId): void;
    /**
     * Registers a node constructor.
     *
     * Node constructors should be declared as functions with an explicit this
     * argument of a type descending from the Node interface. You can extend
     * the NodeProperties interface also, to add your node's properties.
     *
     * Example, using in-line declaration:
     *
     * RED.nodes.registerType('my-node', function(this: MyNode, props: MyProperties)
     *  => { RED.nodes.createNode(this, props); ... }, { ... });
     * @param type - the string type name
     * @param constructor - the constructor function for this node type
     * @param opts - optional additional options for the node
     */
    registerType(type: string, constructor: (props: NodeProperties) => any, opts?: any): void;
}
