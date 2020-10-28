import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface TabContentProps extends Omit<ReactDivAttr, "aria-live" | "hidden"> {
    selected?: boolean,
}

declare const TabContent: React.FC<TabContentProps>;

export default TabContent;
