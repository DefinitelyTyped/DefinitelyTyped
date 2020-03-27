import * as React from "react";
import { ReactAttr, ReactInputAttr, ValidityProps } from "../../../typings/shared";

// ProgressStep

interface ProgressStepInheritedProps {
    className?: ReactAttr["className"],
    disabled?: ReactInputAttr["disabled"],
    invalid?: ValidityProps["invalid"],
}

export interface RenderLabelProps {
    className: ReactAttr["className"],
}

export interface ProgressStepProps extends ProgressStepInheritedProps {
    complete?: boolean, // provided by parent
    current?: boolean,
    description?: boolean,
    index?: number, // provided by parent
    label: NonNullable<React.ReactNode>,
    onClick?(e?: React.MouseEvent<HTMLDivElement>): void, // provided by parent
    overflowTooltipProps?: object,
    renderLabel?: React.FC<RenderLabelProps>,
    secondaryLabel?: string,
    tooltipId?: string,
}

export declare const ProgressStep: React.FC<ProgressStepProps>;

// ProgressIndicator

interface ProgressIndicatorInheritedProps extends Omit<ReactAttr<HTMLUListElement>, "onChange"> { }

export interface ProgressIndicatorProps extends ProgressIndicatorInheritedProps {
    currentIndex?: number,
    onChange?(index: number): void,
}

export declare class ProgressIndicator extends React.Component<ProgressIndicatorProps> { }
