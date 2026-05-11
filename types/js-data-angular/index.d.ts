/// <reference types="js-data" />
/// <reference types="angular" />

import * as ng from "angular";
import * as JSData from "js-data";

declare module "js-data" {
    interface DSProvider {
        defaults: DSConfiguration;
    }

    interface DS {
        bindAll<T>(
            resourceName: string,
            params: DSFilterParams,
            scope: ng.IScope,
            expr: string,
            cb?: (err: DSError, items: Array<T & DSInstanceShorthands<T>>) => void,
        ): Function;
        bindOne<T>(
            resourceName: string,
            id: string | number,
            scope: ng.IScope,
            expr: string,
            cb?: (err: DSError, item: T & DSInstanceShorthands<T>) => void,
        ): Function;
    }

    interface DSResourceDefinition<T> {
        bindAll(
            params: DSFilterParams,
            scope: ng.IScope,
            expr: string,
            cb?: (err: DSError, items: Array<T & DSInstanceShorthands<T>>) => void,
        ): Function;
        bindOne(
            id: string | number,
            scope: ng.IScope,
            expr: string,
            cb?: (err: DSError, item: T & DSInstanceShorthands<T>) => void,
        ): Function;
    }
}
