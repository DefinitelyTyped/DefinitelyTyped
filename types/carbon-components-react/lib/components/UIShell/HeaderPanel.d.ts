import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface HeaderPanelProps extends InheritedProps {
    expanded?: boolean,
}

declare const HeaderPanel: React.FC<HeaderPanelProps>;

export default HeaderPanel;
