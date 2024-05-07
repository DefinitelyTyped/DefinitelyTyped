import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

export interface FeedbackProps {
    feedback?: string | undefined;
    feedbackTimeout?: number | undefined;
}

export interface CopyProps extends Omit<ReactButtonAttr, "aria-live">, FeedbackProps {}

declare const Copy: React.FC<CopyProps>;

export default Copy;
