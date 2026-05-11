declare function Trim(str: string): string;
declare namespace Trim {
    function left(str: string): string;
    function right(str: string): string;
}

export = Trim;
