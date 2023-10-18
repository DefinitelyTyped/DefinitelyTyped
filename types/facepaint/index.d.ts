declare namespace facepaint {
    type BaseArg = object | object[];
    type Arg = BaseArg | BaseArg[];

    type Selector = string;

    interface DynamicStyle {
        [key: string]: {
            [key: string]: string | number;
        };
    }

    interface DynamicStyleFunction {
        (...args: Arg[]): DynamicStyle[];
    }

    interface Options {
        literal?: boolean | undefined;
        overlap?: boolean | undefined;
    }
}

declare function facepaint(
    breakpoints: facepaint.Selector[],
    options?: facepaint.Options,
): facepaint.DynamicStyleFunction;

export = facepaint;
