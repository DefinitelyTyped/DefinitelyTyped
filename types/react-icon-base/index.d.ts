import * as React from "react";

export interface IconBaseProps extends React.SVGProps<React.ReactSVGElement> {
    size?: string | number | undefined;
    style?: any;
    color?: string | undefined;
}

export default class IconBaseClass extends React.Component<IconBaseProps> {}
