import * as React from "react";
import { ReactAttr } from "../../../typings/shared";
import TreeNode, { TreeNodeStandaloneProps } from "./TreeNode";

type ExcludedAttributes = "aria-label" | "aria-labelledby" | "onSelect" | "ref" | "role";
export interface TreeViewProps extends Omit<ReactAttr<HTMLUListElement>, ExcludedAttributes> {
    active?: number | string;
    hideLabel?: boolean;
    label: string;
    multiselect?: boolean;
    onSelect?: TreeNodeStandaloneProps["onSelect"];
    selected: ReadonlyArray<number | string>;
    size?: "compact" | "default";
}

interface TreeViewFC extends React.FC<TreeViewProps> {
    readonly TreeNode: typeof TreeNode;
}

declare const TreeView: TreeViewFC;

export default TreeView;
