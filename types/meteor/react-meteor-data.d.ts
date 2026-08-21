import * as React from 'react';
import { Mongo } from 'meteor/mongo';

export function withTracker<TDataProps, TOwnProps>(
    options: (
        props: TOwnProps,
    ) => TDataProps | { getMeteorData: (props: TOwnProps) => TDataProps; pure?: boolean | undefined },
): (reactComponent: React.ComponentType<TOwnProps & TDataProps>) => React.ComponentClass<TOwnProps>;

/**
 * Hooks (React 16.8 or later) version of tracker.
 * Requires react-meteor-data 2.0.0 or later
 */
export function useTracker<TDataProps>(getMeteorData: () => TDataProps, deps?: React.DependencyList): TDataProps;

/**
 * Requires react-meteor-data 2.4.0 or later
 */
export function useSubscribe(name?: string, ...args: any[]): () => boolean;
// If the factory is non-nullable, it will always return a list
export function useFind<T>(
    factory: () => Mongo.Cursor<T>,
    deps?: React.DependencyList,
): T[];
export function useFind<T>(
    factory: () => (Mongo.Cursor<T> | undefined | null),
    deps?: React.DependencyList,
): T[] | null;
