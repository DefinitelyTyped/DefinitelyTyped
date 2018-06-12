import { FormErrors } from "../index";

export default class SubmissionError<FormData = {}, ErrorType = string> extends Error {
  constructor(errors?: FormErrors<FormData, ErrorType>);
}
