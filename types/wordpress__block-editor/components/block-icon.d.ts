import { IconType } from "@wordpress/components";
import { ComponentType } from "react";

declare namespace BlockIcon {
    interface Props {
        className?: string | undefined;
        icon: IconType | null;
        showColors?: boolean | undefined;
    }
}
declare const BlockIcon: ComponentType<BlockIcon.Props>;

export default BlockIcon;
