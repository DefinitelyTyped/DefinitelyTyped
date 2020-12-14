// Type definitions for uncontrollable 7.0
// Project: https://github.com/jquense/uncontrollable
// Definitions by: Alex Leon <https://github.com/alex-e-leon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import * as React from 'react';

export namespace Uncontrollable {
    // Omit keys and values in TField, then converts a "prop" to "defaultProp"
    type BuildDefaultType<T extends string> = `default${Capitalize<T>}`;

    // Gets a union of the values in an object
    type ValueOf<T> = T[keyof T];

    // Here is where we build out the actual type pairs for controlled uncontrolled props
    // For each controlled prop we create a {value, onChange} required pair and a {defaultValue, onChange} optional pair
    type BuildSingleControlledProp<
        TProps,
        TControlled extends keyof TProps & string,
        TControlledFunction extends keyof TProps
    > =
        | (Record<TControlled, TProps[TControlled]> & Record<TControlledFunction, TProps[TControlledFunction]>)
        | (Partial<Record<BuildDefaultType<TControlled>, TProps[TControlled]>> &
              Partial<Record<TControlledFunction, TProps[TControlledFunction]>>);

    type BuildPropMap<TProps, TFields extends { [key: string]: keyof TProps }> = {
        [P in keyof TFields]: BuildSingleControlledProp<
            TProps,
            P extends keyof TProps & string ? P : never,
            TFields[P]
        >;
    };

    // This builds a map of the controlled/uncontrolled type pairs and then unions them all together.
    // Note that an intersection is actually the correct output here, but this seems impossible with typescript at this time
    type BuildControlledProps<TProps, TFields extends { [key: string]: keyof TProps }> = BuildPropMap<
        TProps,
        TFields
    >[keyof TFields];

    // Gets all the props for the component that aren't being controlled/uncontrolled
    type BaseProps<TProps, TFields extends { [key: string]: keyof TProps }> = Omit<
        TProps,
        keyof TFields | ValueOf<TFields>
    >;
}

export function uncontrollable<TProps extends {}, TFields extends { [key: string]: keyof TProps }>(
    Component: React.ComponentType<TProps>,
    props: TFields,
): React.ComponentType<
    Uncontrollable.BaseProps<TProps, TFields> & Uncontrollable.BuildControlledProps<TProps, TFields>
>;
