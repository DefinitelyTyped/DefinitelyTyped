import { ReactNode } from "react";

interface ClipboardProps {
    render: () => ReactNode;
    text: string;
    props?: object | undefined;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onSuccess?: () => void | undefined;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onError?: () => void | undefined;
}

declare function Clipboard({
    render,
    text,
    props,
    onSuccess,
    onError,
}: ClipboardProps): JSX.Element;

export default Clipboard;
