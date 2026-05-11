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
        plaintextPath?: string | undefined;
    }

    interface Product {
        name: string;
        link: string;
        logo?: string | undefined;
        logoHeight?: string | undefined;
        copyright?: string | undefined;
    }

    interface Content {
        body: ContentBody;
    }

    interface ContentBody {
        name?: string | undefined;
        greeting?: string | undefined;
        signature?: string | undefined;
        title?: string | undefined;
        intro?: string | string[] | undefined;
        action?: Action | Action[] | undefined;
        table?: Table | Table[] | undefined;
        dictionary?: any;
        goToAction?: GoToAction | undefined;
        outro?: string | string[] | undefined;
    }

    interface Table {
        data: any[];
        columns?: ColumnOptions[] | undefined;
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
