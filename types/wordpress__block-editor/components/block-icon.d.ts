import { Icon } from '@wordpress/components';
import { ComponentType } from '@wordpress/element';

declare namespace BlockIcon {
    interface Props {
        className?: string;
        icon: Icon.Props<any>['icon'];
        showColors?: boolean;
    }
}
declare const BlockIcon: ComponentType<BlockIcon.Props>;

export default BlockIcon;
