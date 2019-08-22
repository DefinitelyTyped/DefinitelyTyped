import * as React from "react";
import { ButtonProps } from "../Button";

interface InheritedProps extends Omit<ButtonProps, "kind"> { }

export interface SecondaryButtonProps extends InheritedProps { }

declare const SecondaryButton: React.FC<SecondaryButtonProps>;

export default SecondaryButton;
