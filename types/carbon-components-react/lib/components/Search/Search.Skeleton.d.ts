import * as React from "react";
import { ReactLabelAttr, SizingProps } from "../../../typings/shared";

interface InheritedProps extends SizingProps {
    id?: ReactLabelAttr["htmlFor"],
}

export interface SearchSkeletonProps extends InheritedProps { }

declare class SearchSkeleton extends React.Component<SearchSkeletonProps> { }

export default SearchSkeleton;
