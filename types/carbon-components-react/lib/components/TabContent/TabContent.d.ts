import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface TabContentProps extends Omit<ReactDivAttr, "hidden"> {
    selected?: boolean,
}

declare const TabContent: React.FC<TabContentProps>;

export default TabContent;
