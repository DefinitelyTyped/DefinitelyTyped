import { ComponentType } from '@wordpress/element';

declare namespace BlockSettingsMenu {
    interface Props {
        children?: never;
        clientIds: string[];
    }
}
declare const BlockSettingsMenu: ComponentType<BlockSettingsMenu.Props>;

export default BlockSettingsMenu;
