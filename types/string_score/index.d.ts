declare module "string_score" {
    // nothing here as it's only extending the build in String class
}

interface String {
    score: (word: string, fuzzy?: number) => number;
}
