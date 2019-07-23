import { ComponentType, MouseEventHandler, ReactNode } from '@wordpress/element';
import { Status } from '@wordpress/notices';

declare namespace Notice {
    interface Props {
        /**
         * Content to render in the notice.
         */
        children: ReactNode;
        /**
         * An array of action objects.
         */
        actions?: readonly Action[];
        className?: string;
        /**
         * Whether the notice should be dismissible or not.
         * @defaultValue true
         */
        isDismissible?: boolean;
        status?: Status;
        /**
         * Function called when dismissing the notice.
         */
        onRemove?(): void;
    }
    interface BaseAction {
        label: string;
        className?: string;
        /**
         * Should default classes be removed from the action?
         */
        noDefaultClasses?: boolean;
    }
    interface ButtonAction extends BaseAction {
        onClick: MouseEventHandler<HTMLButtonElement>;
    }
    interface URLAction extends BaseAction {
        url: string;
    }
    type Action = ButtonAction | URLAction;
}
declare const Notice: ComponentType<Notice.Props>;

export default Notice;
