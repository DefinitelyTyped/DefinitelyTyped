// Type definitions for gbk.js 0.3
// Project: https://github.com/cnwhy/GBK.js
// Definitions by: mkchung <https://github.com/mkchung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace gbkjs {
    function encode(str: string): number[];
    function decode(bytes: number[]): string;
    namespace URI {
      function encodeURI(str: string): string;
      function decodeURI(str: string): string;
      function encodeURIComponent(str: string): string;
      function decodeURIComponent(str: string): string;
    }
}

export = gbkjs;
