import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface HeaderGlobalBarProps extends InheritedProps { }

declare const HeaderGlobalBar: React.FC<HeaderGlobalBarProps>;

export default HeaderGlobalBar;
