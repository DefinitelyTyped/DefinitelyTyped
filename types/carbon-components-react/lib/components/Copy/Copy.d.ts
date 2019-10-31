import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

export interface FeedbackProps {
    feedback?: string,
    feedbackTimeout?: number,
}

interface InheritedProps extends
    Omit<ReactButtonAttr, "type">,
    FeedbackProps
{ }

export interface CopyProps extends InheritedProps { }

declare class Copy extends React.Component<CopyProps> { }

export default Copy;
