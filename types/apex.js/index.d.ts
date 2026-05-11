/// <reference types="aws-lambda" />

declare function λ(
    fn: (event: any, context: AWSLambda.Context) => any,
): (event: any, context: AWSLambda.Context, callback: AWSLambda.Callback) => void;
declare namespace λ {}
export = λ;
