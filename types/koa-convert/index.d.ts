import { DefaultContext, DefaultState, Middleware, Next } from "koa";

type MW<State, Context> = ((next: any) => Generator) | (Middleware<State, Context>);

declare namespace KoaConvert {
    interface convert {
        <State = DefaultState, Context = DefaultContext>(
            mw: MW<State, Context>,
        ): Middleware<State, Context>;

        compose<State = DefaultState, Context = DefaultContext>(
            ...mw: Array<MW<State, Context>>
        ): Middleware<State, Context>;

        back<State = DefaultState, Context = DefaultContext>(
            mw: MW<State, Context>,
        ): Middleware<State, Context>;
    }
}

declare const convert: KoaConvert.convert;

export = convert;
