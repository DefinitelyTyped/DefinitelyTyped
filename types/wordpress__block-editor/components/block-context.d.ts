import { JSX, ReactNode } from "react";

declare namespace BlockContextProvider {
    /**
     * Component which merges passed value with current consumed block context.
     *
     * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-context/README.md
     */
    interface Props {
        /**
         * Context value to merge with current value.
         */
        value?: Record<string, any>|undefined;
        /**
         * Component children.
         */
        children?: ReactNode;
    }
}
declare const BlockContextProvider: {
    (props: BlockContextProvider.Props): JSX.Element;
}

export default BlockContextProvider;
