// Type definitions for user-event 1.4
// Project: https://github.com/Gpx/user-event#readme
// Definitions by: Wu Haotian <https://github.com/whtsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface UserOpts {
    allAtOnce?: boolean;
    delay?: number;
}
declare const userEvent: {
    click: (element: Element | Window) => void;
    dblClick: (element: Element | Window) => void;
    type: (
        element: Element | Window,
        text: string,
        userOpts?: UserOpts
    ) => Promise<void>;
};

export default userEvent;
