import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface SkeletonPlaceholderProps extends InheritedProps { }

declare const SkeletonPlaceholder: React.FC<SkeletonPlaceholderProps>;

export default SkeletonPlaceholder;
