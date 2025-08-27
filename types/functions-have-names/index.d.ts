interface FunctionsHaveNames {
    (): boolean;
    functionsHaveConfigurableNames: () => boolean;
    boundFunctionsHaveNames: () => boolean;
}

declare const functionsHaveNames: FunctionsHaveNames;

export = functionsHaveNames;
