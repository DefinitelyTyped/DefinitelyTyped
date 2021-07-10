import { Component, ClassAttributes } from "react";

export interface CheckboardProps extends ClassAttributes<Checkboard> {
    grey?: string | undefined;
    size?: number | undefined;
    white?: string | undefined;
}

export default class Checkboard extends Component<CheckboardProps> {}
