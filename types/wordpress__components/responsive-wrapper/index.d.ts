import { ComponentType, ReactChild } from '@wordpress/element';

declare namespace ResponsiveWrapper {
    interface Props {
        children: ReactChild;
        naturalHeight: number;
        naturalWidth: number;
    }
}
declare const ResponsiveWrapper: ComponentType<ResponsiveWrapper.Props>;

export default ResponsiveWrapper;
