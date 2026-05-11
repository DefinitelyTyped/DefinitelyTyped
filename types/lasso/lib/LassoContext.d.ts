/// <reference types="node" />
import { EventEmitter } from "events";
import { writers } from "../index";
import { DependencyRegistry } from "./dependencies";
import Lasso from "./Lasso";

export default class LassoContext extends EventEmitter {
    constructor();

    LassoContext: boolean;
    basePath?: string | undefined;
    contentType?: string | undefined;
    data?: any;
    dependencyRegistry: DependencyRegistry;
    flags: any[];
    config: any;
    writer: writers.Writer;
    lasso: Lasso;
    cache: any;
    options: any;
}
