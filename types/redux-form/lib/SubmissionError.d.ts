import { FormErrors } from "../index";

export interface SubmissionErrorConstructor<T> {
    new (errors?: FormErrors<T>): Error;
}

export const SubmissionError: SubmissionErrorConstructor<any>;
