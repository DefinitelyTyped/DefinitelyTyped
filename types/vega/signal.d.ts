import { Binding } from './bind';
import { Expr } from './expr';
import { OnEvent } from './on-events';
export declare type SignalRef = {
    signal: string;
};
export interface BaseSignal {
    name: string;
    description?: string;
    on?: OnEvent[];
}
export interface PushSignal extends BaseSignal {
    push?: 'outer';
}
export interface NewSignal extends BaseSignal {
    value?: any;
    react?: boolean;
    update?: Expr;
    bind?: Binding;
}
export declare type Signal = NewSignal | PushSignal;
