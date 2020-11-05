import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

/**
 * @deprecated
 */
export interface SearchFilterButtonProps extends ReactButtonAttr {
    iconDescription?: string,
    labelText?: string,
}

/**
 * @deprecated
 */
declare const SearchFilterButton: React.FC<SearchFilterButtonProps>;

export default SearchFilterButton;
