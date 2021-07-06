import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface UnorderedListProps extends ReactAttr<HTMLUListElement> {
    isExpressive?: boolean;
    nested?: boolean,
}

declare const UnorderedList: React.FC<UnorderedListProps>;

export default UnorderedList;
