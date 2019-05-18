import { ElementHandle } from "./JSHandle";

/**
 * The Accessibility class provides methods for inspecting Chromium's accessibility tree.
 * The accessibility tree is used by assistive technology such as screen readers.
 * Accessibility is a very platform-specific thing. On different platforms,
 * there are different screen readers that might have wildly different output.
 * Blink - Chrome's rendering engine - has a concept of "accessibility tree",
 * which is than translated into different platform-specific APIs.
 * Accessibility namespace gives users access to the Blink Accessibility Tree.
 * Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or
 * by screen readers themselves. By default, Puppeteer tries to approximate this filtering,
 * exposing only the "interesting" nodes of the tree.
 */
export interface Accessibility {
    snapshot(options?: SnapshopOptions): Promise<AXNode>;
}

export interface SnapshopOptions {
    /**
     * Prune uninteresting nodes from the tree.
     * @default true
     */
    interestingOnly?: boolean;
    /**
     * The root DOM element for the snapshot. Defaults to the whole page.
     * @since 1.16.0
     */
    root?: ElementHandle;
}

export interface AXNode {
    /**
     * The role.
     */
    role: string;
    /**
     * A human readable name for the node.
     */
    name: string;
    /**
     * The current value of the node.
     */
    value: string | number;
    /**
     * An additional human readable description of the node.
     */
    description: string;
    /**
     * Keyboard shortcuts associated with this node.
     */
    keyshortcuts: string;
    /**
     * A human readable alternative to the role.
     */
    roledescription: string;
    /**
     * A description of the current value.
     */
    valuetext: string;
    /**
     * Whether the node is disabled.
     */
    disabled: boolean;
    /**
     * Whether the node is expanded or collapsed.
     */
    expanded: boolean;
    /**
     * Whether the node is focused.
     */
    focused: boolean;
    /**
     * Whether the node is modal.
     */
    modal: boolean;
    /**
     * Whether the node text input supports multiline.
     */
    multiline: boolean;
    /**
     * Whether more than one child can be selected.
     */
    multiselectable: boolean;
    /**
     * Whether the node is read only.
     */
    readonly: boolean;
    /**
     * Whether the node is required.
     */
    required: boolean;
    /**
     * Whether the node is selected in its parent node.
     */
    selected: boolean;
    /**
     * Whether the checkbox is checked, or "mixed".
     */
    checked: boolean | "mixed";
    /**
     * Whether the toggle button is checked, or "mixed".
     */
    pressed: boolean | "mixed";
    /**
     * The level of a heading.
     */
    level: number;
    /**
     * The minimum value in a node.
     */
    valuemin: number;
    /**
     * The maximum value in a node.
     */
    valuemax: number;
    /**
     * What kind of autocomplete is supported by a control.
     */
    autocomplete: string;
    /**
     * What kind of popup is currently being shown for a node.
     */
    haspopup: string;
    /**
     * Whether and in what way this node's value is invalid.
     */
    invalid: string;
    /**
     * Whether the node is oriented horizontally or vertically.
     */
    orientation: string;
    /**
     * Child nodes of this node, if any.
     */
    children: AXNode[];
}
