import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "ref" | "size" | "value";

export interface SearchProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    closeButtonLabelText?: string,
    defaultValue?: string | number,
    labelText: NonNullable<React.ReactNode>,
    /**
     * @deprecated
     */
    placeHolderText?: string,
    size?: "sm" | "lg" | "xl",
    /**
     * @deprecated
     */
    small?: boolean,
    value?: string | number,
    light?: boolean,
}

declare class Search extends React.Component<SearchProps> { }

export default Search;
