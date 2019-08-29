import { ComponentType } from '@wordpress/element';

declare namespace BlockTitle {
    interface Props {
        children?: never;
        clientId: string;
    }
}
declare const BlockTitle: ComponentType<BlockTitle.Props>;

export default BlockTitle;
