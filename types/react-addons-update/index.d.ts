import * as React from "react";

export = React.__Addons.update;

declare module "react" {
    interface UpdateSpecCommand {
        $set?: any;
        $merge?: {} | undefined;
        $apply?(value: any): any;
    }

    interface UpdateSpecPath {
        [key: string]: UpdateSpec;
    }

    type UpdateSpec = number[][] | UpdateSpecCommand | UpdateSpecPath;

    interface UpdateArraySpec extends UpdateSpecCommand {
        $push?: any[] | undefined;
        $unshift?: any[] | undefined;
        $splice?: any[][] | undefined;
    }

    namespace __Addons {
        export function update(value: any[], spec: UpdateArraySpec): any[];
        export function update(value: {}, spec: UpdateSpec): any;
    }
}
