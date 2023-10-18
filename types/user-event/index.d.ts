export interface UserOpts {
    allAtOnce?: boolean | undefined;
    delay?: number | undefined;
}
declare const userEvent: {
    click: (element: Element | Window) => void;
    dblClick: (element: Element | Window) => void;

    selectOptions: (element: Element | Window, values: string | string[]) => void;

    type: (element: Element | Window, text: string, userOpts?: UserOpts) => Promise<void>;
};

export default userEvent;
