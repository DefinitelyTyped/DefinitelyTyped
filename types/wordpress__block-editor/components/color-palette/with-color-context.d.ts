// tslint:disable:no-unnecessary-generics
import { ComponentType } from '@wordpress/element';

import { EditorColor } from '../../';

declare namespace withColorContext {
    interface Props {
        colors: EditorColor[];
        disableCustomColors: boolean;
        hasColorsToChoose: boolean;
    }
}

// prettier-ignore
declare function withColorContext<
    ProvidedProps extends Partial<withColorContext.Props>,
    OwnProps extends any,
    T extends ComponentType<ProvidedProps & OwnProps>
>(component: T):
    T extends ComponentType<infer U> ? ComponentType<
        Omit<U, 'colors' | 'disableCustomColors' | 'hasColorsToChoose'> &
        Omit<ProvidedProps, 'hasColorsToChoose'>> :
    never;

export default withColorContext;
