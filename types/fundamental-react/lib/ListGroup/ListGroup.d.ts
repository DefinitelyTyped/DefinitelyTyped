import * as React from "react";

export type ListGroupProps = {
    className?: string;
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
    Item: React.FunctionComponent<ListGroupItemProps>;
    ItemActions: React.FunctionComponent<ListGroupItemActionsProps>;
    ItemCheckbox: React.FunctionComponent<ListGroupItemCheckboxProps>;
};

export default ListGroup;
