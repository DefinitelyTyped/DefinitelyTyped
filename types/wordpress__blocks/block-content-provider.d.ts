import { ComponentType, ReactNode } from "react";
import { BlockInstance } from "./";

/**
 * A Higher Order Component used to inject BlockContent using context to the wrapped component.
 *
 * @deprecated since 11.12.0.
 */
export function withBlockContentContext<T extends ComponentType<any>>(
    OriginalComponent: T,
): T;

declare namespace BlockContentProvider {
    interface Props {
        children: ReactNode;
        innerBlocks: BlockInstance[];
    }
}
/**
 * An internal block component used in block content serialization to inject nested block content
 * within the `save` implementation of the ancestor component in which it is nested. The component
 * provides a pre-bound `BlockContent` component via context, which is used by the developer-facing
 * `InnerBlocks.Content` component to render block content.
 *
 * @example
 * ```jsx
 * <BlockContentProvider innerBlocks={ innerBlocks }>
 *     { blockSaveElement }
 * </BlockContentProvider>
 * ```
 */
declare const BlockContentProvider: ComponentType<BlockContentProvider.Props>;

export default BlockContentProvider;
