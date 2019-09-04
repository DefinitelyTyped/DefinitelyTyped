import { ComponentType } from '@wordpress/element';

declare namespace PageTemplate {
    interface Props {
        children?: never;
    }
}
declare const PageTemplate: ComponentType<PageTemplate.Props>;

export default PageTemplate;
