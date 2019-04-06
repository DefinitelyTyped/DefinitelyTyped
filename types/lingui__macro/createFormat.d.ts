import { RenderProps } from './Render';

export interface FormatPropsWithoutI18n<V, FormatOptions> extends RenderProps {
    value: V;
    format?: FormatOptions;
}
