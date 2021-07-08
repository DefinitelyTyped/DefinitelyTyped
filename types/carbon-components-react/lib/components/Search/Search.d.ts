import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "ref" | "size" | "value";

export interface SearchProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    closeButtonLabelText?: string | undefined,
    defaultValue?: string | number | undefined,
    labelText: NonNullable<React.ReactNode>,
    /**
     * @deprecated
     */
    placeHolderText?: string | undefined,
    renderIcon?: React.ReactNode | undefined;
    size?: "sm" | "md" | "lg" | "xl" | undefined,
    /**
     * @deprecated
     */
    small?: boolean | undefined,
    value?: string | number | undefined,
    light?: boolean | undefined,
}

declare class Search extends React.Component<SearchProps> { }

export default Search;
