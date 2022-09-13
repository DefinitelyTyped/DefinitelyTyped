import { Slot } from '@wordpress/components';
import { FC, ReactNode } from 'react';

declare namespace InspectorControls {
    interface Props {
        children: ReactNode;
    }
}
declare const InspectorControls: {
    (props: InspectorControls.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, 'name'>>;
};

export default InspectorControls;
