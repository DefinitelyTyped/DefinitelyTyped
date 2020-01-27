import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr { }

export interface HeaderNavigationProps extends InheritedProps { }

declare class HeaderNavigation extends React.Component<HeaderNavigationProps> { }

export default HeaderNavigation;
