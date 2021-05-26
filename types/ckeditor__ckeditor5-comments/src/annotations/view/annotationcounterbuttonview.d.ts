import { ButtonView, View } from '@ckeditor/ckeditor5-ui';

export default class AnnotationCounterButtonView extends ButtonView {
    annotationType: string;
    counterView: View;
    isDirty: boolean;
    number: number;
}
