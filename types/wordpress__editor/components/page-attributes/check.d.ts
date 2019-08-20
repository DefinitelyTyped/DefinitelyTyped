import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PageAttributesCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PageAttributesCheck: ComponentType<PageAttributesCheck.Props>;

export default PageAttributesCheck;
