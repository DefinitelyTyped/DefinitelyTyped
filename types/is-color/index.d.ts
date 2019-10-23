// Type definitions for is-color 1.0
// Project: https://github.com/morishitter/is-color
// Definitions by: Vitor Luiz Cavalcanti <https://github.com/VitorLuizC>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isColor(str: string): boolean;

declare namespace isColor {
    function isRgb(str: string): boolean;
    function isRgba(str: string): boolean;
    function isHsl(str: string): boolean;
    function isHsla(str: string): boolean;
    function isHex(str: string): boolean;
    function isKeyword(str: string): boolean;
    function isInherit(str: string): str is 'inherit';
    function isCurrentColor(str: string): str is ('currentColor' | 'currentcolor');
    function isTransparent(str: string): str is 'transparent';
}

export = isColor;
