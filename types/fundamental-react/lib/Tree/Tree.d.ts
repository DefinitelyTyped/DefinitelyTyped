import * as React from "react";

export interface TreeProps {
    /** React nodes to render within. Nest TreeNodes to create multiple levels in the Tree. */
    children: React.ReactNode;
    /** Set to true to make all TreeNodes have styles for interaction states (hover, selected, active). */
    active?: boolean;
    /** Set to true to apply compact styles. */
    compact?: boolean;
    /** Set to a String value to display when Tree is empty, i.e. has no children. */
    emptyText?: string;
    /** Set to a String value to use as id for root node which is an <ul>. If unset, a generate value will be used. */
    id?: string;
    /** Set to true to remove borders from all level 1 nodes. */
    noBorders?: boolean;
    /**
     * Set to multi to enable selecting multiple selection of TreeNodes with Checkboxes.
     * <br>
     * Set to single to enable selecting only one of the TreeNodes at a time, with radio buttons.
     */
    selection?: "multi" | "single";
    /**
     * Set to left to show selection control before node contents.
     * <br>
     * Set to right to show selection control after node contents.
     * default is "left"
     */
    selectionPosition?: "left" | "right";
}

export interface TreeNodeProps extends React.HTMLAttributes<HTMLLIElement> {
    /** React nodes to render as TreeNodes actions. Expecting Buttons here. */
    actions?: React.ReactNode;
    /** Set to true to make this particular TreeNode have styles for interaction states (hover, selected, active). */
    active?: boolean;
    /** An Array of string values to representing icon names to display before node contents. */
    glyphsAfter?: string[];
    /** An Array of string values to representing icon names to display before after contents. */
    glyphsBefore?: string[];
    /** Set to one of the valid values to highlight the row with the corresponding semantic color. */
    highlight?: "default" | "error" | "success" | "warning";
    /** Set to a String value to use as id for this node which is a <li>. If unset, a generate value will be used. */
    id?: string;
    /** Set to true to show styles representing that the node has been navigate to. */
    isNavigated?: boolean;
    /** Set to a String value to use as href and make this node an <a> tag with appropriate styles. */
    link?: string;
    /** Object to be received in the onExpandToggle and onSelectionChange callbacks of this node. */
    nodeData?: object;
    /** Additional props to be spread to the selection control, if any. */
    selectionProps?: object;
    /** Set to true to make node contents wrap to next line(s). */
    wrapContent?: boolean;
    /** Callback function; triggered when a node's expansion button is clicked. */
    onExpandToggle?: (event: React.SyntheticEvent, expansion: boolean, nodeData: object) => void;
    /**
     * Callback function; triggered when a node is selected (if selection is enabled)
     * <br>
     * multi: selection state changes
     * <br>
     * single: is selected
     */
    onSelectionChange?: (event: React.SyntheticEvent, checked: boolean, nodeData: object) => void;
}

declare class Tree extends React.Component<TreeProps> {
    static Node: React.ComponentClass<TreeNodeProps>;
}

export default Tree;
