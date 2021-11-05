// Type definitions for react-albus 2.0
// Project: https://github.com/americanexpress/react-albus#readme
// Definitions by: Sindre Seppola <https://github.com/sseppola>
//                 Conrad Reuter <https://github.com/conradreuter>
//                 Jonas Kugelmann <https://github.com/kuirak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { History } from "history";

export interface StepObject {
    id: string;
}

export interface WizardContext {
    step: StepObject;
    steps: StepObject[];
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
    onNext?: ((wizard: WizardContext) => void) | undefined;
    render?: ((wizard: WizardContext) => React.ReactNode) | undefined;
    history?: History | undefined;
    basename?: string | undefined;
}

export const Wizard: React.ComponentType<WizardProps>;

export type WizardContextRenderProps =
    | { render?: ((wizard: WizardContext) => React.ReactNode) | undefined }
    | { children: ((wizard: WizardContext) => React.ReactNode) | React.ReactNode };

export const WithWizard: React.ComponentType<WizardContextRenderProps>;

export interface StepsProps {
    children: NonNullable<React.ReactNode>;
    step?: StepObject | undefined;
}

export const Steps: React.ComponentType<StepsProps>;

export type StepProps = StepObject & WizardContextRenderProps;

/**
 * In addition to id, any additional props added to <Step> will be available on each step object.
 * This can be used to add names, descriptions, or other metadata to each step.
 * To use this feature globally in your project you need to augment the StepObject
 * @example
 * declare module "react-albus" {
 *   interface StepObject {
 *     propName: string;
 *   }
 * }
 */
export const Step: React.ComponentType<StepProps>;
