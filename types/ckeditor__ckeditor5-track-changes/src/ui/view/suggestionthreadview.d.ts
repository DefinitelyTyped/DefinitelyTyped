import { ButtonView, View } from '@ckeditor/ckeditor5-ui';
import BaseSuggestionThreadView from './basesuggestionthreadview';
import { TemplateDefinition } from '@ckeditor/ckeditor5-ui/src/template';

export default class SuggestionThreadView extends BaseSuggestionThreadView {
    acceptButton: ButtonView;
    description: string;
    discardButton: ButtonView;
    type: 'format' | 'replace' | 'deletion' | 'insertion';
    userView: View;
    getTemplate(): TemplateDefinition;
}
