import * as React from "react";
import { i18n, InterpolationOptions, TranslationFunction } from "i18next";

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
    i18n?: i18n;
    t?: TranslationFunction;
}

export interface OtherInterpolateProps {
    [regexKey: string]: InterpolateValue | RegExp | InterpolationOptions | boolean | undefined;
}

export type InterpolateProps = InterpolatePropsBase & OtherInterpolateProps;

export default class Interpolate extends React.PureComponent<InterpolateProps> { }
