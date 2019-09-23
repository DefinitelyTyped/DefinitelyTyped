import { ComponentType } from '@wordpress/element';

declare namespace DocumentOutline {
    interface Props {
        children?: never;
        hasOutlineItemsDisabled?: boolean;
        onSelect(): void;
    }
}
declare const DocumentOutline: ComponentType<DocumentOutline.Props>;

export default DocumentOutline;
