// Type definitions for @styled-system/props 5.1
// Project: https://github.com/styled-system/styled-system
// Definitions by: Kadoshms <https://github.com/kadoshms>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

interface PropsMap {
    [key: string]: any;
}

export function omit(props: PropsMap): PropsMap;

export function pick(props: PropsMap): PropsMap;
