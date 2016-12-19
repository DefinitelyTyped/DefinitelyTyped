// Type definitions for react-fa 4.1
// Project: https://github.com/andreypopp/react-fa
// Definitions by: Frank Laub <https://github.com/flaub>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, ComponentClass, HTMLAttributes, StatelessComponent } from "react";

type IconSize = "lg" | "2x" | "3x" | "4x" | "5x";

type CustomComponent = string | ComponentClass<any> | StatelessComponent<any>;

interface IconProps {
    name: string;
    rotate?: "45" | "90" | "135" | "180" | "225" | "270" | "315";
    flip?: "horizontal" | "vertical";
    fixedWidth?: boolean;
    spin?: boolean;
    pulse?: boolean;
    stack?: "1x" | "2x";
    inverse?: boolean;
    Component?: CustomComponent;
    size?: IconSize;
    [prop: string]: any;
}

export class Icon extends Component<IconProps, {}> {}

interface IconStackProps {
    size?: IconSize;
    [props: string]: any;
}

export class IconStack extends Component<IconStackProps, {}> {}

export default Icon;
