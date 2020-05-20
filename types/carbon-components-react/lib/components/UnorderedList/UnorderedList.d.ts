import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLUListElement> { }

export interface UnorderedListProps extends InheritedProps {
    nested?: boolean,
}

declare const UnorderedList: React.FC<UnorderedListProps>;

export default UnorderedList;
