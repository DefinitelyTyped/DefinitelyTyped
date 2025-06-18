import { Decorator } from "final-form";

export interface FocusableInput {
    name: string;
    focus: () => void;
}

export type GetInputs = () => FocusableInput[];

export type FindInput = (inputs: FocusableInput[], errors: object) => FocusableInput | undefined;

/* eslint-disable @definitelytyped/no-unnecessary-generics */
export default function createDecorator<FormValues = object, InitialFormValues = object>(
    getInputs?: GetInputs,
    findInput?: FindInput,
): Decorator<FormValues, InitialFormValues>;
/* eslint-enable @definitelytyped/no-unnecessary-generics */

export function getFormInputs(formName: string): GetInputs;
