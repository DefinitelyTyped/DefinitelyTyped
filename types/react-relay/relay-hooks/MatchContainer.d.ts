import { ComponentType, ElementType, ReactNode } from 'react';

/**
 * Renders the results of a data-driven dependency fetched with the `@match`
 * directive. The `@match` directive can be used to specify a mapping of
 * result types to the containers used to render those types. The result
 * value is an opaque object that described which component was selected
 * and a reference to its data. Use <MatchContainer/> to render these
 * values.
 *
 * ## Example
 *
 * For example, consider a piece of media content that might be text or
 * an image, where for clients that don't support images the application
 * should fall back to rendering the image caption as text. @match can be
 * used to dynamically select whether to render a given media item as
 * an image or text (on the server) and then fetch the corresponding
 * React component and its data dependencies (information about the
 * image or about the text).
 *
 * ```
 * // Media.react.js
 *
 * // Define a React component that uses <MatchContainer /> to render the
 * // results of a @module selection
 * function Media(props) {
 *   const {media, ...restProps} = props;
 *
 *   const loader = moduleReference => {
 *      // given the data returned by your server for the @module directive,
 *      // return the React component (or throw a Suspense promise if
 *      // it is loading asynchronously).
 *      todo_returnModuleOrThrowPromise(moduleReference);
 *   };
 *   return <MatchContainer
 *     loader={loader}
 *     match={media.mediaAttachment}
 *     props={restProps}
 *   />;
 * }
 *
 * module.exports = createSuspenseFragmentContainer(
 *   Media,
 *   {
 *     media: graphql`
 *       fragment Media_media on Media {
 *         # ...
 *         mediaAttachment @match {
 *            ...ImageContainer_image @module(name: "ImageContainer.react")
 *            ...TextContainer_text @module(name: "TextContainer.react")
 *         }
 *       }
 *     `
 *   },
 * );
 * ```
 *
 * ## API
 *
 * MatchContainer accepts the following props:
 * - `match`: The results (an opaque object) of a `@match` field.
 * - `props`: Props that should be passed through to the dynamically
 *   selected component. Note that any of the components listed in
 *   `@module()` could be selected, so all components should accept
 *   the value passed here.
 * - `loader`: A function to load a module given a reference (whatever
 *   your server returns for the `js(moduleName: String)` field).
 *
 */

type TypenameOnlyPointer = Readonly<{ __typename: string }>;
export type MatchPointer = Readonly<{
    __fragmentPropName?: string | null | undefined;
    __module_component?: unknown | undefined;
    ' $fragmentSpreads': unknown;
}>;

export type MatchContainerProps<TProps = {}, TFallback = ReactNode> = Readonly<{
    fallback?: TFallback | null | undefined;
    loader: (module: unknown) => ComponentType<TProps>;
    match?: MatchPointer | TypenameOnlyPointer | null | undefined;
    props?: TProps | undefined;
}>;

export function MatchContainer<TProps = {}, TFallback = ReactNode>(
    props: MatchContainerProps<TProps, TFallback>,
): ElementType<TProps> | TFallback | null;

export {};
