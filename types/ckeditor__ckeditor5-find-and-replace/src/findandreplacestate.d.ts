import { Model } from '@ckeditor/ckeditor5-engine';
import { Marker } from '@ckeditor/ckeditor5-engine/src/model/markercollection';
import { Collection } from '@ckeditor/ckeditor5-utils';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

// tslint:disable-next-line:no-empty-interface
export default interface FindAndReplaceState extends Observable {}

export interface Result {
    id: string;
    label: string;
    marker: Marker;
}
/**
 * The object storing find & replace plugin state in a given editor instance.
 *
 */
export default class FindAndReplaceState implements Observable {
    constructor(model: Model);
    get results(): Collection<Result>;
    protected set results(value: Collection<Result>);
    get highlightedResult(): null | Result;
    protected set highlightedResult(value: null | Result);
    get searchText(): string;
    protected set searchText(value: string);
    get replaceText(): string;
    protected set replaceText(value: string);
    get matchCase(): boolean;
    protected set matchCase(value: boolean);
    get matchWholeWords(): boolean;
    protected set matchWholeWords(value: boolean);
    clear(model: Model): void;
}
