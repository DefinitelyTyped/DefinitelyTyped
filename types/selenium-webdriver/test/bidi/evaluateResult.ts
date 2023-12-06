import { error } from "console";
import {
    EvaluateResultException,
    EvaluateResultSuccess,
    ExceptionDetails,
} from "selenium-webdriver/bidi/evaluateResult";

function TestEvaluateResultSuccess() {
    const evaluateResultSuccess = new EvaluateResultSuccess("asdf", "string");
    if (evaluateResultSuccess.result !== "string") {
        throw new Error("EvaluateResultSuccess failure");
    }
}

function TestEvaluateResultException() {
    const exceptionDetails = new ExceptionDetails({
        columnNumber: 12,
    });
    if (exceptionDetails.columnNumber !== 12) {
        throw new Error("ExceptionDetails failure");
    }
    const evaluateResultException = new EvaluateResultException("asdf", {
        columnNumber: 12,
    });
    if (evaluateResultException.exceptionDetails.columnNumber !== 12) {
        throw new Error("EvaluateResultException failure");
    }
}
