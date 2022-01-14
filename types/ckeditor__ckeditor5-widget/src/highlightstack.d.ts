import { DowncastWriter } from '@ckeditor/ckeditor5-engine';
import { HighlightDescriptor } from '@ckeditor/ckeditor5-engine/src/conversion/downcasthelpers';
import { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';

export default class HighlightStack implements Emitter {
    add(descriptor: HighlightDescriptor, writer: DowncastWriter): void;
    remove(id: string, writer: DowncastWriter): void;
}
