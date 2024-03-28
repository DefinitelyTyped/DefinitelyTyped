import { Dropdown } from "@wordpress/components";
import { ComponentProps, ComponentType } from "react";

declare namespace Inserter {
    interface Props extends Partial<Pick<ComponentProps<typeof Dropdown>, "position" | "renderToggle">> {
        clientId?: string | undefined;
        disabled?: boolean | undefined;
        isAppender?: boolean | undefined;
        onToggle?(isOpen: boolean): void;
        rootClientId?: string | undefined;
    }
}
declare const Inserter: ComponentType<Inserter.Props>;

export default Inserter;
