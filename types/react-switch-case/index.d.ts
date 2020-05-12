// Type definitions for react-switch-case 1.5
// Project: https://github.com/AlexSergey/react-switch-case
// Definitions by: Fernando Falci <https://github.com/Falci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface SwitchProps {
    condition: any;
}

interface CaseProps {
    value: any;
}

declare class Switch extends React.Component<SwitchProps> {}
export class Case extends React.Component<CaseProps> {}
export class Default extends React.Component {}

export default Switch;
