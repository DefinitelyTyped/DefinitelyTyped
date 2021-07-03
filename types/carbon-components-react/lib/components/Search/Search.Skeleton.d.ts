import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface SearchSkeletonProps extends ReactDivAttr {
    small?: boolean,
}

declare const SearchSkeleton: React.FC<SearchSkeletonProps>;

export default SearchSkeleton;
