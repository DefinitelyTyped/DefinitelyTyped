export as namespace relationship;
export = relationship;

interface Relationship {
    (name: string | relationship.Options): string[];
    readonly dataCount: number;
    readonly data: any;
    setMode(sign: string, data: Record<string, string[]>): void;
}

declare const relationship: Relationship;

declare namespace relationship {
    interface Options {
        /**
         * 目标对象：目标对象的称谓汉字表达，称谓间用‘的’字分隔
         */
        text?: string;
        /**
         * 相对对象：相对对象的称谓汉字表达，称谓间用‘的’字分隔，空表示自己
         */
        target?: string;
        /**
         * 本人性别：0表示女性,1表示男性
         */
        sex?: 0 | 1;
        /**
         * 转换类型：'default'计算称谓,'chain'计算关系链,'pair'计算关系合称
         * @default 'default'
         */
        type?: "default" | "chain" | "pair";
        /**
         * 称呼方式：true对方称呼我,false我称呼对方
         * @default false
         */
        reverse?: boolean;
        /**
         * 模式选择：使用setMode方法定制不同地区模式，在此选择自定义模式
         * @default 'default'
         */
        mode?: "default" | (string & {});
        /**
         * 最短关系：计算两者之间的最短关系
         * @default false
         */
        optimal?: boolean;
    }
}
