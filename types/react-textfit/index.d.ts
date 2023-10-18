import * as React from "react";

export interface TextfitProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: "single" | "multi";
    forceSingleModeWidth?: boolean;
    min?: number;
    max?: number;
    throttle?: number;
    onReady?: (fontSize: number) => void;
}

export function Textfit(props: TextfitProps): JSX.Element;
