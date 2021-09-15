///<reference path="./index.d.ts"/>

/**
 * An markdown file which exports a JSX component.
 */
declare module '*.md' {
    export * from '*.mdx';
    export { default } from '*.mdx';
}
