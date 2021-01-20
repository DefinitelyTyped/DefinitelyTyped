import * as React from "react";
import { ReactInputAttr, CarbonInputSize, SizingProps } from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "placeholder" | "ref" | "size" | "value";

export interface SearchProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    closeButtonLabelText?: string,
    defaultValue?: string | number,
    labelText: NonNullable<React.ReactNode>,
    placeHolderText?: string,
    size?: CarbonInputSize,
    /**
     * @deprecated
     */
    small?: SizingProps["small"],
    value?: string | number,
    light?: boolean,
}

declare class Search extends React.Component<SearchProps> { }

export default Search;
