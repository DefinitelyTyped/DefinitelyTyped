import * as React from "react";

interface KofiArgs {
    username: string;
    label: string;
    title?: string | undefined;
    preset?: "default" | "thin" | "skinny" | "circle" | "no_background" | undefined;
    backgroundColor?: string | undefined;
    animation?: boolean | undefined;
}

declare function KofiButton(input: KofiArgs): React.ReactElement<KofiArgs>;

export { KofiButton };
