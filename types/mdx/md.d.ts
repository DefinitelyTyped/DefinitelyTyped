///<reference path="./index.d.ts"/>

/**
 * An markdown file which exports a JSX component.
 */
declare module '*.md' {
    export { default } from '*.mdx';
    export * from '*.mdx';
}
