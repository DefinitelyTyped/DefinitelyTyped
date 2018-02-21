import { Expr, ExprRef } from './expr';
import { EventSelector } from './selector';
import { SignalRef } from './signal';
import { Stream } from './stream';
export declare type Events = EventSelector | SignalRef | Stream | Stream[] | {
    scale: string;
};
export declare type Update = Expr | ExprRef | SignalRef | {
    value: any;
};
export declare type OnEvent = ({
    encode: string;
} | {
    update: Update;
}) & {
    events: Events;
    force?: boolean;
};
