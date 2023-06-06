// Internal helper types

// @ts-ignore
type ElementType = any extends JSX.ElementType ? never : JSX.ElementType;

type FunctionElementType = Extract<ElementType, (props: Record<string, any>) => any>;

type ClassElementType = Extract<ElementType, new (props: Record<string, any>) => any>;

type StringComponent = Extract<keyof JSX.IntrinsicElements, ElementType extends never ? string : ElementType>;

type FunctionComponent<Props> = ElementType extends never
    ? (props: Props) => JSX.Element | null
    : FunctionElementType extends never
    ? never
    : (props: Props) => ReturnType<FunctionElementType>;

type ClassComponent<Props> = ElementType extends never
    ? new (props: Props) => JSX.ElementClass
    : ClassElementType extends never
    ? never
    : new (props: Props) => InstanceType<ClassElementType>;

type Component<Props> = FunctionComponent<Props> | ClassComponent<Props> | StringComponent;

interface NestedMDXComponents {
    [key: string]: NestedMDXComponents | Component<any>;
}

// Public MDX helper types

/**
 * MDX components may be passed as the `components`.
 *
 * The key is the name of the element to override. The value is the component to render instead.
 */
export type MDXComponents = NestedMDXComponents & {
    [Key in StringComponent]?: Component<JSX.IntrinsicElements[Key]>;
} & {
    /**
     * If a wrapper component is defined, the MDX content will be wrapped inside of it.
     */
    wrapper?: Component<any>;
};

/**
 * The props that may be passed to an MDX component.
 */
export interface MDXProps {
    /**
     * Which props exactly may be passed into the component depends on the contents of the MDX
     * file.
     */
    [key: string]: unknown;

    /**
     * This prop may be used to customize how certain components are rendered.
     */
    components?: MDXComponents;
}

/**
 * The type of the default export of an MDX module.
 */
export type MDXContent = (props: MDXProps) => JSX.Element;

/**
 * A generic MDX module type.
 */
export interface MDXModule {
    /**
     * This could be any value that is exported from the MDX file.
     */
    [key: string]: unknown;

    /**
     * A functional JSX component which renders the content of the MDX file.
     */
    default: MDXContent;
}

export {};
