/// <reference types="mocha" />

import { Feature, Scenario } from "../..";

declare global {
    function featureFile(file: string, iterator: (feature: Feature) => void): void;
    function featureFiles(files: string[], iterator: (feature: Feature) => void): void;

    function scenario(scenario: Scenario, iterator: (scenario: Scenario) => void): void;
    function scenarios(scenarios: Scenario[], iterator: (scenario: Scenario) => void): void;

    function step(step: string, iterator: (step: string, done: () => void) => void): void;
    function steps(steps: string[], iterator: (step: string, done: () => void) => void): void;
}
