import * as eventStream from "event-stream";

export = GulpChange;

declare function GulpChange(transformer: GulpChange.ChangeFunction): eventStream.MapStream;

declare namespace GulpChange {
    type Callback = (err: any, content: string) => any;

    type ChangeFunction = (content: string, callback: Callback) => string | void;
}
