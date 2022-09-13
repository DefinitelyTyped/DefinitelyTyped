// tslint:disable:no-unnecessary-generics
import { ComponentType } from 'react';

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
    OwnProps extends any = any,
    T extends ComponentType<ProvidedProps & OwnProps> = ComponentType<ProvidedProps & OwnProps>
>(component: T):
    T extends ComponentType<infer U> ? ComponentType<
        Omit<U, 'colors' | 'disableCustomColors' | 'hasColorsToChoose'> &
        Omit<ProvidedProps, 'hasColorsToChoose'>> :
    never;

export default withColorContext;
