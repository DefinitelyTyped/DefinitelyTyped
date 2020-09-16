import { ComponentType } from 'react';

declare namespace ButtonBlockAppender {
    interface Props {
        children?: never;
        className?: string;
        /**
         * The `clientId` of the Block from who's root new Blocks should be inserted. This prop is
         * required by the block `Inserter` component. Typically this is the `clientID` of the Block
         * where the prop is being rendered.
         */
        rootClientId: string;
    }
}
declare const ButtonBlockAppender: ComponentType<ButtonBlockAppender.Props>;

export default ButtonBlockAppender;
