import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "ref" | "size" | "value";
export type SearchSpreadElement = HTMLInputElement;

export interface SearchProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    closeButtonLabelText?: string | undefined,
    defaultValue?: string | number | undefined,
    labelText: NonNullable<React.ReactNode>,
    onClear?(): void;
    /**
     * @deprecated
     */
    placeHolderText?: string | undefined,
    renderIcon?: React.ReactElement | undefined; // code calls React.cloneElement so it can only be an element.
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
