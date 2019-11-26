import { ComponentType } from '@wordpress/element';

declare namespace DefaultBlockAppender {
    interface Props {
        lastBlockClientId: string;
        rootClientId: string;
    }
}
declare const DefaultBlockAppender: ComponentType<DefaultBlockAppender.Props>;

export default DefaultBlockAppender;
