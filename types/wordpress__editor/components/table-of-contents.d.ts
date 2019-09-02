import { ComponentType } from '@wordpress/element';

declare namespace TableOfContents {
    interface Props {
        children?: never;
        hasOutlineItemsDisabled?: boolean;
    }
}
declare const TableOfContents: ComponentType<TableOfContents.Props>;

export default TableOfContents;
