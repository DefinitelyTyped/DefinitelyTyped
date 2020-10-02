import * as React from "react";
import { SizingProps, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr, SizingProps { }

export interface SearchSkeletonProps extends InheritedProps { }

declare const SearchSkeleton: React.FC<SearchSkeletonProps>;

export default SearchSkeleton;
