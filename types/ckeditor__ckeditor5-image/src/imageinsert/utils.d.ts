import { Editor } from '@ckeditor/ckeditor5-core';
import { LabeledFieldView, View } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

export function prepareIntegrations(editor: Editor): Record<string, View>;
export function createLabeledInputView(locale: Locale): LabeledFieldView;
