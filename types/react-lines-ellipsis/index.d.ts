import { Component, HTMLAttributes } from "react";

declare class LinesEllipsis extends Component<LinesEllipsis.ReactLinesEllipsisProps> {
    static defaultProps?: LinesEllipsis.ReactLinesEllipsisProps;
}

declare namespace LinesEllipsis {
    type CommonReactLinesEllipsisProps = HTMLAttributes<HTMLDivElement> & {
        maxLine?: number | string;
        ellipsis?: string;
        trimRight?: boolean;
        basedOn?: "letters" | "words";
        winWidth?: number;
        onReflow?: ({ clamped, text }: { clamped: boolean; text: string }) => void;
        component?: string;
    };

    type HTMLEllipsisProps = CommonReactLinesEllipsisProps & {
        unsafeHTML?: string;
        ellipsisHTML?: string;
    };

    type LinesEllipsisLooseProps = CommonReactLinesEllipsisProps & {
        lineHeight?: number;
        overflowFallback?: boolean;
    };

    type ReactLinesEllipsisProps = CommonReactLinesEllipsisProps & {
        text?: string;
    };
}

export = LinesEllipsis;
