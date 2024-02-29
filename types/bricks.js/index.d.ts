declare function Bricks(options: Bricks.Options): Bricks.Instance;

declare namespace Bricks {
    interface Instance {
        pack(): Instance;
        update(): Instance;
        resize(flag?: boolean): Instance;

        on(event: "pack" | "update", listener: () => any): Instance;
        on(event: "resize", listener: (sizeDetail: SizeDetail) => any): Instance;

        once(event: "pack" | "update", listener: () => any): Instance;
        once(event: "resize", listener: (sizeDetail: SizeDetail) => any): Instance;

        off(event: "pack" | "update", listener?: () => any): Instance;
        off(event: "resize", listener?: (sizeDetail: SizeDetail) => any): Instance;
    }

    interface Options {
        container: Node | string;
        packed: string;
        sizes: SizeDetail[];
        position?: boolean | undefined;
    }

    interface SizeDetail {
        mq?: string | undefined;
        columns: number;
        gutter: number;
    }
}

export = Bricks;
