import * as lambdaTester from "lambda-tester";
import { Handler, Context, ClientContext } from "aws-lambda";

const handler: Handler = () => Promise.resolve();
const context: Context = {} as any;
const clientContext: ClientContext = {} as any;

interface TResult {
    data: string;
}
interface TError {
    message: string;
}

lambdaTester(handler)
    .event({ test: "123" })
    .context(context)
    .clientContext(clientContext)
    .xray()
    .identity("123", "123")
    .expectSucceed((result: TResult) => {
        const t: string = result.data;
    })
    .expectFail((error: TError) => {
        const t: string = error.message;
    })
    .expectResolve((result: TResult) => {
        const t: string = result.data;
    })
    .expectReject((error: TError) => {
        const t: string = error.message;
    })
    .expectResult((result: TResult) => {
        const t: string = result.data;
    })
    .expectError((error: TError) => {
        const t: string = error.message;
    });
