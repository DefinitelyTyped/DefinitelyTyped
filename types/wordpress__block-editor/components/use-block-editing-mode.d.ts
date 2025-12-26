export namespace useBlockEditingMode {
    type BlockEditingMode = "disabled" | "contentOnly" | "default";
}

/**
 * Allows a block to restrict the user interface that is displayed for editing
 * that block and its inner blocks.
 *
 * @example
 * ```js
 * function MyBlock( { attributes, setAttributes } ) {
 *     useBlockEditingMode( 'disabled' );
 *     return <div { ...useBlockProps() }></div>;
 * }
 * ```
 *
 * `mode` can be one of three options:
 *
 * - `'disabled'`: Prevents editing the block entirely, i.e. it cannot be
 *   selected.
 * - `'contentOnly'`: Hides all non-content UI, e.g. auxiliary controls in the
 *   toolbar, the block movers, block settings.
 * - `'default'`: Allows editing the block as normal.
 *
 * The mode is inherited by all of the block's inner blocks, unless they have
 * their own mode.
 *
 * If called outside of a block context, the mode is applied to all blocks.
 *
 * @param {?useBlockEditingMode.BlockEditingMode} mode The editing mode to apply. If undefined, the
 *                                 current editing mode is not changed.
 *
 * @return {useBlockEditingMode.BlockEditingMode} The current editing mode.
 */
export function useBlockEditingMode(mode?: useBlockEditingMode.BlockEditingMode): useBlockEditingMode.BlockEditingMode;
