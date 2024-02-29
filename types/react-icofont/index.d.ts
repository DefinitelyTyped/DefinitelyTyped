import * as React from "react";

export interface IcofontProps {
    icon: string;
    spin?: boolean | undefined;
    flip?: "h" | "v" | undefined;
    rotate?: "90" | "180" | "270" | undefined;
    size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | undefined;
    className?: string | undefined;
}

export default class Icofont extends React.Component<IcofontProps> {}
