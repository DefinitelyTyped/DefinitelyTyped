declare module 'svg2ttf' {
    function svg2ttf(svgFontString: string): MicroBuffer;
    function svg2ttf(svgFontString: string, options: FontOptions): MicroBuffer;

    interface FontOptions {
        copyright?: string;
        description?: string;
        ts?: number;
        url?: string;
        version: string;
    }

    interface MicroBuffer {
        buffer: Uint8Array;
    }

    export = svg2ttf;
}
