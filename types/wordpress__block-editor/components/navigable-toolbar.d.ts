import { NavigableMenu } from '@wordpress/components';
import { ComponentType } from 'react';

declare namespace NavigableToolbar {
    interface Props extends NavigableMenu.Props {
        focusOnMount?: boolean;
    }
}
declare const NavigableToolbar: ComponentType<NavigableToolbar.Props>;

export default NavigableToolbar;
