interface CSSModule {
    /**
     * Returns the specific selector from imported stylesheet as string.
     */
    [key: string]: string;
}

declare module "*.css" {
    /**
     * A CSS module.
     */
    const styles: CSSModule;
    export default styles;
}

declare module "*.scss" {
    /**
     * An SCSS based CSS module.
     *
     * https://sass-lang.com
     */
    const styles: CSSModule;
    export default styles;
}

declare module "*.sass" {
    /**
     * A Sass based CSS module.
     *
     * https://sass-lang.com
     */
    const styles: CSSModule;
    export default styles;
}

declare module "*.less" {
    /**
     * A Less based CSS module.
     *
     * http://lesscss.org
     */
    const styles: CSSModule;
    export default styles;
}

declare module "*.styl" {
    /**
     * A Stylus based CSS module.
     *
     * https://stylus-lang.com
     */
    const styles: CSSModule;
    export default styles;
}
