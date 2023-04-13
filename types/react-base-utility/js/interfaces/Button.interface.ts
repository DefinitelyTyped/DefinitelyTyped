import { HtmlHTMLAttributes } from 'react';
import React = require('react');

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export type IconType = (props: IconBaseProps) => JSX.Element;
interface ButtonInterface extends HtmlHTMLAttributes<HTMLButtonElement> {
    title: string;
    extras?: {
        bg?: string;
        hoverBg?: string;
        textColor?: string;
        hoverTextColor?: string;
        transitionSpees?: string;
        fontSize?: string;
    };
    icon?: {
        svg?: IconType;
        side: string;
        style?: {
            height?: string;
            width?: string;
        };
    };
}
export default ButtonInterface;
