import * as React from "react";

export type PanelProps = {
    className?: string;
    /* The number of columns to span inside a `PanelGrid`. */
    colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
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
    Actions: React.FunctionComponent<PanelActionsProps>;
    Body: React.FunctionComponent<PanelBodyProps>;
    Filters: React.FunctionComponent<PanelFiltersProps>;
    Footer: React.FunctionComponent<PanelFooterProps>;
    Head: React.FunctionComponent<PanelHeadProps>;
    Header: React.FunctionComponent<PanelHeaderProps>;
};

export default Panel;
