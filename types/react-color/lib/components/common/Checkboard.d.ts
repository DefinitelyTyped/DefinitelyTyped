import { Component, ClassAttributes } from "react";

export interface CheckboardProps extends ClassAttributes<Checkboard> {
    grey?: string;
    size?: number;
    white?: string;
}

export default class Checkboard extends Component<CheckboardProps> {}
