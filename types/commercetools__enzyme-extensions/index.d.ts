import * as enzyme from "enzyme";

declare module "enzyme" {
    interface UntilOptions {
        maxDepth: number;
    }
    interface ShallowWrapper<P = {}> {
        drill(expander: (props: any) => ShallowWrapper): ShallowWrapper<P>;
        until(selector: EnzymeSelector, options?: UntilOptions): ShallowWrapper<P>;
    }
}

declare function monkeyPatchShallowWrapper(s: typeof enzyme.ShallowWrapper): void;

export = monkeyPatchShallowWrapper;
