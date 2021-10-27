import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import { ElementDefinition } from "../view/elementdefinition";
import { MatcherPattern } from "../view/matcher";
import DowncastDispatcher from "./downcastdispatcher";
import DowncastHelpers from "./downcasthelpers";
import UpcastDispatcher from "./upcastdispatcher";
import UpcastHelpers from "./upcasthelpers";

export interface ConverterDefinition {
    converterPriority?: PriorityString;
    model: any;
    upcastAlso?: MatcherPattern | MatcherPattern[];
    view: ElementDefinition | Record<string, any>;
}

export default class Conversion {
    constructor(
        downcastDispatchers: DowncastDispatcher | DowncastDispatcher[],
        upcastDispatchers: UpcastDispatcher | UpcastDispatcher[],
    );
    addAlias(alias: string, dispatcher: DowncastDispatcher | UpcastDispatcher): void;
    attributeToAttribute(definition?: {
        model: string | { name?: string | undefined; key: string; values: string[] };
        view: string | Record<string, { name?: string | undefined; key: string; value: string[] | Record<string, string> }>;
        upcastAlso?: MatcherPattern | MatcherPattern[] | undefined;
    }): void;
    attributeToElement(definition: ConverterDefinition): void;
    elementToElement(definition: ConverterDefinition): void;
    for(groupName: 'dataDowncast' | 'editingDowncast' | 'downcast'): DowncastHelpers;
    for(groupName: 'upcast'): UpcastHelpers;
    for(groupName: 'upcast' | 'downcast' | 'dataDowncast' | 'editingDowncast'): UpcastHelpers | DowncastHelpers;
}
