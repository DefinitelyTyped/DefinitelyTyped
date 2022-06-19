import templateOnly, { TemplateOnlyComponent, TOC } from '@ember/component/template-only';

const to = templateOnly(); // $ExpectType TemplateOnlyComponent<unknown>

to.toString(); // $ExpectType string

new TemplateOnlyComponent(); // $ExpectError

interface MySig {
    Element: HTMLAnchorElement;
    Args: {
        name: string;
        age: number;
    };
    Blocks: {
        default: [(newName: string) => void];
    };
}

// $ExpectType TemplateOnlyComponent<MySig>
const toc: TOC<MySig> = templateOnly();

// $ExpectType TemplateOnlyComponent<MySig>
const tocInferred = templateOnly<MySig>();

// $ExpectType TemplateOnlyComponent<MySig>
const longToc: TemplateOnlyComponent<MySig> = templateOnly();
