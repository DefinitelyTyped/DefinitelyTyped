// Type definitions for mailgen 2.0
// Project: https://github.com/eladnava/mailgen#readme
// Definitions by: Kiet Thanh Vo <https://github.com/vothanhkiet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import Option = Mailgen.Option;
import Content = Mailgen.Content;
/**
 * Created by kiettv on 7/24/16.
 */
declare class Mailgen {
    constructor(opts: Option);

    cacheThemes(): void;

    generate(params: Content): any;

    generatePlaintext(params: Content): any;

    parseParams(params: any): any;
}

declare namespace Mailgen {
    interface Option {
        theme: string;
        product: Product;
    }

    interface Product {
        name: string;
        link: string;
        logo?: string;
    }

    interface Content {
        body: ContentBody;
    }

    interface ContentBody {
        name: string;
        intro: string;
        action?: Action;
        outro: string;
    }

    interface Action {
        instructions: string;
        button: Button;
    }

    interface Button {
        color: string;
        text: string;
        link: string;
    }
}

export = Mailgen;
