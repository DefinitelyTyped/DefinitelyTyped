import { ComponentType } from 'react';

import TabbableContainer from './tabbable';

declare namespace NavigableMenu {
    interface Props extends TabbableContainer.Props {
        /**
         * The orientation of the menu.
         * @defaultValue "vertical"
         */
        orientation?: 'vertical' | 'horizontal' | 'both';
    }
}
declare const NavigableMenu: ComponentType<NavigableMenu.Props>;

export default NavigableMenu;
