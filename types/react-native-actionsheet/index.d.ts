import * as React from "react";

export interface ActionSheetProps {
    options: string[];
    onPress: (index: number) => void;
    title?: string | undefined;
    message?: string | undefined;
    tintColor?: string | undefined;
    cancelButtonIndex?: number | undefined;
    destructiveButtonIndex?: number | undefined;
}

export interface ActionSheetCustomProps {
    options: React.ReactNode[];
    onPress: (index: number) => void;
    title?: React.ReactNode | undefined;
    message?: string | undefined;
    tintColor?: string | undefined;
    buttonUnderlayColor?: string | undefined;
    cancelButtonIndex?: number | undefined;
    destructiveButtonIndex?: number | undefined;
    styles?: object | undefined;
}

export default class ActionSheet extends React.Component<ActionSheetProps> {
    show: () => void;
}

export class ActionSheetCustom extends React.Component<ActionSheetCustomProps> {
    hide: (index?: number) => void;
    show: () => void;
}
