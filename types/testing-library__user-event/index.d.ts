// Type definitions for @testing-library/user-event 4.1
// Project: https://github.com/testing-library/user-event
// Definitions by: Wu Haotian <https://github.com/whtsky>
//                 Weyert de Boer <https://github.com/weyert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface UserOptions {
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
        userOpts?: UserOptions,
    ) => Promise<void>;
};

export default userEvent;
