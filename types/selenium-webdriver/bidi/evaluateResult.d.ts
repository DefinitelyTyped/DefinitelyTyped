interface IEvaluateResultType {
    SUCCESS: "success";
    EXCEPTION: "exception";
}

const EvaluateResultType: IEvaluateResultType;

declare class EvaluateResultSuccess<T> {
    constructor(realmId: string, value: T);
    resultType: "success";
    realmId: string;
    result: T;
}

declare type ExceptionShape = {
    columnNumber?: number;
    exception?: string;
    lineNumber?: number;
    stackTrace?: string;
    text?: string;
};

declare class ExceptionDetails {
    constructor(exceptionDetails: ExceptionShape);
    columnNumber: number | null;
    exception: string | null;
    lineNumber: number | null;
    stackTrace: string | null;
    text: string | null;
}

declare class EvaluateResultException {
    constructor(realmId: string, exceptionDetails: ExceptionShape);
    resultType: "exception";
    realmId: string;
    exceptionDetails: ExceptionDetails;
}

export { EvaluateResultException, EvaluateResultSuccess, EvaluateResultType, ExceptionDetails };
