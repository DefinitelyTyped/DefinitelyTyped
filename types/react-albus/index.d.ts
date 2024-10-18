import { History } from "history";
import * as React from "react";

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
    component: React.ComponentType<P & WizardComponentProps>,
): React.ComponentType<P>;

export type WizardProps = {
    onNext?: ((wizard: WizardContext) => void) | undefined;
    history?: History | undefined;
    basename?: string | undefined;
} & WizardContextRenderProps;

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
