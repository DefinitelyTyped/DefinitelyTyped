import * as React from 'react';

export function withTracker<TDataProps, TOwnProps>(
    options: (props: TOwnProps) => TDataProps | {getMeteorData: (props: TOwnProps) => TDataProps, pure?: boolean}
): (reactComponent: React.ComponentType<TOwnProps & TDataProps>) => React.ComponentClass<TOwnProps>;
