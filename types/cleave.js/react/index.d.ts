import * as React from "react";
import { Props } from "./props";

declare var Cleave: React.ComponentClass<Props>;
declare namespace Cleave {
    interface ChangeEvent<T> extends React.ChangeEvent<T> {
        target: { rawValue: string } & EventTarget & T
    }
}
export = Cleave;
