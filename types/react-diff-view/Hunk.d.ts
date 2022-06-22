import { Change, Hunk as HunkData } from "gitdiff-parser";
import { FunctionComponent, PropsWithChildren } from "react";

export interface CustomCallbackProps {
    /**
     * Is `undefined` in unified mode, in split mode it could be either
     * `"old"` and `"new"` responding to the triggering element.
     */
    side: "new" | "old" | undefined;
    change: Change;
}
export type CustomCallback = (object: CustomCallbackProps) => void;

export interface CustomCallbacks {
    [key: string]: CustomCallback;
}

/**
 * ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Hunk/index.js#L24-L63 Source})
 */
export interface HunkProps {
    hunk: HunkData;
    /**
     * The class name of hunk's root `<tbody>` element.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-styles README/Customize styles}
     */
    className?: string;
    /**
     * The class name of each change's `<tr>` element.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-styles README/Customize styles}
     */
    lineClassName?: string;
    /**
     * The class name of the gutter `<td>` element in each row.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-styles README/Customize styles}
     */
    gutterClassName?: string;
    /**
     * The class name of the code `<td>` element in each row.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-styles README/Customize styles}
     */
    contentClassName?: string;
    /**
     * Customize events on gutter `<td>` elements.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-events README/Customize Events}
     */
    gutterEvents?: CustomCallbacks;
    /**
     * Customize events on code `<td>` elements.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-events README/Customize Events}
     */
    codeEvents?: CustomCallbacks;
}

export declare const Hunk: FunctionComponent<PropsWithChildren<HunkProps>>;
