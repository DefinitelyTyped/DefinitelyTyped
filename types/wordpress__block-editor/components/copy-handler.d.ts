import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace CopyHandler {
    interface Props {
        children: ReactNode;
    }
}
declare const CopyHandler: ComponentType<CopyHandler.Props>;

export default CopyHandler;
