import * as React from "react";

export interface OffCanvasProps {
    width?: number | undefined;
    transitionDuration?: number | undefined;
    isMenuOpened?: boolean | undefined;
    position?: "left" | "right" | undefined;
    effect?: "push" | "overlay" | "parallax" | undefined;
    children: React.ReactNode;
}

export class OffCanvas extends React.Component<OffCanvasProps> {}

export interface OffCanvasBodyProps {
    width?: number | undefined;
    transitionDuration?: number | undefined;
    isMenuOpened?: boolean | undefined;
    position?: "left" | "right" | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    children: React.ReactNode;
}

export class OffCanvasBody extends React.Component<OffCanvasBodyProps> {}

export interface OffCanvasMenuProps {
    width?: number | undefined;
    transitionDuration?: number | undefined;
    isMenuOpened?: boolean | undefined;
    position?: "left" | "right" | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    children: React.ReactNode;
}

export class OffCanvasMenu extends React.Component<OffCanvasMenuProps> {}
