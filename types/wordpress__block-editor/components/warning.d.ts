import { ComponentType, MouseEventHandler, ReactNode } from "react";

declare namespace Warning {
    interface Props {
        actions?: Iterable<ReactNode> | undefined;
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
