// Type definitions for bricks.js 1.8
// Project: https://github.com/callmecavs/bricks.js
// Definitions by: Pusztai Tibor <https://github.com/kondi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function Bricks(options: Bricks.Options): Bricks.Instance;

declare namespace Bricks {
    interface Instance {
        pack(): Instance;
        update(): Instance;
        resize(flag?: boolean): Instance;

        on(event: 'pack' | 'update', listener: () => any): Instance;
        on(event: 'resize', listener: (sizeDetail: SizeDetail) => any): Instance;

        once(event: 'pack' | 'update', listener: () => any): Instance;
        once(event: 'resize', listener: (sizeDetail: SizeDetail) => any): Instance;

        off(event: 'pack' | 'update', listener?: () => any): Instance;
        off(event: 'resize', listener?: (sizeDetail: SizeDetail) => any): Instance;
    }

    interface Options {
        container: Node | string;
        packed: string;
        sizes: SizeDetail[];
        position?: boolean;
    }

    interface SizeDetail {
        mq?: string;
        columns: number;
        gutter: number;
    }
}

export = Bricks;
