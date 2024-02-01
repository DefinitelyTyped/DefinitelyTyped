export interface SimpleTooltipProps {
    arrow?: number; // 8
    background?: string; // "#000"
    border?: string; // "#000"
    color?: string; // "#fff"
    content: any; // -
    customCss?: any; // -
    fadeDuration?: number; // 0
    fadeEasing?: string; // 	"linear"
    fixed?: boolean; // false
    fontFamily?: string; // "inherit"
    fontSize?: string; // "inherit"
    padding?: number; // 	16
    placement?: "left" | "top" | "right" | "bottom"; // 	"top"
    radius?: number; // 	0
    zIndex?: number; // 	1
}

export default function Tooltip(props: SimpleTooltipProps): React.JSX.Element;
