import * as React from "react";

type SVGAttr = React.SVGAttributes<SVGSVGElement>;

interface SVGInheritedProps {
    className?: SVGAttr["className"],
    fill?: SVGAttr["fill"],
    fillRule?: SVGAttr["fillRule"],
    height?: SVGAttr["height"],
    role?: SVGAttr["role"],
    style?: SVGAttr["style"],
    viewBox?: SVGAttr["viewBox"],
    width?: SVGAttr["width"],
}

export interface IconData {
    width?: string;
    height?: string;
    viewBox: string;
    svgData: any;
}

export interface IconProps extends SVGInheritedProps {
    description: string,
    icon?: IconData,
    iconRef?: React.Ref<HTMLElement>,
    iconTitle?: string
}

declare const Icon: React.FC<IconProps>;

// TODO: icons

export default Icon;
