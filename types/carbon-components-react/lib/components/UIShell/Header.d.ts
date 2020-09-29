import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr { }

export interface HeaderProps extends InheritedProps { }

declare const Header: React.FC<HeaderProps>;

export default Header;
