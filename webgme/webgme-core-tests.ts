/// <reference path="./index.d.ts" />
/// <reference path="../node/index.d.ts" />

import * as fs from "fs";
import * as stream from "stream";
import PluginBase = require("plugin/PluginBase");

/** 
 * The following items are not created directly by the
 * plugin driver.
 *
 * self is an instance of the PluginBase class.
 */
let self = new PluginBase();
let node = new Node();
let connNode = new Node();
let sourceNode = new Node();
let destinationNode = new Node();

/**
 * These tests are derived from...
 * https://github.com/webgme/webgme/wiki/GME-Core-API
 * 
 * Nearly all core functions takes a CoreNode as its first argument. 
 * When using the Core API externally each CoreNode corresponds 
 * to one node/model in the project tree. 
 * To access data from the node the Core API should be used 
 * and the properties on the CoreNode itself should 
 * not be accessed or modified directly.
 * 
 * Below follows a handpicked selection of basic core functions.
 */

/**
 * https://github.com/webgme/webgme/wiki/GME-Core-API#common-properties
 */
function test_core_common_properties() {
    let path = self.core.getPath(node);
    let relid = self.core.getRelid(node);
    let guid = self.core.getGuid(node);
}

/**
https://github.com/webgme/webgme/wiki/GME-Core-API#attributes
*/
function test_core_attributes() {
    let name = self.core.getAttribute(node, 'name');
    self.core.setAttribute(node, 'name', 'newName');
    let attributeNames = self.core.getAttributeNames(node);
}

/**
https://github.com/webgme/webgme/wiki/GME-Core-API#registries
*/
function test_core_registries() {
    let position = self.core.getRegistry(node, 'position');
    self.core.setRegistry(node, 'position', { x: 100, y: 100 });
    let registryNames = self.core.getRegistryNames(node);
}

/**
 * https://github.com/webgme/webgme/wiki/GME-Core-API#inheritance
 */
function test_core_inheritance() {
    let baseNode = self.core.getBase(node);
    let fcoNode = self.core.getBaseRoot(node);
    let aMetaNode = self.core.getBaseType(node);
}

/**
 * https://github.com/webgme/webgme/wiki/GME-Core-API#the-traverse-method
 */
function test_core_containment_traversal() {
    function atNode(node: Core.Node, done: Core.VoidFn) {
        let metaNode = self.core.getBaseType(node);
        let nodeName = self.core.getAttribute(node, 'name');
        // Library-roots do not have a meta-type either.
        let metaName = metaNode ? self.core.getAttribute(metaNode, 'name') : ':LibraryRoot:';

        console.log(`${nodeName} at ${self.core.getPath(node)} is of meta type ${metaName}`);
        done();
    }
    // Traversal from the root-node (itself will be excluded since it doesn't have a meta-type).
    self.core.traverse(self.rootNode, { excludeRoot: true }, atNode, (err): void => {
        if (err) {
            // Something went wrong!
            // Handle the error and return.
        }
        // At this point we have successfully visited all nodes.
    });
}

/** 
 * https://github.com/webgme/webgme/wiki/GME-Core-API#containment-methods
 */
function test_core_containment_methods() {
    let childrenPaths = self.core.getChildrenPaths(node);
    let parentNode = self.core.getParent(node);
    let baseNode = self.core.getBase(node);
    let rootNode = self.core.getRoot;

    // Loading the children however requires data that is not (necessarily) available
    self.core.loadChildren(node, (err, children) => {
        if (err) {
            // Something went wrong!
            // Handle the error and return.
        }
        // We have an array of the children and can get information from them.
        for (let child of children) {
            console.log(self.core.getAttribute(child, 'name'));
        }
    });
    // This line will be hit before the callback of loadChildren

    // Create a new node, the new node is available directly.
    let params = {
        parent: parentNode,
        base: baseNode
    };

    var newNode = self.core.createNode(params);

    // Copy a node.
    var copiedNode = self.core.copyNode(node, parentNode);

    // Delete a node.
    self.core.deleteNode(newNode);

    // Loading nodes by paths
    // N.B. the path provided is relative the node in the first argument,
    // here the root-node is passed to the path is the absolute (i.e. same
    // as self.core.getPath(someNode);)
    self.core.loadByPath(rootNode, '/1', (err, node) => {
        if (err) {
            // Handle error
        }
        // Here we have access to the node.
    });

    // Loading an entire sub-tree of nodes 
    // N.B. this requires all nodes to be loaded at the same time.
    // For larger models core.traverse is preferred.
    self.core.loadSubTree(node, (err, nodes) => {
        if (err) {
            // Handle error
        }
        // Here we have access to all the nodes that is contained in node
        // at any level.
    });
}

/**
 * https://github.com/webgme/webgme/wiki/GME-Core-API#pointers-and-connections
 */

function test_core_pointers_connections() {

    // 
    let isConn = self.core.isConnection(connNode);

    // Get the path of the node that is pointed to, via 'src', from connNode.
    // (Here the paths to the source node of the connection.)
    var sourceNodePath = self.core.getPointerPath(connNode, 'src');

    // Load the node node that is pointed to, via 'src', from connNode.
    // (Here the source node of the connection.)
    self.core.loadPointer(connNode, 'src', (err, sourceNode) => {
        if (err) {
            // Handle error
        }
        // Here we have access to the sourceNode.
    });

    //  Get the paths of the nodes with pointers named 'src' to the sourceNode.
    // (Here the paths to the connections that have sourceNode as source.)
    let connectionPaths = self.core.getCollectionPaths(sourceNode, 'src');

    // Load the nodes with pointers named 'src' to the sourceNode.
    // (Here the connections that have sourceNode as source.)
    self.core.loadCollection(sourceNode, 'src', (err, connNodes) => {
        if (err) {
            // Handle error
        }
        // connNodes is an array (a node can have multiple connections/pointers)
        // connNode above is within connNodes.
    });

    // Creating new pointers.
    // (Since we create both the 'src' and 'dst' this will be rendered as a connection between the two nodes.)
    self.core.setPointer(connNode, 'src', sourceNode);
    self.core.setPointer(connNode, 'dst', destinationNode);
}