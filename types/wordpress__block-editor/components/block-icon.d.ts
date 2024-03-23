import { Icon } from "@wordpress/components";
import { ComponentType } from "react";

declare namespace BlockIcon {
    interface Props {
        className?: string | undefined;
        icon: Parameters<typeof Icon>[0]["icon"];
        showColors?: boolean | undefined;
    }
}
declare const BlockIcon: ComponentType<BlockIcon.Props>;

export default BlockIcon;
