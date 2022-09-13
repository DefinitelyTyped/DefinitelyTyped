declare function IsConstructor(argument: unknown): argument is new (...args: any) => any;
export = IsConstructor;
