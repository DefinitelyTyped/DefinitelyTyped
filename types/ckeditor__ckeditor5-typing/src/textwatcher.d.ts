import { Model } from '@ckeditor/ckeditor5-engine';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { TextTransformationDescription } from './texttransformation';

// tslint:disable-next-line:no-empty-interface
export default interface TextWatcher extends Observable {}

export default class TextWatcher implements Observable {
    constructor(
        model: Model,
        testCallback: (str: string) => boolean | { normalizedTransformation: TextTransformationDescription },
    );
    readonly model: Model;
    get hasMatch(): boolean;
    protected set hasMatch(value: boolean);
    get isEnabled(): boolean;
    protected set isEnabled(value: boolean);
    testCallback: (str: string) => boolean | { normalizedTransformation: TextTransformationDescription };
}
