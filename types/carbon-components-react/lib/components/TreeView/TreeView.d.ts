import * as React from "react";
import { ReactAttr } from "../../../typings/shared";
import TreeNode, { TreeNodeStandaloneProps } from "./TreeNode";

type ExcludedAttributes = "aria-label" | "aria-labelledby" | "onSelect" | "ref" | "role";
export interface TreeViewProps extends Omit<ReactAttr<HTMLUListElement>, ExcludedAttributes> {
    active?: number | string | undefined;
    hideLabel?: boolean | undefined;
    label: string;
    multiselect?: boolean | undefined;
    onSelect?: TreeNodeStandaloneProps["onSelect"] | undefined;
    selected: ReadonlyArray<number | string>;
    size?: "compact" | "default" | undefined;
}

interface TreeViewFC extends React.FC<TreeViewProps> {
    readonly TreeNode: typeof TreeNode;
}

declare const TreeView: TreeViewFC;

export default TreeView;
