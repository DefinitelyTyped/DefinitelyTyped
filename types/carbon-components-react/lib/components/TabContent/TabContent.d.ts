import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactDivAttr, "hidden"> { }

export interface TabContentProps extends InheritedProps {
    selected?: boolean,
}

declare const TabContent: React.FC<TabContentProps>;

export default TabContent;
