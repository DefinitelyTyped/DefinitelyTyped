import { FormErrors } from "redux-form";

export interface SubmissionErrorConstructor<T = void> {
    new (errors?: FormErrors<T>): Error;
}

declare const SubmissionError: SubmissionErrorConstructor;
