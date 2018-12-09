// Type definitions for mailgen 2.0
// Project: https://github.com/eladnava/mailgen#readme
// Definitions by: Kiet Thanh Vo <https://github.com/vothanhkiet>, Jordan Farrer <https://github.com/jordanfarrer>
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
        theme: string | CustomTheme;
        product: Product;
    }

    interface CustomTheme {
        path: string;
        plaintextPath?: string;
    }

    interface Product {
        name: string;
        link: string;
        logo?: string;
        copyright?: string;
    }

    interface Content {
        body: ContentBody;
    }

    interface ContentBody {
        name?: string;
        greeting?: string;
        signature?: string;
        title?: string;
        intro?: string | string[];
        action?: Action | Action[];
        table?: Table;
        dictionary?: any;
        goToAction?: GoToAction;
        outro?: string | string[];
    }

    interface Table {
        data: any[];
        columns?: ColumnOptions[];
    }

    interface ColumnOptions {
        customWidth: any;
        customAlignment: any;
    }

    interface GoToAction {
        text: string;
        link: string;
        description: string;
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
