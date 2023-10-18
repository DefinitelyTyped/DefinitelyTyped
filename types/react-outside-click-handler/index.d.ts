import * as React from "react";

export interface DefaultProps {
    disabled: boolean;
    useCapture: boolean;
    display: "block" | "flex" | "inline" | "inline-block" | "contents";
}

// TODO: Remove partial once DT support TS 3.0, so skipping mandatory listed in default props won't result in compile error
export interface Props extends Partial<DefaultProps> {
    children: React.ReactNode;
    onOutsideClick: (e: MouseEvent) => void;
}

export default class OutsideClickHandler extends React.Component<Props> {
    static defaultProps: DefaultProps;
}
