import * as React from "react";
import { IconGlyph } from "../Icon/Icon";

export type ListProps = {
    className?: string;
    compact?: boolean;
    disableStyles?: boolean;
    noBorder?: boolean;
    ref?: React.Ref<HTMLAnchorElement>;
} & React.HTMLAttributes<HTMLAnchorElement>;

export interface ListFooterProps {
    className?: string;
}

export interface ListHeaderProps {
    className?: string;
}

export interface ListIconProps {
    glyph: IconGlyph;
    className?: string;
}

export interface ListItemProps {
    className?: string;
    selected?: boolean;
    onClick?: (...args: any[]) => any;
}

export interface ListTextProps {
    className?: string;
    noWrap?: boolean;
    secondary?: boolean;
}

declare const List: React.FunctionComponent<ListProps> & {
    displayName: 'List';
    Footer: React.FunctionComponent<ListFooterProps> & { displayName: 'List.Footer' };
    Header: React.FunctionComponent<ListHeaderProps> & { displayName: 'List.Header' };
    Icon: React.FunctionComponent<ListIconProps> & { displayName: 'List.Icon' };
    Item: React.FunctionComponent<ListItemProps> & { displayName: 'List.Item' };
    Text: React.FunctionComponent<ListTextProps> & { displayName: 'List.Text' };
};

export default List;
