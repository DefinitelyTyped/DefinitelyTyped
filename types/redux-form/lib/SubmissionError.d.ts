import { FormErrors } from "../index";

export declare class SubmissionError<FormData = {}, ErrorType = string> extends Error {
  constructor(errors?: FormErrors<FormData, ErrorType>);
  public errors: FormErrors<FormData, ErrorType> | undefined;
}

export default SubmissionError;
