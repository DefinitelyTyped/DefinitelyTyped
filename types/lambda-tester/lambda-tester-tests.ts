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

function lambdaTesterInstance() {
    return lambdaTester(handler).event({ test: "123" });
}

lambdaTesterInstance()
    .context(context)
    .clientContext(clientContext)
    .xray()
    .identity("123", "123")
    .expectSucceed((result: TResult) => {
        const t: string = result.data;
    });

lambdaTesterInstance().expectFail((error: TError) => {
    const t: string = error.message;
});

lambdaTesterInstance().expectResolve((result: TResult) => {
    const t: string = result.data;
});

lambdaTesterInstance().expectReject((error: TError) => {
    const t: string = error.message;
});

lambdaTesterInstance().expectResult((result: TResult) => {
    const t: string = result.data;
});

lambdaTesterInstance().expectError((error: TError) => {
    const t: string = error.message;
});
