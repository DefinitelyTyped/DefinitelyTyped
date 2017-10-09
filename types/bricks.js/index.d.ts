// Type definitions for bricks.js 1.8
// Project: https://github.com/callmecavs/bricks.js
// Definitions by: Pusztai Tibor <https://github.com/kondi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function BricksFactory(options: BricksOptions): BricksInstance;

export interface BricksInstance {
    pack(): BricksInstance;
    update(): BricksInstance;
    resize(flag?: boolean): BricksInstance;

    on(event: 'pack' | 'update', listener: () => any): BricksInstance;
    on(event: 'resize', listener: (sizeDetail: SizeDetail) => any): BricksInstance;

    once(event: 'pack' | 'update', listener: () => any): BricksInstance;
    once(event: 'resize', listener: (sizeDetail: SizeDetail) => any): BricksInstance;

    off(event: 'pack' | 'update', listener?: () => any): BricksInstance;
    off(event: 'resize', listener?: (sizeDetail: SizeDetail) => any): BricksInstance;
}

export interface BricksOptions {
    container: Node | string;
    packed: string;
    sizes: SizeDetail[];
    position?: boolean;
}

export interface SizeDetail {
    mq?: string;
    columns: number;
    gutter: number;
}

export default BricksFactory;
