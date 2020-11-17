import * as React from 'react';
declare type Props = {
    enabled: boolean;
    children: (props: {
        onPageChangeStart: () => void;
        onPageChangeConfirm: () => void;
        onPageChangeCancel: () => void;
    }) => React.ReactNode;
};
export default class KeyboardManager extends React.Component<Props> {
    componentWillUnmount(): void;
    private previouslyFocusedTextInput;
    private startTimestamp;
    private keyboardTimeout;
    private clearKeyboardTimeout;
    private handlePageChangeStart;
    private handlePageChangeConfirm;
    private handlePageChangeCancel;
    render(): React.ReactNode;
}
export {};
