import { DomEventData, DowncastWriter } from '@ckeditor/ckeditor5-engine';
import { HighlightDescriptor } from '@ckeditor/ckeditor5-engine/src/conversion/downcasthelpers';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

export default class HighlightStack implements Emitter {
    add(descriptor: HighlightDescriptor, writer: DowncastWriter): void;
    remove(id: string, writer: DowncastWriter): void;
}
