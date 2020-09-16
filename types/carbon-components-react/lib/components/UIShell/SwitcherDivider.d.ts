import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLHRElement> { }

export interface SwitcherDividerProps extends InheritedProps { }

declare const SwitcherDivider: React.FC<SwitcherDividerProps>;

export default SwitcherDivider;
