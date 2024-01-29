export {};

interface PropsMap {
    [key: string]: any;
}

export function omit(props: PropsMap): PropsMap;

export function pick(props: PropsMap): PropsMap;
