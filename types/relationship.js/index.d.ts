// Project: relationship.js
// Definitions by: whincwu https://github.com/whinc
/*~ This is the module template file for function modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */
// Note that ES6 modules cannot directly export class objects.
// This file should be imported using the CommonJS-style:
//   import x = require('[~THE MODULE~]');
//
// Alternatively, if --allowSyntheticDefaultImports or
// --esModuleInterop is turned on, this file can also be
// imported as a default import:
//   import x from '[~THE MODULE~]';
//
// Refer to the TypeScript documentation at
// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
// to understand common workarounds for this limitation of ES6 modules.
/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace relationship;
/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = relationship;

/*~ This example shows how to have multiple overloads for your function */
interface Relationship {
    (name: string | relationship.Options): string[];
    readonly dataCount: number;
    readonly data: any;
    setMode(sign: string, data: Record<string, string[]>): void;
}
// declare function relationship(name: string | relationship.Options): string[];
declare const relationship: Relationship;
/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 *~
 *~ Note that if you decide to include this namespace, the module can be
 *~ incorrectly imported as a namespace object, unless
 *~ --esModuleInterop is turned on:
 *~   import * as x from '[~THE MODULE~]'; // WRONG! DO NOT DO THIS!
 */
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
