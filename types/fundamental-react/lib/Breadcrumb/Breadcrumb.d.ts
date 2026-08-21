import * as React from "react";

export type BreadcrumbProps = {
    disableStyles?: boolean | undefined;
    ref?: React.Ref<HTMLUListElement> | undefined;
} & Pick<React.HTMLAttributes<HTMLUListElement>, Exclude<keyof React.HTMLAttributes<HTMLUListElement>, "className">>;

export type BreadcrumbItemProps = {
    className?: string | undefined;
    name?: string | undefined;
    url?: string | undefined;
} & React.HTMLAttributes<HTMLLIElement>;

declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps> & {
    displayName: "Breadcrumb";
    Item: React.FunctionComponent<BreadcrumbItemProps> & { displayName: "Breadcrumb.Item" };
};

export default Breadcrumb;
