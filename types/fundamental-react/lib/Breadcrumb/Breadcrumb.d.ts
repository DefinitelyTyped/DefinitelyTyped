import * as React from "react";

export type BreadcrumbProps = {
    disableStyles?: boolean;
    ref?: React.Ref<HTMLUListElement>
} & Pick<React.HTMLAttributes<HTMLUListElement>, Exclude<keyof React.HTMLAttributes<HTMLUListElement>, 'className'>>;

export type BreadcrumbItemProps = {
    className?: string,
    name?: string,
    url?: string
} & React.HTMLAttributes<HTMLLIElement>;

declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps> & {
    displayName: "Breadcrumb";
    Item: React.FunctionComponent<BreadcrumbItemProps> & {displayName: 'Breadcrumb.Item'};
};

export default Breadcrumb;
