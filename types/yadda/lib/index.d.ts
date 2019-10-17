import Dictionary = require("./Dictionary");
import Yadda = require("./Yadda");

export import Yadda = require("./Yadda");
export import EventBus = require("./EventBus");
export import Interpreter = require("./Interpreter");
export import Context = require("./Context");
export import Library = require("./Library");
export import Dictionary = require("./Dictionary");
export import FeatureFileSearch = require("./FeatureFileSearch");
export import FileSearch = require("./FileSearch");
export import Platform = require("./Platform");
export import localisation = require("./localisation");
export import converters = require("./converters");
export import parsers = require("./parsers");
export import plugins = require("./plugins");

export function createInstance(libraries?: localisation.Language.Library | localisation.Language.Library[], context?: Context.Properties): Yadda;

export type Converter = ((arg1: string, next: (err: Error | null, value: any) => void) => void)
    | ((arg1: string, arg2: string, next: (err: Error | null, value: any) => void) => void)
    | ((arg1: string, arg2: string, arg3: string, next: (err: Error | null, value: any) => void) => void)
    | ((arg1: string, arg2: string, arg3: string, arg4: string, next: (err: Error | null, value: any) => void) => void)
    | ((arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err: Error | null, value: any) => void) => void)
    | ((arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err: Error | null, value: any) => void) => void);

export interface Annotations {
    [key: string]: string;
}

export interface StepFn {
    step: string;
    ctx: Context.Properties;
}

export type Step = string;

export interface Scenario {
    title: string;
    annotations: Annotations;
    description: string[];
    steps: Step[];
}

export interface Feature {
    title: string;
    annotations: Annotations;
    description: string[];
    scenarios: Scenario[];
}
