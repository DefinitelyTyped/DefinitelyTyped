import * as React from "react";

export type BreadcrumbProps = {
    [x: string]: any;
} & { [x: string]: any };

export type BreadcrumbItemProps = {
    /* Text for the internal anchor tag. */
    name?: string;
    /* An anchor tag will be generated and set to the url prop. Name or child text must be provided. */
    url?: string;
} & { [x: string]: any };

declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps> & {
    Item: React.FunctionComponent<BreadcrumbItemProps>;
};

export default Breadcrumb;
