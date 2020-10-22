import * as React from "react";
import { EmbeddedIconProps, ReactButtonAttr } from "../../../typings/shared";

interface InheritedProps extends ReactButtonAttr, EmbeddedIconProps { }

export interface SearchFilterButtonProps extends InheritedProps {
    labelText?: string,
}

declare const SearchFilterButton: React.FC<SearchFilterButtonProps>;

export default SearchFilterButton;
