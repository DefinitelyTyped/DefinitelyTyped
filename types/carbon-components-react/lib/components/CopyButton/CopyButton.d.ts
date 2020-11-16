import * as React from "react";
import { CopyProps } from "../Copy";

export interface CopyButtonProps extends CopyProps {
    iconDescription?: string;
}

declare const CopyButton: React.FC<CopyButtonProps>;

export default CopyButton;
