import { BlockInstance } from './';
import { ComponentType, ReactNode } from 'react';

/**
 * A Higher Order Component used to inject BlockContent using context to the wrapped component.
 */
export function withBlockContentContext<T extends ComponentType<any>>(
    wrapped: T
): T extends ComponentType<infer U> ? ComponentType<Omit<U, 'BlockContent'>> : never;

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
