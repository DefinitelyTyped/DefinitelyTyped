// Type definitions for smartwizard 4.3
// Project: https://github.com/techlab/SmartWizard
// Definitions by: Stan Kurek <https://github.com/stankurek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace JQuerySmartwizard {
    type TransitionEffect = 'none' | 'slide' | 'fade';
    type ToolbarPosition = 'none' | 'top' | 'bottom' | 'both';
    type ToolbarButtonPosition = 'left' | 'right';

    interface ToolbarSettings {
        toolbarPosition?: ToolbarPosition;
        toolbarButtonPosition?: ToolbarButtonPosition;
        showNextButton?: boolean;
        showPreviousButton?: boolean;
        toolbarExtraButtons?: JQuery[];
    }

    interface AnchorSettings {
        anchorClickable?: boolean;
        enableAllAnchors?: boolean;
        markDoneStep?: boolean;
        markAllPreviousStepsAsDone?: boolean;
        removeDoneStepOnNavigateBack?: boolean;
        enableAnchorOnDoneStep?: boolean;
    }

    interface Lang {
        next?: string;
        previous?: string;
    }

    interface SmartWizardOptions {
        selected?: number;
        keyNavigation?: boolean;
        autoAdjustHeight?: boolean;
        cycleSteps?: boolean;
        backButtonSupport?: boolean;
        useURLhash?: boolean;
        showStepURLhash?: boolean;
        contentURL?: null | string;
        contentCache?: boolean;
        ajaxSettings?: JQueryAjaxSettings;
        disabledSteps?: number[];
        errorSteps?: number[];
        hiddenSteps?: number[];
        theme?: string;
        transitionEffect?: TransitionEffect;
        transitionSpeed?: string | number;
        toolbarSettings?: ToolbarSettings;
        anchorSettings?: AnchorSettings;
        lang?: Lang;
    }
}

interface JQuery {
    smartWizard(options?: JQuerySmartwizard.SmartWizardOptions): JQuery;
}
