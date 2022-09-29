import Koa = require('koa');
import Roles = require('koa-roles');

interface TestState {
    foo: string;
}

interface TestContext {
    bar: string;
}

const any = {} as any;
const action1: 'action1' = any;
const action2: 'action2' = any;
const action1or2: 'action1' | 'action2' = any;
const options1: Roles.Options = any;
const options2: Roles.Options<TestState, TestContext, string> = any;
const handler1: Roles.Handler = any;
const handler2: Roles.Handler<TestState, TestContext, string> = any;
const handler1or2: typeof handler1 | typeof handler2 = any;
const handler3: Roles.Handler<TestState, TestContext, string, 'action1'> = any;

// $ExpectType Roles<DefaultState, DefaultContext, unknown>
const roles1 = new Roles();
// $ExpectType Roles<DefaultState, DefaultContext, unknown>
new Roles(options1);
// $ExpectType Roles<TestState, TestContext, string>
const roles2 = new Roles<TestState, TestContext, string>();
// $ExpectType Roles<TestState, TestContext, string>
new Roles(options2);

// $ExpectType Middleware<DefaultState, DefaultContext, unknown>
roles1.can('something');
// $ExpectType Middleware<TestState, TestContext, string>
roles2.can('something');

// $ExpectType void
roles1.use(handler1);
// @ts-expect-error
roles1.use(handler2);
// $ExpectType void
roles1.use(action1or2, handler1);
// $ExpectType void
roles2.use(handler1or2);
// @ts-expect-error
roles2.use(handler3);
// $ExpectType void
roles2.use(action1or2, handler1or2);
// $ExpectType void
roles2.use(action1, handler3);
// @ts-expect-error
roles2.use(action2, handler3);

// $ExpectType Middleware<DefaultState, DefaultContext, unknown>
roles1.middleware();
// $ExpectType Middleware<TestState, TestContext, string>
roles2.middleware();

function testHandler() {
    const maybePromiseBoolean: boolean | Promise<boolean> = any;

    const handler1: Roles.Handler = (ctx: Koa.Context, action: string) => maybePromiseBoolean;
    const handler2: Roles.Handler<TestState, TestContext, string> = (ctx: Koa.ParameterizedContext<TestState, TestContext, string>, action: string) => maybePromiseBoolean;
    const handler3: Roles.Handler<TestState, TestContext, string, 'action'> = (ctx: Koa.ParameterizedContext<TestState, TestContext, string>, action: 'action') => maybePromiseBoolean;
    const handler4: Roles.Handler = (ctx: Koa.DefaultContextExtends, action: string) => maybePromiseBoolean;
}

function testOptions() {
    const failureHandler1: (ctx: Koa.Context, action: string) => void = any;
    const failureHandler2: (ctx: Koa.ParameterizedContext<TestState, TestContext, string>, action: string) => void = any;
    const failureHandler3: (ctx: Koa.DefaultContextExtends, action: string) => void = any;
    const failureHandler4: (ctx: Koa.Context, action: 'action') => void = any;

    const options1: Roles.Options = {};
    const options2: Roles.Options = {
        // @ts-expect-error
        failureHandler: false,
    };
    const options3: Roles.Options = {
        failureHandler: failureHandler1,
    };
    const options4: Roles.Options<TestState, TestContext, string> = {
        failureHandler: failureHandler2,
    };
    const options5: Roles.Options = {
        failureHandler: failureHandler3,
    };
    const options6: Roles.Options = {
        // @ts-expect-error
        failureHandler: failureHandler4,
    };
    const options7: Roles.Options = {
        userProperty: 'user',
    };
    const options8: Roles.Options = {
        // @ts-expect-error
        userProperty: false,
    };
}
