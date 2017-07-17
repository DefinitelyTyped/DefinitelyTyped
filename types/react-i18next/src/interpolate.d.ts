import * as React from "react";
import { InterpolationOptions } from "i18next";

export type InterpolateValue = string | JSX.Element;

export interface InterpolatePropsBase {
    parent?: string;
    regexp?: RegExp;
    useDangerouslySetInnerHTML?: boolean;
    dangerouslySetInnerHTMLPartElement?: string;
    options?: InterpolationOptions;
    i18nKey?: string;
    className?: string;
    style?: React.CSSProperties;
}

export interface OtherInterpolateProps {
    [regexKey: string]: InterpolateValue | RegExp | InterpolationOptions | boolean | undefined;
}

export type InterpolateProps = InterpolatePropsBase & OtherInterpolateProps;

export default class Interpolate extends React.Component<InterpolateProps> { }
