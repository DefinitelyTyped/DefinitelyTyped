import { Dropdown } from '@wordpress/components';
import { ComponentType } from '@wordpress/element';

declare namespace Inserter {
    interface Props extends Partial<Pick<Dropdown.Props, 'position' | 'renderToggle'>> {
        clientId?: string;
        disabled?: boolean;
        isAppender?: boolean;
        onToggle?(isOpen: boolean): void;
        rootClientId?: string;
    }
}
declare const Inserter: ComponentType<Inserter.Props>;

export default Inserter;
