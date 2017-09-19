import { FormErrors } from "redux-form";

export interface SubmissionErrorConstructor<T> {
    new (errors?: FormErrors<T>): Error;
}

declare const SubmissionError: SubmissionErrorConstructor<any>;
