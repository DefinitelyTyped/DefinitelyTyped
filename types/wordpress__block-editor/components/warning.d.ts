import { ComponentType, MouseEventHandler, ReactFragment, ReactNode } from "react";

declare namespace Warning {
    interface Props {
        actions?: ReactFragment | undefined;
        children: ReactNode;
        className?: string | undefined;
        secondaryActions?:
            | Array<{
                title: ReactNode;
                onClick: MouseEventHandler<HTMLButtonElement>;
            }>
            | undefined;
    }
}
declare const Warning: ComponentType<Warning.Props>;

export default Warning;
