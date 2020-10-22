import * as React from "react";
import { ButtonProps } from "../Button";

interface InheritedProps extends Omit<ButtonProps, "kind"> { }

export interface PrimaryButtonProps extends InheritedProps { }

declare const PrimaryButton: React.FC<PrimaryButtonProps>;

export default PrimaryButton;
