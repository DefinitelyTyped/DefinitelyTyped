import { ComponentType } from "react";

declare namespace DocumentOutline {
    interface Props {
        children?: never | undefined;
        hasOutlineItemsDisabled?: boolean | undefined;
        onSelect(): void;
    }
}
declare const DocumentOutline: ComponentType<DocumentOutline.Props>;

export default DocumentOutline;
