declare function getName(args?: getName.NodeRandomNameArgs): string;

declare namespace getName {
    interface NodeRandomNameArgs {
        first?: boolean | undefined;
        last?: boolean | undefined;
        gender?: "male" | "female" | undefined;
        seed?: string | undefined;
        random?: () => number | undefined;
        male?: boolean | undefined;
        female?: boolean | undefined;
    }
}

export = getName;
