import * as React from 'react';

export function withTracker<TDataProps, TOwnProps>(
    options: (props: TOwnProps) => TDataProps | { getMeteorData: (props: TOwnProps) => TDataProps; pure?: boolean },
): (reactComponent: React.ComponentType<TOwnProps & TDataProps>) => React.ComponentClass<TOwnProps>;

/**
 * Hooks (React 16.8 or later) version of tracker.
 * Requires react-meteor-data 2.0.0 or later
 */
export function useTracker<TDataProps>(getMeteorData: () => TDataProps, deps?: React.DependencyList): TDataProps;
