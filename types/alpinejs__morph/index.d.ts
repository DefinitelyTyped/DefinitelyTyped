import type { PluginCallback } from "alpinejs";

declare const morphPlugin: PluginCallback;

export default morphPlugin;
type VoidFunction = () => void;
interface MorphOptions {
    /**
     * Callback called BEFORE updating elements
     * @param from the Nodes to be updated
     * @param to the Nodes to be updated to
     * @param childrenOnly skip updating the Nodes itself but do update its children
     * @param skip skip updating this Nodes and its child tree
     */
    updating: (from: Node, to: Node, childrenOnly: VoidFunction, skip: VoidFunction) => void;
    /**
     * Callback called AFTER updating elements
     * @param from the Node that was updated
     * @param to the Node that was referenced for updates
     */
    updated: (from: Node, to: Node) => void;
    /**
     * Callback called BEFORE removing elements
     * @param toRemove the Node to be removed
     * @param skip skip removing this Node and its child tree
     */
    removing: (toRemove: Node, skip: VoidFunction) => void;
    /**
     * Callback called AFTER removing elements
     * @param from the Node that was removed
     */
    removed: (from: Node) => void;
    /**
     * Callback called BEFORE adding elements
     * @param toAdd the Node to be added
     * @param skip skip adding this Node and its child tree
     */
    adding: (toAdd: Node, skip: VoidFunction) => void;
    /**
     * Callback called AFTER adding elements
     * @param toCloned the Node that was added
     */
    added: (toCloned: Node) => void;
    /**
     * Callback used to key Nodes for comparison. Existing Nodes and new Nodes with the same key will be treated as the same, so that they are updated with the shorted effort instead of removed and re-added.
     * By default uses the elements `id` attribute.
     * @param el the Node to be keyed
     */
    key: (el: Node) => string;
    /**
     * Whether to use lookahead to match Nodes with the same key. If true, the algorithm will look for Nodes with the same key amongst sibling Nodes.
     * @default true
     */
    lookahead: boolean;
}

type Morph = (from: Node, to: string | Node, options: Partial<MorphOptions>) => void;

export const morph: Morph;

declare module "alpinejs" {
    interface Alpine {
        morph: Morph;
    }
}
