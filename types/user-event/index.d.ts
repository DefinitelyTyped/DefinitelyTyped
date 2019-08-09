// Type definitions for user-event 4.1
// Project: https://github.com/testing-library/user-event
// Definitions by: Wu Haotian <https://github.com/whtsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface UserOpts {
    allAtOnce?: boolean;
    delay?: number;
}
declare const userEvent: {
    click: (element: Element | Window) => void;
    dblClick: (element: Element | Window) => void;

    selectOptions: (element: Element | Window, values: string | string[]) => void;

    type: (element: Element | Window, text: string, userOpts?: UserOpts) => Promise<void>;
};

export default userEvent;
