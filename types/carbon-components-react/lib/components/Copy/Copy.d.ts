import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

export interface FeedbackProps {
    feedback?: string,
    feedbackTimeout?: number,
}

interface InheritedProps extends
    Omit<ReactButtonAttr, "aria-live" | "type">,
    FeedbackProps
{ }

export interface CopyProps extends InheritedProps { }

declare const Copy: React.FC<CopyProps>;

export default Copy;
