import { Dropdown } from "@wordpress/components";
import { ComponentType } from "react";

declare namespace Inserter {
    interface Props extends Partial<Pick<Parameters<typeof Dropdown>[0], "position" | "renderToggle">> {
        clientId?: string | undefined;
        disabled?: boolean | undefined;
        isAppender?: boolean | undefined;
        onToggle?(isOpen: boolean): void;
        rootClientId?: string | undefined;
    }
}
declare const Inserter: ComponentType<Inserter.Props>;

export default Inserter;
