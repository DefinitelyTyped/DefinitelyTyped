import * as React from "react";

export type IdentifierModifiers = "circle" | "transparent";

export type IdentifierSizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type IdentifierProps = {
    /* Image URL. */
    backgroundImageUrl?: string;
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Applies a background color. */
    color?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    glyph?: string;
    /* Localized text for label. */
    label?: string;
    modifier?: IdentifierModifiers;
    /* Applies an aria-role. Set to button if Identifier opens a Popover or Modal. */
    role?: string;
    /* Size of the image. These sizes are available:
      **xxs** (extra extra small) - 20px,
      **xs** (extra small) - 28px,
      **s** (small) - 32px,
      **m** (medium) - 48px,
      **l** (large) - 64px,
      **xl** (extra lagre) - 88px,
      and **xxl** (extra extra large).
    Default matches the base font size (14px). */
    size: IdentifierSizes;
} & { [x: string]: any };

declare const Identifier: React.FunctionComponent<IdentifierProps>;

export default Identifier;
