import * as React from "react";
import { InternationalProps, ReactButtonAttr } from "../../../../typings/shared";
import { ListBoxMenuIconTranslationKey } from "../ListBoxMenuIcon";

type ExcludedButtonPropKeys = "aria-label" | "className" | "tabIndex" | "title" | "type";
export interface ListBoxTriggerProps
    extends Omit<ReactButtonAttr, ExcludedButtonPropKeys>,
        InternationalProps<ListBoxMenuIconTranslationKey> {
    isOpen: boolean;
}

declare const ListBoxTrigger: React.FC<ListBoxTriggerProps>;

export default ListBoxTrigger;
