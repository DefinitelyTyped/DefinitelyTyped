import * as React from "react";
import { InternationalProps, ReactAttr, ReactButtonAttr } from "../../../typings/shared";

// ProgressStep

export type ProgressStepTranslationKey =
    | "carbon.progress-step.complete"
    | "carbon.progress-step.incomplete"
    | "carbon.progress-step.current"
    | "carbon.progress-step.invalid";

export interface RenderLabelProps {
    className: ReactAttr["className"];
}

export interface ProgressStepProps
    extends Omit<ReactButtonAttr, "onClick">, InternationalProps<ProgressStepTranslationKey>
{
    complete?: boolean | undefined; // provided by parent
    current?: boolean | undefined;
    description?: string | undefined;
    index?: number | undefined; // provided by parent
    invalid?: boolean | undefined;
    label: NonNullable<React.ReactNode>;
    onClick?(e?: React.MouseEvent<HTMLButtonElement>): void; // provided by parent
    overflowTooltipProps?: object | undefined;
    renderLabel?: React.FC<RenderLabelProps> | undefined;
    secondaryLabel?: string | undefined;
    tooltipId?: string | undefined;
}

export declare const ProgressStep: React.FC<ProgressStepProps>;

// ProgressIndicator

export interface ProgressIndicatorProps extends Omit<ReactAttr<HTMLUListElement>, "onChange"> {
    currentIndex?: number | undefined;
    onChange?(index: number): void;
    vertical?: boolean | undefined;
    spaceEqually?: boolean | undefined;
}

export declare class ProgressIndicator extends React.Component<ProgressIndicatorProps> {}
