/// <reference types="jquery"/>

declare namespace JQuerySmartwizard {
    type TransitionEffect = "none" | "slide" | "fade";
    type ToolbarPosition = "none" | "top" | "bottom" | "both";
    type ToolbarButtonPosition = "left" | "right";

    interface ToolbarSettings {
        toolbarPosition?: ToolbarPosition | undefined;
        toolbarButtonPosition?: ToolbarButtonPosition | undefined;
        showNextButton?: boolean | undefined;
        showPreviousButton?: boolean | undefined;
        toolbarExtraButtons?: JQuery[] | undefined;
    }

    interface AnchorSettings {
        anchorClickable?: boolean | undefined;
        enableAllAnchors?: boolean | undefined;
        markDoneStep?: boolean | undefined;
        markAllPreviousStepsAsDone?: boolean | undefined;
        removeDoneStepOnNavigateBack?: boolean | undefined;
        enableAnchorOnDoneStep?: boolean | undefined;
    }

    interface Lang {
        next?: string | undefined;
        previous?: string | undefined;
    }

    interface SmartWizardOptions {
        selected?: number | undefined;
        keyNavigation?: boolean | undefined;
        autoAdjustHeight?: boolean | undefined;
        cycleSteps?: boolean | undefined;
        backButtonSupport?: boolean | undefined;
        useURLhash?: boolean | undefined;
        showStepURLhash?: boolean | undefined;
        contentURL?: null | string | undefined;
        contentCache?: boolean | undefined;
        ajaxSettings?: JQueryAjaxSettings | undefined;
        disabledSteps?: number[] | undefined;
        errorSteps?: number[] | undefined;
        hiddenSteps?: number[] | undefined;
        theme?: string | undefined;
        transitionEffect?: TransitionEffect | undefined;
        transitionSpeed?: string | number | undefined;
        toolbarSettings?: ToolbarSettings | undefined;
        anchorSettings?: AnchorSettings | undefined;
        lang?: Lang | undefined;
    }
}

interface JQuery {
    smartWizard(options?: JQuerySmartwizard.SmartWizardOptions): JQuery;
}
