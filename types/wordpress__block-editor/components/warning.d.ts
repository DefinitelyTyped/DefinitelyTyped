import { ComponentType, MouseEventHandler, ReactFragment, ReactNode } from '@wordpress/element';

declare namespace Warning {
    interface Props {
        actions?: ReactFragment;
        children: ReactNode;
        className?: string;
        secondaryActions?: Array<{
            title: ReactNode;
            onClick: MouseEventHandler<HTMLButtonElement>;
        }>;
    }
}
declare const Warning: ComponentType<Warning.Props>;

export default Warning;
