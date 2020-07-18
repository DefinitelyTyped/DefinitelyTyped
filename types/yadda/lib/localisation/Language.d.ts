import Dictionary = require("../Dictionary");
import Library = require("../Library");

declare namespace Language {
    interface Vocabulary {
        _steps: string[];
    }

    interface Library {}
}

declare class Language<TLibrary extends Language.Library> {
    is_language: true;
    constructor(name: string, vocabulary: Language.Vocabulary);
    library(dictionary?: Dictionary): TLibrary;
    localise_library(library: Library): TLibrary;
    localise(keyword: string): string;
}

export = Language;
