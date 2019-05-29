/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface ProgressStepsOverrides {
  Root?: Override<any>;
}
export interface ProgressStepsProps {
  overrides?: ProgressStepsOverrides;
  children?: React.ReactNode;
  current?: number;
}
export const ProgressSteps: React.FC<ProgressStepsProps>;

export interface StepOverrides {
  Root?: Override<any>;
  Icon?: Override<any>;
  InnerIcon?: Override<any>;
  Tail?: Override<any>;
  Content?: Override<any>;
  Title?: Override<any>;
  Description?: Override<any>;
}
export interface StepProps {
  title?: React.ReactNode;
  isCompleted?: boolean;
  isActive?: boolean;
  isLast?: boolean;
  overrides?: StepOverrides;
  children?: React.ReactNode;
}
export const Step: React.FC<StepProps>;

export interface NumberedStepOverrides {
  Root?: Override<any>;
  Icon?: Override<any>;
  InnerIcon?: Override<any>;
  Tail?: Override<any>;
  Content?: Override<any>;
  Title?: Override<any>;
  Description?: Override<any>;
}
export interface NumberedStepProps {
  title?: string;
  isCompleted?: boolean;
  isActive?: boolean;
  isLast?: boolean;
  overrides?: NumberedStepOverrides;
  children?: React.ReactNode;
  step?: React.ReactNode;
}
export const NumberedStep: React.FC<NumberedStepProps>;

export interface StyleProps {
  $isActive?: boolean;
  $isCompleted?: boolean;
  $disabled?: boolean;
}
export const StyledProgressSteps: StyletronComponent<StyleProps>;
export const StyledStep: StyletronComponent<StyleProps>;
export const StyledIcon: StyletronComponent<StyleProps>;
export const StyledInnerIcon: StyletronComponent<StyleProps>;
export const StyledContent: StyletronComponent<StyleProps>;
export const StyledContentTitle: StyletronComponent<StyleProps>;
export const StyledContentTail: StyletronComponent<StyleProps>;
export const StyledContentDescription: StyletronComponent<StyleProps>;
export const StyledNumberStep: StyletronComponent<StyleProps>;
export const StyledNumberIcon: StyletronComponent<StyleProps>;
export const StyledNumberContentTail: StyletronComponent<StyleProps>;
