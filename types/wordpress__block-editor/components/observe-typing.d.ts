import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace ObserveTyping {
    interface Props {
        children: ReactNode;
    }
}
declare const ObserveTyping: ComponentType<ObserveTyping.Props>;

export default ObserveTyping;
