import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface FileUploaderSkeletonProps extends InheritedProps{ }

declare const FileUploaderSkeleton: React.FC<FileUploaderSkeletonProps>;

export default FileUploaderSkeleton;
