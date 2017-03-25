// Type definitions for immutability-helper v2.0.0
// Project: https://github.com/kolodny/immutability-helper
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface UpdateSpecCommand {
    $set?: any;
    $merge?: {};
    $apply?(value: any): any;
    [customCommand: string]: any;
}

interface UpdateSpecPath {
    [pathPart: string]: UpdateSpec;
}

type UpdateSpec = UpdateSpecCommand | UpdateSpecPath;

interface UpdateArraySpec extends UpdateSpecCommand {
    $push?: any[];
    $unshift?: any[];
    $splice?: any[][];
    [customCommand: string]: any;
}

type CommandHandler = (specValue: any, originalValue: any) => any;

interface UpdateFunction {
    (value: any[], spec: UpdateArraySpec): any[];
    (value: {}, spec: UpdateSpec): any;
    extend: (commandName: string, handler: CommandHandler) => any;
}

interface Update extends UpdateFunction {
    newContext(): UpdateFunction;
}

declare const update: Update;
export = update;
