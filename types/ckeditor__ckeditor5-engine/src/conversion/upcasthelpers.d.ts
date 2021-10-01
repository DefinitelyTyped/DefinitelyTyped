import Element from "../view/element";
import ModelElement from "../model/element";
import { MatcherPattern } from "../view/matcher";
import ConversionHelpers from "./conversionhelpers";
import { UpcastConversionApi, UpcastDispatcherCallback } from "./upcastdispatcher";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";

export default class UpcastHelpers extends ConversionHelpers<UpcastHelpers> {
    attributeToAttribute(config?: {
        view:
            | string
            | {
                  key: string;
                  name?: string | undefined;
                  value?:
                      | RegExp
                      | string
                      | ((value: any) => boolean)
                      | { styles: Record<string, string | RegExp> }
                      | undefined;
              }
            | { name: string; styles: Record<string, string | RegExp> };

        model:
            | string
            | { key: string; value: string | ((el: Element, api: UpcastConversionApi) => string) }
            | {
                  key: "srcset";
                  value:
                      | {
                            data: string | undefined;
                            width?: string;
                        }
                      | ((
                            el: Element,
                            api: UpcastConversionApi,
                        ) => {
                            data: string | undefined;
                            width?: string;
                        });
              };

        converterPriority?: PriorityString | number | undefined;
    }): this;
    dataToMarker(config?: {
        view: string;
        model?: ((name: string, api: UpcastConversionApi) => string) | undefined;
        converterPriority?: PriorityString | number | undefined;
    }): this;
    elementToAttribute(config?: {
        view: MatcherPattern;
        model:
            | string
            | { key: string; value: string | ((viewElement: Element, api: UpcastConversionApi) => string | null) };
        converterPriority?: PriorityString | number | undefined;
    }): this;
    elementToElement(config?: {
        view?: MatcherPattern | undefined;
        model: string | ModelElement | ((el: Element, api: UpcastConversionApi) => ModelElement | null);
        converterPriority?: PriorityString | number | undefined;
    }): this;
}

export function convertToModelFragment(): UpcastDispatcherCallback<
    "element" | `element:${string}` | "documentFragment"
>;

export function convertText(): UpcastDispatcherCallback<"text">;
