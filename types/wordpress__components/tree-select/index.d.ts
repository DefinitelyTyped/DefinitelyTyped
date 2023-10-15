import { ComponentType } from "react";

import SelectControl from "../select-control";

declare namespace TreeSelect {
    interface Props extends Omit<SelectControl.Props<string>, "options" | "value"> {
        /**
         * If this property is added, an option will be added with this label
         * to represent empty selection.
         */
        noOptionLabel?: string | undefined;
        selectedId?: string | undefined;
        /**
         * A `Tree` with the possible nodes the user can select.
         */
        tree?: Tree | undefined;
    }
    interface TreeNode {
        /**
         * Unique identifier for tree node.
         */
        id: string;
        /**
         * Human readable name for the tree node.
         */
        name: string;
        children?: readonly TreeNode[] | undefined;
    }
    type Tree = readonly TreeNode[];
}
declare const TreeSelect: ComponentType<TreeSelect.Props>;

export default TreeSelect;
