// Type definitions for @testing-library/user-event 4.0
// Project: https://github.com/testing-library/user-event
// Definitions by: Wu Haotian <https://github.com/whtsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface IUserOptions {
    allAtOnce?: boolean;
    delay?: number;
}

type TargetElement = Element | Window;

declare const userEvent: {
    click: (element: TargetElement) => void;
    dblClick: (element: TargetElement) => void;
    selectOptions: (element: TargetElement, values: string | string[]) => void;
    type: (
        element: TargetElement,
        text: string,
        userOpts?: IUserOptions
    ) => Promise<void>;
};

export default userEvent;