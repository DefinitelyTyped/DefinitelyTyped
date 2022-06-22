import { Change, File, Hunk } from "gitdiff-parser";
import { FunctionComponent, ReactHTML, ReactNode } from "react";
import { HunkData } from "react-diff-view";

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Diff/index.js#L107 Source}) */
export type DiffType = File["type"];
/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Diff/index.js#L108 Source}) */
export type ViewType = "unified" | "split";
/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Diff/index.js#L110 Source}) */
export type GutterType = "default" | "none" | "anchor";

/**
 * A function that receives an element and wrap it in an `<a>` element if `gutterAnchor` is enabled.
 *
 * ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Hunk/utils.js#L8-L14 Source})
 */
export type WrapInAnchor = (element: ReactNode) => ReactNode | ReactHTML["a"];

/**
 * A default render function which returns line number if possible.
 *
 * ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Hunk/utils.js#L3-L6 Source})
 */
export type RenderDefault = () => number;

/**
 * ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Hunk/CodeCell.js#L5 Source})
 */
export interface Token {
    type: string;
    value: ReactNode;
    markType: string;
    /** @deprecated normally not exist since it is deconstructed in pickRange, remove in next major release */
    properties: { className?: string };
    className: string;
    children: ReactNode;
}

export type DefaultRenderToken = (token: Token, i: number) => ReactNode;

/**
 * Read more: {@link https://github.com/otakustay/react-diff-view/blob/v2.4.10#customize-gutter README/Customize Gutter}
 */
export interface RenderGutterProps {
    /** Current change */
    change: Change;
    side: "new" | "old";
    /** A default render function which returns line number if possible. */
    renderDefault: RenderDefault;
    /** A function that receives an element and wrap it in an `<a>` element if `gutterAnchor` is enabled. */
    wrapInAnchor: WrapInAnchor;
    /** Whether this change is hovered. */
    inHoverState: boolean;
}

/**
 * ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Diff/index.js#L106-L138 Source})
 */
export interface DiffProps {
    diffType: DiffType;
    /** Can be either `"unified"` or `"split"` to determine how the diff should look like. */
    viewType: ViewType;
    /**  Hunks of diff. */
    hunks: Hunk[];
    /**
     * How the gutter cell should be rendered, can be either `"default"` to
     * render only the line number, `"none"` to hide the gutter column, or
     * `"anchor"` to render line number as an `<a>` element so user can click
     * gutter to scroll to corresponding line.
     *
     * @default 'default'
     */
    gutterType?: GutterType;
    /**
     * A function to generate a DOM `id` attribute for each change, this is
     * required when `gutterType` is set to `"anchor"`. Provided function
     * receives a `change` object as the only argument and should return either
     * a string or `undefined`, if `undefined` is returned no `id` attribute
     * will be placed on DOM. The `id` attribute will be placed on the gutter
     * `<td>` element, for normal changes in split mode, only the left side
     * gutter will have the `id` attribute.
     */
    generateAnchorID?: (change: Change) => string | undefined;
    /**
     * An array of selected changes's key, these changes will be highlighted.
     */
    selectedChanges?: string[];
    /**
     * An object of `{changeKey: element}` to render widget for changes, see
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#add-widgets Add widgets}
     * section for detail.
     */
    widgets?: { [k: string]: ReactNode };
    /**
     * Whether to optimize selection to a single column, when this prop is set
     * to `true` in split mode, user can only select code from either old or
     * new side, this can help copy and paste lines of code. This feature can
     * cause some performance dropdown when the diff is extremely large, so it
     * is turned off by default.
     *
     * @default false
     */
    optimizeSelection?: boolean;
    /** An extra css class. */
    className?: string;
    /**
     * A function to render customized syntax tokens, see
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#pick-ranges Pick ranges}
     * section for detail.
     */
    renderToken?: (
        token: Token,
        DefaultRenderToken: DefaultRenderToken,
        i: number,
    ) => ReactNode;
    /**
     * A function to render content in gutter cells, see
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-gutter Customize gutter}
     * section for detail.
     */
    renderGutter?: (props: RenderGutterProps) => ReactNode;
    /** A function which receives an array of hunks and returns react elements. */
    children?: (hunks: HunkData[]) => ReactNode;
}

/**
 * {@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Diff/index.js Source}
 */
export declare const Diff: FunctionComponent<DiffProps>;
