import { Model } from "@ckeditor/ckeditor5-engine";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { TextTransformationDescription } from "./texttransformation";

export default class TextWatcher implements Observable {
    readonly hasMatch: boolean;
    isEnabled: boolean;
    readonly model: Model;
    testCallback: (str: string) => boolean | { normalizedTransformation: TextTransformationDescription };

    constructor(
        model: Model,
        testCallback: (str: string) => boolean | { normalizedTransformation: TextTransformationDescription },
    );

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}
