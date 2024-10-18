declare function requireRelative(id: string, relativeTo?: string): any;

declare namespace requireRelative {
    function resolve(id: string, relativeTo?: string): string;
}

export = requireRelative;
