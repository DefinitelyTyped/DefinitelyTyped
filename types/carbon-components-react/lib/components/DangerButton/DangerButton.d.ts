import * as React from "react";
import { ButtonProps } from "../Button";

interface InheritedProps extends Omit<ButtonProps, "kind"> { }

export interface DangerButtonProps extends InheritedProps { }

declare const DangerButton: React.FC<DangerButtonProps>;

export default DangerButton;
