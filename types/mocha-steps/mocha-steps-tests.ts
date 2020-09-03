import * as MochaSteps from "mocha-steps";

describe("Mocha Steps Test", () => {
    step("Step Test", () => {
        const module_name = "mocha-steps";
    });

    xstep("Skip Step Test", () => {
        const module_name = "mocha-steps";
    });

    MochaSteps.step("Step Test", () => {
        const module_name = "mocha-steps";
    });

    MochaSteps.xstep("Skip Step Test", () => {
        const module_name = "mocha-steps";
    });
});
