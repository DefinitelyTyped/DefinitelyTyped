import { DropdownProps } from "@wordpress/components/build-types/dropdown/types";
import { ComponentType } from "react";

declare namespace Inserter {
    interface Props extends Partial<Pick<DropdownProps, "position" | "renderToggle">> {
        clientId?: string | undefined;
        disabled?: boolean | undefined;
        isAppender?: boolean | undefined;
        onToggle?(isOpen: boolean): void;
        rootClientId?: string | undefined;
    }
}
declare const Inserter: ComponentType<Inserter.Props>;

export default Inserter;
