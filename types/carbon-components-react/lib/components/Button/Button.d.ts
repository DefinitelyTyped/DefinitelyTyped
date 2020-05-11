import * as React from "react";
import { EmbeddedIconProps, EmbeddedTooltipProps, ReactAnchorAttr, ReactButtonAttr, ReactCreateElementParam, RenderIconProps, SizingProps, } from "../../../typings/shared";

export type ButtonKind = "danger" | "danger--primary" | "ghost" | "primary" | "secondary" | "tertiary";
export type ButtonSize = "default" | "field" | "small";

interface InheritedButtonProps extends ReactButtonAttr { }

interface InheritedAnchorProps extends ReactAnchorAttr { }

interface SharedProps extends
    EmbeddedIconProps,
    EmbeddedTooltipProps,
    RenderIconProps,
    SizingProps
{
    as?: ReactCreateElementParam,
    hasIconOnly?: boolean,
    kind?: ButtonKind, // required but has default value
    size?: ButtonSize,
}

export interface ButtonProps extends SharedProps, InheritedButtonProps { }

export interface ButtonAnchorProps extends SharedProps, InheritedAnchorProps { }

export type AllButtonProps = ButtonAnchorProps | ButtonProps;
declare const Button: React.RefForwardingComponent<HTMLElement, AllButtonProps>;

export default Button;
