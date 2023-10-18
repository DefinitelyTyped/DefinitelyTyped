/// <reference types="mocha"/>
/// <reference types="node"/>

declare function mocha(setupOptions?: Mocha.MochaOptions): NodeJS.ReadWriteStream;
declare namespace mocha {}
export = mocha;
