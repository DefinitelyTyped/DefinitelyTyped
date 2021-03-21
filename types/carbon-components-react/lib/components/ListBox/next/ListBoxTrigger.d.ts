import * as React from "react";
import { InternationalProps, ReactButtonAttr } from "../../../../typings/shared";
import { ListBoxMenuIconTranslationKey } from "../ListBoxMenuIcon";

export interface ListBoxTriggerProps extends ReactButtonAttr, InternationalProps<ListBoxMenuIconTranslationKey> {
    isOpen: boolean,
}

declare const ListBoxTrigger: React.FC<ListBoxTriggerProps>;

export default ListBoxTrigger;
