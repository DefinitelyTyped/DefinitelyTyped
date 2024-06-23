import Typo = require("typo-js");

const dict1 = new Typo("en_US");

const hasLoaded1: boolean = dict1.loaded;
const isValid1: boolean = dict1.check("tried");
const suggestions1: string[] = dict1.suggest("tryed");
const suggestionsLimit1: string[] = dict1.suggest("tryed", 10);

const affData = `PFX A Y 1
PFX A 0 re .

SFX B Y 2
SFX B 0 ed [^y]
SFX B y ied y`;

const wordsData = `hello
do/A
try/AB`;

const dict2 = new Typo("en_GB", affData, wordsData);

const hasLoaded2: boolean = dict2.loaded;
const isValid2: boolean = dict2.check("tried");
const suggestions2: string[] = dict2.suggest("tryed");
const suggestionsLimit2: string[] = dict2.suggest("tryed", 10);

const dict3 = new Typo("en_GB", null, null, {
    dictionaryPath: "/dictionaries",
    asyncLoad: true,
});

const hasLoaded3: boolean = dict3.loaded;
const isValid3: boolean = dict3.check("tried");
const suggestions3: string[] = dict3.suggest("tryed");
const suggestionsLimit3: string[] = dict3.suggest("tryed", 10);

const dict4 = new Typo("en_GB", null, null, {
    dictionaryPath: "/dictionaries",
    asyncLoad: true,
    loadedCallback: cbDict => {
        const hasLoaded: boolean = cbDict.loaded;
        const isValid: boolean = cbDict.check("tried");
        const suggestions: string[] = cbDict.suggest("tryed");
        const suggestionsLimit: string[] = cbDict.suggest("tryed", 10);
    },
});

const hasLoaded4: boolean = dict4.loaded;
const isValid4: boolean = dict4.check("tried");
const suggestions4: string[] = dict4.suggest("tryed");
const suggestionsLimit4: string[] = dict4.suggest("tryed", 10);
