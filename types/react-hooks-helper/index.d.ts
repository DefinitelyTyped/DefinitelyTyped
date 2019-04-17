// Type definitions for react-hooks-helper 1.6
// Project: https://github.com/revelcw/react-hooks-helper#readme
// Definitions by: Joao Edmundo <https://github.com/jedmundo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace ReactHooksHelper;

export interface NavigationProps {
    next: () => void;
    previous?: () => void;
    go?: (step: number | string) => void;
    play?: () => void;
    pause?: () => void;
}

export interface UseStepParams {
    initialStep?: number;
    autoAdvanceDuration?: number;
    steps: string[] | number;
}

export interface UseStepResponse {
    autoAdvanceDuration: number;
    isPaused: boolean;
    index: number;
    step: number;
    navigation: NavigationProps;
}

export function useStep(params: UseStepParams): UseStepResponse;

export type UseFormResponse = [any, any];

export function useForm(params: any): UseFormResponse;
