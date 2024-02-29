import * as React from "react";

export interface SwitchProps {
    children?: React.ReactNode;
    condition: any;
}

interface CaseProps {
    children?: React.ReactNode;
    value: any;
}

declare class Switch extends React.Component<SwitchProps> {}
export class Case extends React.Component<CaseProps> {}
export class Default extends React.Component {}

export default Switch;
