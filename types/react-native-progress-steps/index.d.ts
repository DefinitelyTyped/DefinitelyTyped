declare module "react-native-progress-steps" {
  import { ComponentType, ReactNode } from "react";

  export interface ProgressStepsProps {
    activeStep?: number;
    isComplete?: boolean;
    onNext?: () => void;
    onPrevious?: () => void;
    removeBtnRow?: boolean;
    activeStepIconBorderColor?: string;
    completedProgressBarColor?: string;
    activeLabelColor?: string;
    completedStepIconColor?: string;
    labelColor?: string;
    progressBarColor?: string;
    children: ReactNode;
  }

  export interface ProgressStepProps {
    label: string;
    onNext?: () => void;
    onPrevious?: () => void;
    onSubmit?: () => void;
    nextBtnText?: string;
    previousBtnText?: string;
    finishBtnText?: string;
    nextBtnStyle?: object;
    previousBtnStyle?: object;
    nextBtnTextStyle?: object;
    previousBtnTextStyle?: object;
    removeBtnRow?: boolean;
    scrollViewProps?: object;
    children: ReactNode;
  }

  export const ProgressSteps: ComponentType<ProgressStepsProps>;
  export const ProgressStep: ComponentType<ProgressStepProps>;
}
