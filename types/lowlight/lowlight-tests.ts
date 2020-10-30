import { highlight, highlightAuto, registerLanguage } from 'lowlight';
import * as core from 'lowlight/lib/core';

function highlighter(hljs: any): any {
    return {
        aliases: ['cmake.in'],
        case_insensitive: true,
        keywords: {
            keyword:
                'forall all exists exist only m M i e 1 2 3 4 5 6 7 8 9 0 - + * / \ % ! . , ; : | lim limsup liminf infinity not'
        },
        contains: [
        {
            className: 'variable',
            begin: '(', end: ')'
        },
        ]
    };
}

registerLanguage('math', highlighter);

console.log(highlight('typescript',
`class CPP {
    private year: number;
    public constructor(private version: string) {
        this.year = Number(version.match(/.+\d+$/));
    }

    public version(): string {
        return this.version;
    }
}
`
));

console.info(highlightAuto(
`class CPP {
    private year: number;
    public constructor(private version: string) {
        this.year = Number(version.match(/.+\d+$/));
    }

    public version(): string {
        return this.version;
    }
}
`
));

core.registerLanguage('math', highlighter);

console.log(core.highlight('javascript',
`class CPP {
    constructor(version) {
        this.version = version;
        this.year = Number(version.match(/.+\d+$/));
    }

    version(){
        return this.version;
    }
}
`
, { prefix: 'core-' }));


console.info(core.highlightAuto(
`class CPP {
    constructor(version) {
        this.version = version;
        this.year = Number(version.match(/.+\d+$/));
    }

    version(){
        return this.version;
    }
}
`
, { prefix: 'core-', subset: ['purescript', 'javascript', 'typescript', 'coffeescript'] }));
