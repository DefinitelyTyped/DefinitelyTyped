import { ComponentType } from 'react';

export type HOC<OwnProps, AdditionalProps> = <Props extends OwnProps>(
    Component: ComponentType<Props>
) => ComponentType<Props & AdditionalProps>;

export type HOCWithOptions<OwnProps, AdditionalProps, Options> = <
    Props extends OwnProps
>(
    Component: ComponentType<Props>,
    options?: Options
) => ComponentType<Props & AdditionalProps>;
