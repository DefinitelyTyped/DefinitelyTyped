import { ComponentType } from 'react';

type HOC<OwnProps, AdditionalProps> = <Props extends OwnProps>(
    Component: ComponentType<Props>
) => ComponentType<Props & AdditionalProps>;
