import { ColorDefinition } from '@ckeditor/ckeditor5-ui/src/colorgrid/colorgridview';
import { Collection } from '@ckeditor/ckeditor5-utils';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

// tslint:disable-next-line:no-empty-interface
export default interface DocumentColorCollection extends Observable {}

export default class DocumentColorCollection extends Collection<ColorDefinition> implements Observable {
}
