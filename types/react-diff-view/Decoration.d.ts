import { FunctionComponent, ReactElement } from "react";

type ReactChild = ReactElement | string | number;

/**
 * ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Decoration/index.js#L33-L44 Source})
 */
export interface DecorationProps {
    /**
     * The class name of decoration's root `<tr>` element.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-styles README/Customize styles}
     */
    className?: string;
    /**
     * The class name of the gutter `<td>` element.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-styles README/Customize styles}
     */
    gutterClassName?: string;
    /**
     * The class name of the content `<td>` element.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#customize-styles README/Customize styles}
     */
    contentClassName?: string;
    /**
     * Either have one or two elements:
     *
     * - A single element: this will be rendered in the entire row.
     * - An array containing two elements: The first element will be rendered in
     *   gutter position, the second will be rendered in code position.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#add-decoration-around-hunks README/Add Decoration Around Hunks}
     */
    children?: ReactChild | [ReactChild, ReactChild];
}

/**
 * `Decoration` component basically receives a children prop which can either
 * have one or two elements:
 *
 * - A single element: this will be rendered in the entire row.
 * - An array containing two elements: The first element will be rendered in
 *   gutter position, the second will be rendered in code position.
 *
 *  ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/Decoration/index.js Source})
 *
 * ---
 *
 * Read more: {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#add-decoration-around-hunks README/Add Decoration Around Hunks}
 */
export declare const Decoration: FunctionComponent<DecorationProps>;
