// Type definitions for LeState v0.1.3
// Project: https://github.com/LeTools/LeState
// Definitions by: Hadrian Oliveira <https://github.com/thelambdaparty/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare let LeState : {
    createState: (props?: {
        initialState: {};
    }) => {
        set(newValue: {}): [{
            id: number;
            state: {};
        }];
        get(): any;
        insert(newValue: {}): void;
        getDescription(): {};
        createListener({ id, selector, force }: {
            id: number;
            selector: (state :any) => {};
            force?: boolean;
        }): void;
    };
};

declare module "lestate" {
    export default LeState;
}
