import * as React from "react";
import { EmbeddedIconProps, ReactButtonAttr } from "../../../typings/shared";
import { FeedbackProps } from "../Copy";

interface InheritedProps extends
    ReactButtonAttr,
    EmbeddedIconProps,
    FeedbackProps
{ }

export interface CopyButtonProps extends InheritedProps { }

declare class CopyButton extends React.Component<CopyButtonProps> { }

export default CopyButton;
