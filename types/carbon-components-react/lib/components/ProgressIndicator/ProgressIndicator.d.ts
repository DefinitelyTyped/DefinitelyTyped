import * as React from "react";
import { ReactAttr, InternationalProps, ReactButtonAttr } from "../../../typings/shared";

// ProgressStep

export type ProgressStepTranslationKey =
    "carbon.progress-step.complete"
    | "carbon.progress-step.incomplete"
    | "carbon.progress-step.current"
    | "carbon.progress-step.invalid";

export interface RenderLabelProps {
    className: ReactAttr["className"],
}

export interface ProgressStepProps extends Omit<ReactButtonAttr, "onClick">, InternationalProps<ProgressStepTranslationKey> {
    complete?: boolean, // provided by parent
    current?: boolean,
    description?: string,
    index?: number, // provided by parent
    invalid?: boolean,
    label: NonNullable<React.ReactNode>,
    onClick?(e?: React.MouseEvent<HTMLButtonElement>): void, // provided by parent
    overflowTooltipProps?: object,
    renderLabel?: React.FC<RenderLabelProps>,
    secondaryLabel?: string,
    tooltipId?: string,
}

export declare const ProgressStep: React.FC<ProgressStepProps>;

// ProgressIndicator

export interface ProgressIndicatorProps extends Omit<ReactAttr<HTMLUListElement>, "onChange"> {
    currentIndex?: number,
    onChange?(index: number): void,
    vertical?: boolean,
    spaceEqually?: boolean,
}

export declare class ProgressIndicator extends React.Component<ProgressIndicatorProps> { }
