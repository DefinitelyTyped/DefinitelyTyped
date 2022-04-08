import * as React from "react";
import { ReactLIAttr } from "../../../typings/shared";

export interface TreeNodeStandaloneProps extends Omit<ReactLIAttr, 'aria-expanded' | 'onClick' | 'onSelect'> {
    active?: number | string;
    depth?: number;
    isExpanded?: boolean;
    label?: React.ReactNode;
    onClick?(event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>): void;
    onNodeFocusEvent?(event: React.FocusEvent<HTMLLIElement>): void;
    onSelect?(
        event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
        node: { id: string; label: TreeNodeStandaloneProps['label']; value: TreeNodeStandaloneProps['value'] },
    ): void;
    onToggle?(
        event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
        node: {
            id: string;
            isExpanded: boolean;
            label: TreeNodeStandaloneProps['label'];
            value: TreeNodeStandaloneProps['value'];
        },
    ): void;
    onTreeSelect?(
        event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
        node: { id: string; label: TreeNodeStandaloneProps['label']; value: TreeNodeStandaloneProps['value'] },
    ): void;
    renderIcon?: any;
    selected?: ReadonlyArray<number | string>;
    value?: string;
}

type TreeViewProvidedProps = 'active' | 'depth' | 'onNodeFocusEvent' | 'onTreeSelect' | 'selected' | 'tabIndex';
export interface TreeNodeProps extends Omit<TreeNodeStandaloneProps, TreeViewProvidedProps> {}

declare const TreeNode: React.FC<TreeNodeProps>;

export default TreeNode;
