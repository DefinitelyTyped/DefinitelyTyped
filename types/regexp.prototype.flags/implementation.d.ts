type D = "d" | "";
type G = "g" | "";
type I = "i" | "";
type M = "m" | "";
type S = "s" | "";
type U = "u" | "";
type V = "v" | "";
type Y = "y" | "";

declare namespace flags {
    type Flags = `${D}${G}${I}${M}${S}${U}${V}${Y}`;
}

declare function flags(
    this: RegExp | {
        __proto__?: unknown;
        hasIndices?: boolean;
        global?: boolean;
        ignoreCase?: boolean;
        multiline?: boolean;
        dotAll?: boolean;
        unicode?: boolean;
        unicodeSets?: boolean;
        sticky?: boolean;
    },
): flags.Flags;

export = flags;
