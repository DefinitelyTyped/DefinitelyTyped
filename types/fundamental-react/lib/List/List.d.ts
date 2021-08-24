import * as React from 'react';
import { IconGlyph } from '../Icon/Icon';

export type ListProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disableStyles?: boolean | undefined;
    noBorder?: boolean | undefined;
    ref?: React.Ref<HTMLAnchorElement> | undefined;
    level?: 2 | 3 | 4 | 5 | 6 | undefined;
    navigation?: boolean | undefined;
    partialNavigation?: boolean | undefined;
    selectable?: boolean | undefined;
    footer?: string | JSX.Element | undefined;
    header?: string | JSX.Element | undefined;
} & React.HTMLAttributes<HTMLAnchorElement>;

export interface ListFooterProps {
    className?: string | undefined;
}

export interface ListHeaderProps {
    className?: string | undefined;
}

export interface ListIconProps {
    glyph: IconGlyph;
    className?: string | undefined;
}

export interface ListItemProps {
    className?: string | undefined;
    selected?: boolean | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
}

export interface ListTextProps {
    className?: string | undefined;
    noWrap?: boolean | undefined;
    secondary?: boolean | undefined;
}

export interface ListSelectionProps {
    checkBoxAriaLabel: string;
    className?: string | undefined;
    selected?: boolean | undefined;
    onChange?: ((event: React.SyntheticEvent<HTMLInputElement>, checkedState: boolean) => void) | undefined;
}

declare const List: React.FunctionComponent<ListProps> & {
    displayName: 'List';
    Footer: React.FunctionComponent<ListFooterProps> & { displayName: 'List.Footer' };
    Header: React.FunctionComponent<ListHeaderProps> & { displayName: 'List.Header' };
    Selection: React.FunctionComponent<ListSelectionProps> & { displayName: 'List.Selection' };
    Icon: React.FunctionComponent<ListIconProps> & { displayName: 'List.Icon' };
    Item: React.FunctionComponent<ListItemProps> & { displayName: 'List.Item' };
    Text: React.FunctionComponent<ListTextProps> & { displayName: 'List.Text' };
};

export default List;
