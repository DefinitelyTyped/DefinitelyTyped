import * as React from "react";

export type BreadcrumbProps = {
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    ref?: React.Ref<HTMLUListElement>
} & Pick<React.HTMLAttributes<HTMLUListElement>, Exclude<keyof React.HTMLAttributes<HTMLUListElement>, 'className'>>;

export type BreadcrumbItemProps = {
    /* Text for the internal anchor tag. */
    name?: string;
    /* An anchor tag will be generated and set to the url prop. Name or child text must be provided. */
    url?: string;
} & React.HTMLAttributes<HTMLLIElement>;

declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps> & {
    displayName: "Breadcrumb";
    Item: React.FunctionComponent<BreadcrumbItemProps> & {displayName: 'Breadcrumb.Item'};
};

export default Breadcrumb;
