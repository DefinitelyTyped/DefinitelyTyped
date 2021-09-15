import Element from "../view/element";
import ModelElement from "../model/element";
import { MatcherPattern } from "../view/matcher";
import ConversionHelpers from "./conversionhelpers";
import { UpcastConversionApi } from "./upcastdispatcher";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";

export default class UpcastHelpers extends ConversionHelpers<UpcastHelpers> {
    attributeToAttribute(config?: {
        view:
            | string
            | {
                  key: string;
                  name?: string | undefined;
                  value?: RegExp | string | ((value: any) => boolean) | { styles: Record<string, string | RegExp> } | undefined;
              };

        model: string | { key: string; value: string | ((el: Element, api: UpcastConversionApi) => string) };

        converterPriority?: PriorityString | number | undefined;
    }): UpcastHelpers;
    dataToMarker(config?: {
        view: string;
        model?: ((name: string, api: UpcastConversionApi) => string) | undefined;
        converterPriority?: PriorityString | number | undefined;
    }): UpcastHelpers;
    elementToAttribute(config?: {
        view: MatcherPattern;
        model:
            | string
            | { key: string; value: string | ((viewElement: Element, api: UpcastConversionApi) => string | null) };
        converterPriority?: PriorityString | number | undefined;
    }): UpcastHelpers;
    elementToElement(config?: {
        view?: MatcherPattern | undefined;
        model: string | ModelElement | ((el: Element, api: UpcastConversionApi) => ModelElement);
        converterPriority?: PriorityString | number | undefined;
    }): UpcastHelpers;
}
