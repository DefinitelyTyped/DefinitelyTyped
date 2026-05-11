import { ComponentType } from "react";

declare namespace BlockSettingsMenu {
    interface Props {
        children?: never | undefined;
        clientIds: string[];
    }
}
declare const BlockSettingsMenu: ComponentType<BlockSettingsMenu.Props>;

export default BlockSettingsMenu;
