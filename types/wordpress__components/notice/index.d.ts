import { Status } from "@wordpress/notices";
import { ComponentType, MouseEventHandler, ReactNode } from "react";

declare namespace Notice {
    interface Props {
        /**
         * Content to render in the notice.
         */
        children: ReactNode;
        /**
         * An array of action objects.
         */
        actions?: readonly Action[] | undefined;
        className?: string | undefined;
        /**
         * Whether the notice should be dismissible or not.
         * @defaultValue true
         */
        isDismissible?: boolean | undefined;
        status?: Status | undefined;
        /**
         * Function called when dismissing the notice.
         */
        onRemove?(): void;
    }
    interface BaseAction {
        label: string;
        className?: string | undefined;
        /**
         * Should default classes be removed from the action?
         */
        noDefaultClasses?: boolean | undefined;
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
