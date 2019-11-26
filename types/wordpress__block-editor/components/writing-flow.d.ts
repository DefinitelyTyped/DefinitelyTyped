import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace WritingFlow {
    interface Props {
        children: ReactNode;
    }
}
declare const WritingFlow: ComponentType<WritingFlow.Props>;

export default WritingFlow;
