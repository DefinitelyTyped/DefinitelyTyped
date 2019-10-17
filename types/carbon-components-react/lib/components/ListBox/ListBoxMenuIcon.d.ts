import * as React from "react";
import { InternationalProps } from "../../../typings/shared";

export type ListBoxMenuIconTranslationKey = "close.menu" | "open.menu";
interface InheritedProps extends InternationalProps<ListBoxMenuIconTranslationKey> { }

export interface ListBoxMenuIconProps extends InheritedProps {
    isOpen: boolean,
}

export interface ListBoxMenuIconComponent extends React.FC<ListBoxMenuIconProps> { }

declare const ListBoxMenuIcon: ListBoxMenuIconComponent;

export default ListBoxMenuIcon;
