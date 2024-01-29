/// <reference types="node" />

import * as fs from "fs";

declare function parse(input: fs.ReadStream | string, callback: (solution: parse.VsSolutionFile) => void): void;

declare namespace parse {
    interface VsSolutionFile extends VsSolutionSection, VsSolutionSectionCollection {
        visualStudioVersion?: string | undefined;
        minimumVisualStudioVersion?: string | undefined;
        projects: VsSolutionProject[];
        solutionConfigurationPlatforms?: VsSolutionSection | undefined;
        projectConfigurationPlatforms?: VsSolutionSection | undefined;
        solutionProperties?: VsSolutionSection | undefined;
        nestedProjects?: VsSolutionSection | undefined;
        teamFoundationVersionControl?: VsSolutionSection | undefined;
    }

    interface VsSolutionProject extends VsSolutionSection, VsSolutionSectionCollection {
        name: string;
        type: string;
        projectGuid: string;
        typeGuid: string;
        path: string;
        projectDependencies?: VsSolutionSection | undefined;
    }

    interface VsSolutionSection {
        [index: string]: any;
    }

    interface VsSolutionSectionCollection {
        [index: string]: VsSolutionSection;
    }
}

export = parse;
