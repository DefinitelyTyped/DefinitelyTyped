import * as React from "react";
import { InterpolationOptions } from "i18next";

export type InterpolateValue = string | JSX.Element;

export interface InterpolateProps {
    parent?: string;
    regexp?: RegExp;
    useDangerouslySetInnerHTML?: boolean;
    dangerouslySetInnerHTMLPartElement?: string;
    options?: InterpolationOptions;
    i18nKey?: string;
    className?: string;
    style?: React.CSSProperties;
    [regexKey: string]: InterpolateValue | RegExp | InterpolationOptions | boolean | undefined;
}

export default class Interpolate extends React.Component<InterpolateProps> { }
