// Type definitions for vivagraphjs 0.12
// Project: https://github.com/anvaka/VivaGraphJS
// Definitions by: Thomas Milotti (Upra-Data) <https://github.com/upradata>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */

export function lazyExtend<T, O>(target: T, options: O): T & O; // typeof import('ngraph.merge');
export const randomIterator: typeof import('./deps/ngraph.random')[ 'randomIterator' ];
export const random: typeof import('./deps/ngraph.random')[ 'random' ];
export const events: typeof import('ngraph.events');
export namespace Graph {
    const version: string;
    const graph: typeof import('./deps/ngraph.graph');
    function serializer(): {
        loadFromJSON: typeof import('ngraph.fromjson');
        storeToJSON: typeof import('ngraph.tojson');
    };
    const centrality: typeof import('./Algorithms/centrality');
    const operations: typeof import('./Algorithms/operations');
    function geom(): {
        intersect: typeof import('./deps/gintersect');
        intersectRect: typeof import('./Utils/intersectRect');
    };
    const webgl: typeof import('./WebGL/webgl');
    const webglInputEvents: typeof import('./WebGL/webglInputEvents');
    function generator(): typeof import('./deps/ngraph.generators');
    namespace Input {
        const domInputManager: typeof import('./Input/domInputManager');
        const webglInputManager: typeof import('./Input/webglInputManager');
    }
    namespace Utils {
        export const dragndrop: typeof import('./Input/dragndrop');
        export const findElementPosition: typeof import('./Utils/findElementPosition');
        export const timer: (callback: any) => {
            stop: () => void;
            restart: () => void;
        };
        export const getDimension: typeof import('./Utils/getDimensions');
        const events_1: typeof import('./Utils/backwardCompatibleEvents');
        export { events_1 as events };
    }
    namespace Layout {
        const forceDirected: typeof import('./deps/ngraph.forcelayout');
        const constant: typeof import('./Layout/constant');
    }
    namespace View {
        const Texture: typeof import('./WebGL/texture');
        const webglAtlas: typeof import('./WebGL/webglAtlas');
        const webglImageNodeProgram: typeof import('./WebGL/webglImageNodeProgram');
        const webglLinkProgram: typeof import('./WebGL/webglLinkProgram');
        const webglNodeProgram: typeof import('./WebGL/webglNodeProgram');
        const webglLine: typeof import('./WebGL/webglLine');
        const webglSquare: typeof import('./WebGL/webglSquare');
        const webglImage: typeof import('./WebGL/webglImage');
        const webglGraphics: typeof import('./View/webglGraphics');
        namespace _webglUtil {
            const parseColor: typeof import('./WebGL/parseColor');
        }
        const svgGraphics: typeof import('./View/svgGraphics');
        const renderer: typeof import('./View/renderer');
        // @deprecated The method should not be useddeprecated
        function cssGraphics(): never;
        // @deprecated The method should not be useddeprecated
        function svgNodeFactory(): never;
        // @deprecated The method should not be useddeprecated
        function community(): never;
    }
    const Rect: typeof import('./Utils/rect');
    const svg: typeof import('./deps/simplesvg');
    const BrowserInfo: {
        browser: string;
        version: string;
    };
}
