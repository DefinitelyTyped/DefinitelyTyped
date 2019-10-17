import { Slot } from '@wordpress/components';
import { FC, ReactNode } from '@wordpress/element';

declare namespace BlockFormatControls {
    interface Props {
        children: ReactNode;
    }
}
declare const BlockFormatControls: {
    (props: BlockFormatControls.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, 'name'>>;
};

export default BlockFormatControls;
