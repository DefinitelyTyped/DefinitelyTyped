import { ReactNode } from "react";

interface ClipboardProps {
    render: () => ReactNode;
    text: string;
    props?: object | undefined;
    onSuccess?: () => void | undefined;
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
