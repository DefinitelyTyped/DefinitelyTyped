import Language = require("../localisation/Language");

declare namespace FeatureParser {
    interface Options {
        language?: Language<Language.Library>;
        leftPlaceholderChar: string;
        rightPlaceholderChar: string;
    }

    interface AnnotationsExport {
        [key: string]: string;
    }

    interface ScenarioExport {
        title: string;
        annotations: AnnotationsExport;
        description: string;
        steps: string[];
    }

    interface FeatureExport {
        title: string;
        annotations: AnnotationsExport;
        description: string;
        scenarios: ScenarioExport[];
    }

    type SpecificationExport = FeatureExport;
}

declare class FeatureParser {
    constructor(language: Language<Language.Library>);
    constructor(options?: FeatureParser.Options);
    parse(text: string, next: (specification: FeatureParser.SpecificationExport) => void): void;
    parse(text: string): FeatureParser.SpecificationExport;
}

export = FeatureParser;
