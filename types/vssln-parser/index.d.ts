// Type definitions for vssln-parser 0.1
// Project: https://github.com/mhusseini/vssln-parser
// Definitions by: Erik Källén <https://github.com/erik-kallen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from 'fs';

declare function parse(input: fs.ReadStream | string, callback: (solution: parse.VsSolutionFile) => void): void;

declare namespace parse {
  interface VsSolutionFile extends VsSolutionSection, VsSolutionSectionCollection {
    visualStudioVersion?: string;
    minimumVisualStudioVersion?: string;
    projects: VsSolutionProject[];
    solutionConfigurationPlatforms?: VsSolutionSection;
    projectConfigurationPlatforms?: VsSolutionSection;
    solutionProperties?: VsSolutionSection;
    nestedProjects?: VsSolutionSection;
    teamFoundationVersionControl?: VsSolutionSection;
  }

  interface VsSolutionProject extends VsSolutionSection, VsSolutionSectionCollection {
    name: string;
    type: string;
    projectGuid: string;
    typeGuid: string;
    path: string;
    projectDependencies?: VsSolutionSection;
  }

  interface VsSolutionSection {
    [index: string]: any;
  }

  interface VsSolutionSectionCollection {
    [index: string]: VsSolutionSection;
  }
}

export = parse;
