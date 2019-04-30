// Type definitions for lambda-tester 3.5
// Project: https://github.com/vandium-io/lambda-tester#readme
// Definitions by: Ivan Kerin <https://github.com/ivank>
//                 Hajo Aho-Mantila <https://github.com/HajoAhoMantila>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Context, ClientContext, CognitoIdentity, Handler } from "aws-lambda";

declare namespace lambdaTester {
    type Verifier = (result: any) => void;

    class LambdaTester {
        event(event: any): this;
        context(context: Context): this;
        clientContext(clientContext: ClientContext): this;
        identity(
            cognitoIdentityId: string,
            cognitoIdentityPoolId: string
        ): this;
        timeout(seconds: number): this;
        xray(): this;
        expectSucceed(verifier: Verifier): Promise<any>;
        expectFail(verifier: Verifier): Promise<any>;
        expectError(verifier: Verifier): Promise<any>;
        expectResult(verifier: Verifier): Promise<any>;
        expectReject(verifier: Verifier): Promise<any>;
        expectResolve(verifier: Verifier): Promise<any>;
    }
}

declare function lambdaTester(handler: Handler): lambdaTester.LambdaTester;

export = lambdaTester;
