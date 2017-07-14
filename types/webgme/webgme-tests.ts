/**
 * In actual usage the MetaDataStr would most likely
 * be initialized with an import...
 *
  import MetaDataStr = require("text!metadata.json");
 *
 * Which would require a declaration, like...
 * `text.d.ts`
 *
  declare module "text!*" {
    var text: string;
    export = text;
  }
 *
 */
const MetaDataStr = "";

import PluginBase = require("plugin/PluginBase");

import * as fs from "fs";
import * as stream from "stream";
import * as Common from "webgme/common";

/**
 * The following items are not created directly by the
 * plugin driver.
 *
 * self is an instance of the PluginBase class.
 */
let self = new PluginBase();
let node = new Common.Node();
let connNode = new Common.Node();
let sourceNode = new Common.Node();
let destinationNode = new Common.Node();

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
    function atNode(node: Common.Node, done: Common.VoidFn) {
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


/**
 * https://github.com/webgme/webgme/wiki/GME-Blob-Storage-API
 *
 * File-like objects/artifacts
 * (which are neither a meta archetype model, nor an instance model)
 * are stored separately from the WebGME meta-models and models.
 * An example of such an artifact would be a resource
 * file that is associated with a model
 * (e.g., data for an instance model, or a generated artifact from analyzing a model).
 *
 * One reason for treating these objects differently is that they do not conform to the data model,
 * and they might not be well-suited for storage in a database
 * (the Blob is suited to handle binary objects of any size and structure).
 */

/**
 * https://github.com/webgme/webgme/wiki/GME-Blob-Storage-API#usage
 */
function test_client_creating_an_instance() {
    // let client = new GME.classes.Client(GME.gmeConfig);
}

/**
 * Add the remaining tests.
 */


/**
 * https://github.com/webgme/webgme/wiki/GME-Blob-Storage-API
 *
 * File-like objects/artifacts
 * (which are neither a meta archetype model, nor an instance model)
 * are stored separately from the WebGME meta-models and models.
 * An example of such an artifact would be a resource
 * file that is associated with a model
 * (e.g., data for an instance model, or a generated artifact from analyzing a model).
 *
 * One reason for treating these objects differently is that they do not conform to the data model,
 * and they might not be well-suited for storage in a database
 * (the Blob is suited to handle binary objects of any size and structure).
 */



/**
 * The following items are not created directly by the
 * plugin driver.
 *
 * self is an instance of the PluginBase class.
 */

interface DataModel {
    stateMachine: {
        name: string,
        initialState: string | null,
        finalStates: any[], states: any[]
    }
};

/**
 * https://github.com/webgme/webgme/wiki/GME-Blob-Storage-API#usage
 */
function test_client_using_a_blob() {

    class SamplePlugin extends PluginBase {
        pluginMetadata: any;
        private dataModel: DataModel;

        constructor() {
            super();
            this.pluginMetadata = JSON.parse(MetaDataStr);
        }

        extractDataModel(): DataModel {
            return { stateMachine: { name: "dm", initialState: null, finalStates: [], states: [] } };
        }

        async main(mainHandler: Core.ResultCallback): Promise<string[]> {
            let artifact: Core.Artifact;

            const dataModel = this.extractDataModel();
            var dataModelStr = JSON.stringify(dataModel, null, 4);
            this.dataModel = dataModel;

            this.logger.info('Extracted dataModel', dataModelStr);

            const jsonFileHash = await self.blobClient.putFile('dataModel.json', dataModelStr);
            // Add link from result to this file.
            self.result.addArtifact(jsonFileHash);

            // Create a complex artifact, with links to multiple files.
            artifact = self.blobClient.createArtifact('simulator');

            let programJS = "some javascript file";
            self.logger.info('program.js', programJS);

            return artifact.addFilesAsSoftLinks({
                'program.js': programJS,
                'index.html': this.pluginMetadata
            });
        }
    }
}

/**
 * Add the remaining tests.
 */

/**
 * This is an extract from a Darpa project.
 */


type DictionaryAny = { [key: string]: any };

/**
* Visit the node and perform the function.
* Related example using traverse.
* https://github.com/webgme/xmi-tools/blob/master/src/plugins/XMIExporter/XMIExporter.js#L430
*/
async function test_core_containment_traversal_complete() {
    const BLANK = "";
    const NULL_OBJECT = "_OBJECT"
    const NULL_GUID = "00000000-0000-0000-0000-000000000000";

    async function getEdgesModel(sponsor: PluginBase, core: Core.Core,
        _rootNode: Common.Node, _metaNode: Common.Node): Promise<Core.Dictionary> {

        let fcoName = core.getAttribute(core.getFCO(sponsor.rootNode), "name");
        let languageName = core.getAttribute(sponsor.rootNode, "name");
        sponsor.logger.info(`get model edges : ${languageName} : ${fcoName}`);

        let rootEntry
            = {
                "version": "0.0.1",
                "pointers": {}, "inv_pointers": {},
                "sets": {}, "inv_sets": {},
                "base": {
                    "name": NULL_OBJECT,
                    "guid": NULL_GUID,
                },
                "name": {
                    "name": NULL_OBJECT, "uriExt": BLANK, "uriPrefix": BLANK,
                    "uriName": BLANK, "uriGen": BLANK
                },
                "type": {
                    "domain": languageName,
                    "meta": NULL_GUID, "root": NULL_GUID, "base": NULL_GUID, "parent": NULL_GUID
                },
                "attributes": {},
                "children": {},
                "guid": NULL_GUID
            };
        let nodeGuidMap: Core.Dictionary = {
            [NULL_GUID]: rootEntry
        };

        sponsor.logger.info("A dictionary: look up nodes based on their path name.");
        let path2entry: Core.Dictionary = { [BLANK]: rootEntry };

        /**
         * A filter mechanism to effectively eliminate containment branches.
         * Any path included in the prune-list will be the root of a
         * pruned subtree.
         */
        let pruneList: string[] = [];

        /**
         * The base node makes reference to inheritance.
         * The parent node makes reference to containment.
         * The traverse function follows the containment tree.
         * @type {[type]}
         */
        let visitFn = async (node: Node, done: Common.VoidFn): Promise<void> => {
            try {
                let core = sponsor.core;
                let nodePath: string = core.getPath(node);

                let prunedRootPath: string | null = null;
                for (let pl of pruneList) {
                    if (nodePath.indexOf(pl) !== 0) { continue; }
                    // console.log(`pruned: ${nodePath}::${pl}`);
                    prunedRootPath = pl;
                }

                let nodeNameAttr = core.getAttribute(node, "name");
                if (typeof nodeNameAttr !== "string") { return; }

                // sponsor.logger.info(`visitor function with ${nodeNameAttr}`);

                let baseNodeGuid: string = core.getGuid(core.getBase(node));
                let baseNodeTypeGuid: string = core.getGuid(core.getBaseType(node));
                let baseNodeRootGuid: string = core.getGuid(core.getBaseRoot(node));

                // set the nodes sourceGuid
                let sourceGuid: string = core.getGuid(node);
                let sourceEntry
                    = {
                        "guid": sourceGuid,
                        "name": {},
                        "type": {
                            "domain": languageName,
                            "meta": baseNodeTypeGuid,
                            "root": baseNodeRootGuid,
                            "base": baseNodeGuid
                        },
                        "pointers": {}, "inv_pointers": {},
                        "sets": {}, "inv_sets": {},
                        "base": {
                            "name": NULL_OBJECT,
                            "guid": NULL_GUID
                        },
                        "attributes": {},
                        "children": {}
                    };
                nodeGuidMap[sourceGuid] = sourceEntry;

                let metaName: string;
                let metaNodeGuid: string;
                if (node === sponsor.rootNode) {
                    metaName = ":Root:";
                    sourceEntry.type = {
                        "domain": BLANK,
                        "meta": NULL_GUID,
                        "root": NULL_GUID,
                        "base": NULL_GUID
                    };
                    metaNodeGuid = NULL_GUID;
                } else if (core.isLibraryRoot(node)) {
                    metaName = ":LibraryRoot:";
                    metaNodeGuid = core.getGuid(node);

                    // console.log(`prune: ${nodePath}`);
                    pruneList.push(nodePath);
                    prunedRootPath = nodePath;
                } else {
                    let metaNameAttr = core.getAttribute(core.getBaseType(node), "name");
                    if (typeof metaNameAttr !== "string") { return; }
                    metaName = metaNameAttr;
                    metaNodeGuid = core.getGuid(core.getParent(node));
                }
                let containRel = metaName;
                path2entry[nodePath] = sourceEntry;

                // set the parent to know its child the root node has no parent
                // if a non-pruned item has a pruned parent then bring it in.
                if (node !== sponsor.rootNode) {
                    let parent: Common.Node = core.getParent(node);
                    let parentPath: string = core.getPath(parent);

                    let parentData = path2entry[parentPath];
                    let children = parentData.children;
                    children[containRel] = children[containRel] || [];
                    // children[containRel].push(sourceEntry);
                    children[containRel].push(sourceGuid);
                }

                // set the nodes attributes
                core.getAttributeNames(node).forEach((attrName: string) => {
                    let attrValueRaw = core.getAttribute(node, attrName);
                    let attrValue: string;
                    if (typeof attrValueRaw === "string") {
                        attrValue = attrValueRaw;
                    } else {
                        attrValue = "<undefined>";
                    }
                    let sen = sourceEntry.name;
                });

                // get pointers & inv_pointers
                const ptrNames = await core.getPointerNames(node);
                Promise.all(ptrNames.map(async ptrName => {
                    let targetPathRaw = core.getPointerPath(node, ptrName);
                    if (typeof targetPathRaw !== "string") { return; }

                    let targetPath: string = targetPathRaw;
                    const targetNode = core.loadByPath(sponsor.rootNode, targetPath);
                    let targetGuid = core.getGuid(targetNode);
                    if (ptrName === "base") {

                    } else {
                        let pointers: DictionaryAny = sourceEntry.pointers;
                        let targetMetaNode = core.getBaseType(targetNode);
                        let targetMetaName = core.getAttribute(targetMetaNode, "name");
                        if (typeof targetMetaName === "string") {
                            pointers[ptrName] = {
                                name: targetMetaName,
                                guid: targetGuid
                            };
                        }
                        let targetEntry = nodeGuidMap[targetGuid];
                        if (targetEntry === undefined) {
                            targetEntry = {
                                "name": {},
                                "guid": targetGuid,
                                "pointers": {}, "inv_pointers": {},
                                "sets": {}, "inv_sets": {}
                            };
                            nodeGuidMap[targetGuid] = targetEntry;
                        }
                        targetEntry.inv_pointers[ptrName] = {
                            name: targetMetaName,
                            guid: sourceGuid
                        };
                    }
                }));

                // get sets & inv_set
                const setNames = await core.getValidSetNames(node);
                Promise.all(setNames.map(setName => {
                    let targetMemberPathsRaw = core.getMemberPaths(node, setName);
                    for (let targetMemberPath of targetMemberPathsRaw) {
                        if (typeof targetMemberPath !== "string") { return; }
                        let targetPath: string = targetMemberPath;

                        try {
                            const targetNode = core.loadByPath(sponsor.rootNode, targetPath);
                            let targetGuid = core.getGuid(targetNode);
                            let sets: DictionaryAny = sourceEntry.sets;
                            let targetMetaNode = core.getBaseType(targetNode);
                            let targetMetaName = core.getAttribute(targetMetaNode, "name");
                            if (typeof targetMetaName === "string") {
                                let load = {
                                    name: targetMetaName,
                                    guid: targetGuid
                                };
                                let sourceSet = sets[setName];
                                if (sourceSet === undefined) {
                                    sets[setName] = [load];
                                } else {
                                    sourceSet.push(load);
                                }
                            }
                            let targetEntry = nodeGuidMap[targetGuid];
                            if (targetEntry === undefined) {
                                targetEntry = {
                                    "name": {},
                                    "guid": targetGuid,
                                    "pointers": {}, "inv_pointers": {},
                                    "sets": {}, "inv_sets": {}
                                };
                                nodeGuidMap[targetGuid] = targetEntry;
                            }
                            let invSets = targetEntry.inv_sets;
                            let targetSet = invSets[setName];
                            let invLoad = {
                                name: targetMetaName,
                                guid: sourceGuid
                            };
                            if (targetSet === undefined) {
                                invSets[setName] = [invLoad];
                            } else {
                                targetSet.push(invLoad);
                            };
                        }
                        catch (err) {
                            console.log(`difficulty loading target path: ${targetPath} with err: ${err.message}`);
                            let load = {
                                "fault": `could not load member path: ${targetPath}`
                            };
                            let sets: DictionaryAny = sourceEntry.sets;
                            let sourceSet = sets[setName];
                            if (sourceSet === undefined) {
                                sets[setName] = [load];
                            } else {
                                sourceSet.push(load);
                            }
                        }
                    }
                }));
            } finally {
                done();
            }
        };

        await core.traverse(sponsor.rootNode, { excludeRoot: false }, visitFn);
        return nodeGuidMap;
    }
}

