import { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class ExportPdfCommand extends Command implements Emitter, Observable {
    isBusy: boolean;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ExportPdfCommand: ExportPdfCommand;
    }
}
