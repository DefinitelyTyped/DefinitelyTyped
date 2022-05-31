import { ColorDefinition } from '@ckeditor/ckeditor5-ui/src/colorgrid/colorgridview';
import { Collection } from '@ckeditor/ckeditor5-utils';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

export default interface DocumentColorCollection extends Collection<ColorDefinition>, Observable {}

export default class DocumentColorCollection extends Collection<ColorDefinition> implements Observable {}
