import { ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";

export interface ListBoxMenuProps extends Omit<ReactDivAttr, "id"> {
    id: string;
}

export interface ListBoxMenuComponent extends ForwardRefReturn<HTMLDivElement, ListBoxMenuProps> { }

declare const ListBoxMenu: ListBoxMenuComponent;

export default ListBoxMenu;
