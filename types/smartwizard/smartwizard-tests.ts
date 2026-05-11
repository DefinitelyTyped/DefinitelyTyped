import "jquery";
import "smartwizard";

const options: JQuerySmartwizard.SmartWizardOptions = {
    selected: 0,
    theme: "default",
    justified: true,
    darkMode: false,
    autoAdjustHeight: true,
    cycleSteps: false,
    backButtonSupport: true,
    enableURLhash: true,
    transition: {
        animation: "slide-horizontal",
        speed: "400",
        easing: "",
    },
    toolbarSettings: {
        toolbarPosition: "bottom",
        toolbarButtonPosition: "right",
        showNextButton: true,
        showPreviousButton: true,
        toolbarExtraButtons: [
            $("<button></button>")
                .text("Finish")
                .addClass("btn btn-info")
                .on("click", () => {
                    alert("Finsih button click");
                }),
            $("<button></button>")
                .text("Cancel")
                .addClass("btn btn-danger")
                .on("click", () => {
                    alert("Cancel button click");
                }),
        ],
    },
    anchorSettings: {
        anchorClickable: true,
        enableAllAnchors: false,
        markDoneStep: true,
        markAllPreviousStepsAsDone: true,
        removeDoneStepOnNavigateBack: false,
        enableAnchorOnDoneStep: true,
    },
    keyboardSettings: {
        keyNavigation: true,
        keyLeft: [37],
        keyRight: [39],
    },
    lang: {
        next: "Next",
        previous: "Previous",
    },
    disabledSteps: [1, 2],
    errorSteps: [3],
    hiddenSteps: [4],
};

/**
 * SmartWizard initialize
 */
$("#smartwizard").smartWizard();

/**
 * Go to step
 */
$("#smartwizard").smartWizard("goToStep", 3);

/**
 * Change theme
 */
$("#smartwizard").smartWizard("setOptions", {
    theme: "dark",
});

/**
 * Change animation
 */
$("#smartwizard").smartWizard("setOptions", {
    transition: {
        animation: "slide-horizontal",
    },
});

/**
 * Change options
 */
$("#smartwizard").smartWizard("setOptions", options);

/**
 * Navigate next
 */
$("#smartwizard").smartWizard("next");

/**
 * Navigate previous
 */
$("#smartwizard").smartWizard("prev");

/**
 * Reset wizard
 */
$("#smartwizard").smartWizard("reset");

/**
 * Disable step
 */
$("#smartwizard").smartWizard("stepState", [1, 3], "disable");

/**
 * Hide step
 */
$("#smartwizard").smartWizard("stepState", [2], "hide");

/**
 * Get current step index
 */
const stepIndex = $("#smartwizard").smartWizard("getStepIndex");

// @ExpectedType number
stepIndex;

/**
 * Show the loader
 */
$("#smartwizard").smartWizard("loader", "show");

/**
 * Hide the loader
 */
$("#smartwizard").smartWizard("loader", "hide");

/**
 * Events
 */

/**
 * leaveStep event
 */
$("#smartwizard").on("leaveStep", (e, anchorObject, currentStepIndex, nextStepIndex, stepDirection) => {
    // @ExpectedType JQuery<HTMLAnchorElement>
    anchorObject;
    // @ExpectedType number
    currentStepIndex;
    // @ExpectedType number
    nextStepIndex;
    // @ExpectedType number
    stepDirection;
});

/**
 * showStep event
 */
$("#smartwizard").on("showStep", (e, anchorObject, stepIndex, stepDirection) => {
    // @ExpectedType Event
    e;
    // @ExpectedType JQuery<HTMLAnchorElement>
    anchorObject;
    // @ExpectedType number
    stepIndex;
    // @ExpectedType number
    stepDirection;
});

/**
 * stepContent event
 */
$("#smartwizard").on("stepContent", (e, anchorObject, stepIndex, stepDirection) => {
    // @ExpectedType Event
    e;
    // @ExpectedType JQuery<HTMLAnchorElement>
    anchorObject;
    // @ExpectedType number
    stepIndex;
    // @ExpectedType number
    stepDirection;
});
