import { ComponentType } from "react";

declare namespace TableOfContents {
    interface Props {
        children?: never | undefined;
        hasOutlineItemsDisabled?: boolean | undefined;
    }
}
declare const TableOfContents: ComponentType<TableOfContents.Props>;

export default TableOfContents;
