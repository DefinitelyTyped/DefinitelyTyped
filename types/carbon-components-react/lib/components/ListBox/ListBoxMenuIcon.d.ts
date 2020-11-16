import * as React from "react";
import { InternationalProps } from "../../../typings/shared";

export type ListBoxMenuIconTranslationKey = "close.menu" | "open.menu";

export interface ListBoxMenuIconProps extends InternationalProps<ListBoxMenuIconTranslationKey> {
    isOpen: boolean,
}

export interface ListBoxMenuIconComponent extends React.FC<ListBoxMenuIconProps> { }

declare const ListBoxMenuIcon: ListBoxMenuIconComponent;

export default ListBoxMenuIcon;
