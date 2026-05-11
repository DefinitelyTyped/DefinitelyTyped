export type Status = Partial<Record<TemplateType, Primitive>>;

export type Template = Array<string | TemplateObject>;

export interface TemplateObject {
    /**
     * Can be any of the following plus any keys you pass into gauge.show plus any
     * keys you have on a custom theme.
     */
    type: TemplateType;

    /**
     * Number of spaces that must be between this item and other items, if this
     * item is displayed at all.
     */
    kerning?: number;

    /**
     * The maximum length for this element. If its value is longer it will be
     * truncated.
     */
    maxLength?: number;

    /**
     * The minimum length for this element. If its value is shorter it will be
     * padded according to the align value.
     */
    minLength?: number;

    /**
     * Works as you'd expect from word processors.
     * @default 'left'
     */
    align?: "left" | "right" | "center";

    /**
     * Provides a single value for both minLength and maxLength. If both length
     * and minLength or maxLength are specified then the latter take precedence.
     */
    length?: number;

    /**
     * A literal value to use for this template item.
     */
    value?: Primitive;

    /**
     * A default value to use for this template item if a value wasn't otherwise
     * passed in.
     */
    default?: Primitive;
}

export type TemplateType = LiteralUnion<
    "section" | "subsection" | "progressbar" | "activityIndicator" | "completed",
    string
>;

export type Primitive = string | number | boolean | null | undefined;
export type LiteralUnion<T, BaseType extends Primitive> =
    | T
    | (BaseType & Record<never, never>);
