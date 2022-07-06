// Declare a bunch of basic types up front. Since this file has no imports
// or exports, typescript treats these as global declarations that can be
// used in tests/* files.
// Don't add declarations for service-specific types here; i.e. not from
// common/ or trigger/, but handler.d.ts is fine. Those can be in the
// service-specific tests in tests/{service}-tests.ts
declare let str: string;
declare let strOrNull: string | null;
declare let strOrUndefined: string | undefined;
declare let strOrUndefinedOrNull: string | undefined | null;
declare let date: Date;
declare let obj: {};
declare let array: any[];
declare let anyObj: any;
declare let num: number;
declare let error: Error;
declare let bool: boolean;
declare let boolOrUndefined: boolean | undefined;
declare let boolOrNumOrStr: boolean | number | string;
declare let numOrUndefined: number | undefined;
declare let strArrayOrUndefined: string[] | undefined;
declare let nullOrUndefined: null | undefined;
declare let objectOrUndefined: {} | undefined;

// handler.d.ts types
declare let context: AWSLambda.Context;
declare let clientCtx: AWSLambda.ClientContext;
declare let clientCtxOrUndefined: AWSLambda.ClientContext | undefined;
declare let clientContextEnv: AWSLambda.ClientContextEnv;
declare let clientContextClient: AWSLambda.ClientContextClient;
declare let identity: AWSLambda.CognitoIdentity;
declare let identityOrUndefined: AWSLambda.CognitoIdentity | undefined;

/* Context */
bool = context.callbackWaitsForEmptyEventLoop;
str = context.functionName;
str = context.functionVersion;
str = context.invokedFunctionArn;
str = context.memoryLimitInMB;
str = context.awsRequestId;
str = context.logGroupName;
str = context.logStreamName;
identityOrUndefined = context.identity;
clientCtxOrUndefined = context.clientContext;

str = identity.cognitoIdentityId;
str = identity.cognitoIdentityPoolId;

/* ClientContext */
clientContextClient = clientCtx.client;
anyObj = clientCtx.Custom;
clientContextEnv = clientCtx.env;

/* ClientContextEnv */
str = clientContextEnv.locale;
str = clientContextEnv.make;
str = clientContextEnv.model;
str = clientContextEnv.platform;
str = clientContextEnv.platformVersion;

/* ClientContextClient */
str = clientContextClient.appPackageName;
str = clientContextClient.appTitle;
str = clientContextClient.appVersionCode;
str = clientContextClient.appVersionName;
str = clientContextClient.installationId;

declare const untypedCallback: AWSLambda.Callback;
untypedCallback();
untypedCallback(undefined);
untypedCallback(null);
untypedCallback(error);
untypedCallback(str); // https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html
untypedCallback(null, anyObj);
untypedCallback(undefined, bool);
untypedCallback(null, bool);
untypedCallback(null, str);
untypedCallback(null, num);
untypedCallback(null, { foo: 123 });
untypedCallback(null, { bar: 123 });
// @ts-expect-error
untypedCallback(null, anyObj, anyObj);

interface TestResult { foo: number; }
declare const typedCallback: AWSLambda.Callback<TestResult>;
typedCallback();
typedCallback(undefined);
typedCallback(null);
typedCallback(error);
typedCallback(str); // https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html
typedCallback(null, anyObj);
typedCallback(null, { foo: 123 });
// @ts-expect-error
typedCallback(null, str);
// @ts-expect-error
typedCallback(null, { bar: 123 });

/* Compatibility functions */
context.done();
context.done(error);
context.done(error, anyObj);
context.succeed(str);
context.succeed(anyObj);
context.succeed(str, anyObj);
context.fail(error);
context.fail(str);

interface CustomEvent {
    eventString: string;
    eventBool: boolean;
}
interface CustomResult {
    resultString: string;
    resultBool?: boolean | undefined;
}
type CustomHandler = AWSLambda.Handler<CustomEvent, CustomResult>;
type CustomCallback = AWSLambda.Callback<CustomResult>;

// Untyped handlers should work
const untypedAsyncHandler: AWSLambda.Handler = async (event, context, cb) => {
    // $ExpectType any
    event;
    // $ExpectType Context
    context;
    // $ExpectType Callback<any>
    cb;
    // Can still use callback
    cb(null, { resultString: str });
    if (bool) {
        // Uncaught error
        return { resultString: bool };
    }
    return { resultString: str };
};

const untypedCallbackHandler: AWSLambda.Handler = (event, context, cb) => {
    // $ExpectType any
    event;
    // $ExpectType Context
    context;
    // $ExpectType Callback<any>
    cb;
    cb(null, { resultString: str });
    // Uncaught error
    cb(null, { resultString: bool });
};

/* In node8.10 runtime, handlers may return a promise for the result value, so existing async
 * handlers that return Promise<void> before calling the callback will now have a `null` result.
 * Be safe and make that badly typed with a major verson bump to 8.10 so users expect the breaking change,
 * since the upgrade effort should be pretty low in most cases, and it points them at a nicer solution.
 */

// Test we get error for unsafe old style
// @ts-expect-error
const unsafeAsyncHandler: CustomHandler = async (event, context, cb) => {
    cb(null, { resultString: 'No longer valid' });
};

// Test safe old style still works
const typedCallbackHandler: CustomHandler = (event, context, cb) => {
    // $ExpectType CustomEvent
    event;
    str = event.eventString;
    // $ExpectType Context
    context;
    str = context.functionName;
    // $ExpectType Callback<CustomResult>
    cb;
    cb();
    cb(null);
    cb(new Error());
    // @ts-expect-error
    cb(null, {});
    cb(null, { resultString: str });
    // @ts-expect-error
    cb(null, { resultString: bool });
};

// Test preferred new type
const typedAsyncHandler: CustomHandler = async (event, context, cb) => {
    // $ExpectType CustomEvent
    event;
    // $ExpectType Context
    context;
    // $ExpectType Callback<CustomResult>
    cb;
    // Can still use callback
    cb(null, { resultString: str });
    return { resultString: 'Is now valid!' };
};

// @ts-expect-error
const badTypedAsyncHandler: CustomHandler = async (event, context, cb) => ({ resultString: bool });

// Test using untyped Callback type still works.
const mixedUntypedCallbackTypedHandler: CustomHandler = (
    event: CustomEvent,
    context: AWSLambda.Context,
    cb: AWSLambda.Callback,
) => {};
