// Type definitions for react-hooks-helper 1.6
// Project: https://github.com/revelcw/react-hooks-helper#readme
// Definitions by: Joao Edmundo <https://github.com/jedmundo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

export as namespace ReactHooksHelper;

export interface NavigationProps {
    next: () => void;
    previous?: (() => void) | undefined;
    go?: ((step: number | string) => void) | undefined;
    play?: (() => void) | undefined;
    pause?: (() => void) | undefined;
}

export interface Step {
    id: string;
}

export interface UseStepParams {
    initialStep?: number | undefined;
    autoAdvanceDuration?: number | undefined;
    steps: Step[] | number;
}

export interface UseStepResponse {
    autoAdvanceDuration: number;
    isPaused: boolean;
    index: number;
    step: Step | number;
    navigation: NavigationProps;
}

export function useStep(params: UseStepParams): UseStepResponse;

export interface FormTarget {
    target: {
        name: string; // object property name or Dot separated when hierarchical
        value: any;
        type?: string | undefined;
        checked?: boolean | undefined;
    };
}

export type SetForm = (
    event: React.SyntheticEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement> | FormTarget,
) => void;

export function useForm<T>(defaultFormConfig: T): [T, SetForm];
