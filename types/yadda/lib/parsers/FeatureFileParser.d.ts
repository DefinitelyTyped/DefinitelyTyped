import Language = require("../localisation/Language");
import FeatureParser = require("./FeatureParser");

declare namespace FeatureFileParser {
    interface Options extends FeatureParser.Options {}
}

declare class FeatureFileParser {
    constructor(language: Language<Language.Library>);
    constructor(options?: FeatureParser.Options);
    parse(file: string, next: (specification: FeatureParser.SpecificationExport) => void): void;
    parse(file: string): FeatureParser.SpecificationExport;
}

export = FeatureFileParser;
