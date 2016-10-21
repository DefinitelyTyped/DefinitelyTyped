/**
 * This is an extract from a Darpa project.
 */

/// <reference path="./index.d.ts" />
/// <reference path="../node/index.d.ts" />
/// <reference path="../bluebird/bluebird-2.0.d.ts" />

import PluginBase = require("plugin/PluginBase");

import Promise = require("bluebird");

type DictionaryAny = { [key: string]: any };

/**
* Visit the node and perform the function.
* Related example using traverse.
* https://github.com/webgme/xmi-tools/blob/master/src/plugins/XMIExporter/XMIExporter.js#L430    
*/
function test_core_containment_traversal_complete() {
    const BLANK = "";
    const NULL_OBJECT = "_OBJECT"
    const NULL_GUID = "00000000-0000-0000-0000-000000000000";

    function getEdgesModel(sponsor: PluginBase, core: Core.Core,
        _rootNode: Core.Node, _metaNode: Node): Core.Dictionary {

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
        let visitFn = (node: Node, done: Core.VoidFn): void => {
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
                    let parent: Core.Node = core.getParent(node);
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
                Promise
                    .try(() => {
                        return core.getPointerNames(node);
                    })
                    .map((ptrName: string) => {
                        let targetPathRaw = core.getPointerPath(node, ptrName);
                        if (typeof targetPathRaw !== "string") { return; }

                        let targetPath: string = targetPathRaw;
                        Promise
                            .try(() => {
                                return core.loadByPath(sponsor.rootNode, targetPath);
                            })
                            .then((targetNode: Node) => {
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
                            });
                    });

                // get sets & inv_set
                Promise
                    .try(() => {
                        return core.getValidSetNames(node);
                    })
                    .map((setName: string) => {
                        let targetMemberPathsRaw = core.getMemberPaths(node, setName);
                        for (let targetMemberPath of targetMemberPathsRaw) {
                            if (typeof targetMemberPath !== "string") { return; }
                            let targetPath: string = targetMemberPath;

                            Promise
                                .try(() => {
                                    return core.loadByPath(sponsor.rootNode, targetPath);
                                })
                                .then((targetNode: Node) => {
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
                                })
                                .catch((err: Error) => {
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
                                });
                        }
                    });
            } finally {
                done();
            }
        };
        return Promise
            .try<void>(() => {
                return core.traverse(sponsor.rootNode,
                    { excludeRoot: false },
                    visitFn);
            })
            .then(() => {
                return nodeGuidMap;
            });
    }
}

