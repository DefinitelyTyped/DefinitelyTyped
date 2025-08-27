import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface UnorderedListProps extends ReactAttr<HTMLUListElement> {
    isExpressive?: boolean | undefined;
    nested?: boolean | undefined;
}

declare const UnorderedList: React.FC<UnorderedListProps>;

export default UnorderedList;
