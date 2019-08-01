import { Slot } from '@wordpress/components';
import { FC, ReactNode } from '@wordpress/element';

declare namespace InspectorAdvancedControls {
    interface Props {
        children: ReactNode;
    }
}
declare const InspectorAdvancedControls: {
    (props: InspectorAdvancedControls.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, 'name'>>;
};

export default InspectorAdvancedControls;
