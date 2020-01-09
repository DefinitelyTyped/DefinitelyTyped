import * as React from "react";

export type PanelProps = {
    className?: string;
    /* The number of columns to span inside a `LayoutGrid`. */
    colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
} & { [x: string]: any };

export type PanelActionsProps = {
    className?: string;
} & { [x: string]: any };

export type PanelBodyProps = {
    className?: string;
} & { [x: string]: any };

export type PanelFiltersProps = {
    className?: string;
} & { [x: string]: any };

export type PanelFooterProps = {
    className?: string;
} & { [x: string]: any };

export type PanelHeadProps = {
    className?: string;
    /* Localized text for the description of the panel. */
    description?: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    /* Localized text for the title of the panel. */
    title?: string;
} & { [x: string]: any };

export type PanelHeaderProps = {
    className?: string;
} & { [x: string]: any };

declare const Panel: React.FunctionComponent<PanelProps> & {
    displayName: "Panel";
    Actions: React.FunctionComponent<PanelActionsProps> & {displayName: "Panel.Actions"};
    Body: React.FunctionComponent<PanelBodyProps> & {displayName: "Panel.Body"};
    Filters: React.FunctionComponent<PanelFiltersProps> & {displayName: "Panel.Filters"};
    Footer: React.FunctionComponent<PanelFooterProps> & {displayName: "Panel.Footer"};
    Head: React.FunctionComponent<PanelHeadProps> & {displayName: "Panel.Head"};
    Header: React.FunctionComponent<PanelHeaderProps> & {displayName: "Panel.Header"};
};

export default Panel;
