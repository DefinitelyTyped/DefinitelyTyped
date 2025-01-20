declare function bem(block?: string, element?: string): bem.Bemmed;
declare function bem(block: string, element: bem.Modifier | undefined): string;
declare function bem(block: string, element: bem.Element, modifier: bem.Modifier): string;

declare namespace bem {
    function join(...arguments: Joiner): Joined;

    type Block = string;

    type Element = string | { [index: string]: any } | Array<string | undefined | boolean>;

    type Modifier = { [index: string]: any } | Array<string | undefined | boolean>;

    type Bemmed = (arg1?: Element | Modifier, arg2?: Modifier) => string | undefined;

    type Joiner = Array<string | undefined | boolean>;

    type Joined = string;
}

export as namespace bem;

export = bem;
