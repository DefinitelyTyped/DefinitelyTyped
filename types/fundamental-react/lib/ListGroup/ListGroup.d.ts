import * as React from "react";

export type ListGroupProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
} & { [x: string]: any };

export type ListGroupItemProps = {
    className?: string;
} & { [x: string]: any };

export type ListGroupItemActionsProps = {
    className?: string;
} & { [x: string]: any };

export type ListGroupItemCheckboxProps = {
    className?: string;
    inputProps?: { [x: string]: any };
    labelProps?: { [x: string]: any };
} & { [x: string]: any };

declare const ListGroup: React.FunctionComponent<ListGroupProps> & {
    displayName: "ListGroup";
    Item: React.FunctionComponent<ListGroupItemProps> & {displayName: "ListGroup.Item"};
    ItemActions: React.FunctionComponent<ListGroupItemActionsProps> & {displayName: "ListGroup.ItemActions"};
    ItemCheckbox: React.FunctionComponent<ListGroupItemCheckboxProps> & {displayName: "ListGroup.ItemCheckbox"};
};

export default ListGroup;
