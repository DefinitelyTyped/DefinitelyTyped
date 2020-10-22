import * as React from "react";
import { EmbeddedIconProps } from "../../../typings/shared";
import { CopyProps } from "../Copy";

interface InheritedProps extends
    CopyProps,
    EmbeddedIconProps
{ }

export interface CopyButtonProps extends InheritedProps { }

declare const CopyButton: React.FC<CopyButtonProps>;

export default CopyButton;
