import Koa = require("koa");

declare class Roles<
    StateT extends Koa.DefaultStateExtends = Koa.DefaultState,
    ContextT extends Koa.DefaultContextExtends = Koa.DefaultContext,
    ResponseBodyT = unknown,
> {
    constructor(options?: Roles.Options<StateT, ContextT, ResponseBodyT>);

    can(action: string): Koa.Middleware<StateT, ContextT, ResponseBodyT>;

    use(fn: Roles.Handler<StateT, ContextT, ResponseBodyT>): void;
    use<Action extends string>(action: Action, fn: Roles.Handler<StateT, ContextT, ResponseBodyT, Action>): void;

    middleware(): Koa.Middleware<StateT, ContextT, ResponseBodyT>;
}

declare namespace Roles {
    type Handler<
        StateT extends Koa.DefaultStateExtends = Koa.DefaultState,
        ContextT extends Koa.DefaultContextExtends = Koa.DefaultContext,
        ResponseBodyT = unknown,
        Action extends string = string,
    > = (ctx: Koa.ParameterizedContext<StateT, ContextT, ResponseBodyT>, action: Action) => boolean | Promise<boolean>;

    interface Options<
        StateT extends Koa.DefaultStateExtends = Koa.DefaultState,
        ContextT extends Koa.DefaultContextExtends = Koa.DefaultContext,
        ResponseBodyT = unknown,
    > {
        failureHandler?: (ctx: Koa.ParameterizedContext<StateT, ContextT, ResponseBodyT>, action: string) => void;
        userProperty?: string;
    }
}

export = Roles;
