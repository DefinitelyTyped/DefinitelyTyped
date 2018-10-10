// Type definitions for react-albus 2.0
// Project: https://github.com/americanexpress/react-albus#readme
// Definitions by: Sindre Seppola <https://github.com/sseppola>
//                 Conrad Reuter <https://github.com/conradreuter>
//                 Jonas Kugelmann <https://github.com/kuirak>
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

export interface WizardComponentProps {
    wizard: WizardContext;
}

export function withWizard<P>(
    component: React.ComponentType<P & WizardComponentProps>
): React.ComponentType<P>;

export interface WizardProps {
    onNext?: (wizard: WizardContext) => void;
    render?: (wizard: WizardContext) => React.ReactNode;
    history?: History;
    basename?: string;
}

export const Wizard: React.ComponentType<WizardProps>;

export interface StepsProps {
    step?: WizardStepObject;
}

export const Steps: React.ComponentType<StepsProps>;

export type StepProps = { id: string } & (
    | { render?: (wizard: WizardContext) => React.ReactNode }
    | { children: (wizard: WizardContext) => React.ReactNode });

export const Step: React.ComponentType<StepProps>;
