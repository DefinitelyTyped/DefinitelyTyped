// Type definitions for react-albus 2.0
// Project: https://github.com/americanexpress/react-albus#readme
// Definitions by: Sindre Seppola <https://github.com/sseppola>
//                 Conrad Reuter <https://github.com/conradreuter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { History } from "history";

export interface WizardStepObject {
    id: string;
}

export interface WizardContext {
    step: WizardStepObject;
    steps: WizardStepObject[];
    history: History;
    next: () => void;
    previous: () => void;
    go: (n: number) => void;
    push: (id?: string) => void;
    replace: (id?: string) => void;
}

export const Wizard: React.ComponentType<{
    onNext?: (wizard: WizardContext) => void;
    render?: (wizard: WizardContext) => React.ReactNode;
    history?: History;
}>;

export const Steps: React.ComponentType<{
    step?: WizardStepObject;
}>;

export const Step: React.ComponentType<{
    id: string;
} & (
    | { render?: (wizard: WizardContext) => React.ReactNode; }
    | { children: (wizard: WizardContext) => React.ReactNode; }
)>;
