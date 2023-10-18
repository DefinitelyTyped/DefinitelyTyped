export = normalize_jss;

declare const normalize_jss: {
    "@global": {
        "::-webkit-file-upload-button": {
            appearance: string;
            font: string;
        };
        "[hidden]": {
            display: string;
        };
        "[type=checkbox], [type=radio]": {
            boxSizing: string;
            padding: number;
        };
        "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
            height: string;
        };
        "[type=search]": {
            appearance: string;
            outlineOffset: string;
        };
        "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
            appearance: string;
        };
        a: {
            background: string;
            textDecorationSkip: string;
        };
        "a:active, a:hover": {
            outlineWidth: number;
        };
        "abbr[title]": {
            borderBottom: string;
            textDecoration: string;
        };
        "article, aside, footer, header, nav, section, figcaption, figure, main": {
            display: string;
        };
        "audio, video": {
            display: string;
        };
        "audio:not([controls])": {
            display: string;
            height: number;
        };
        "b, strong": {
            fontWeight: string;
        };
        body: {
            margin: number;
        };
        "button, [type=reset], [type=submit]": {
            "-webkit-appearance": string;
        };
        "button, input": {
            overflow: string;
        };
        "button, input, optgroup, select, textarea": {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            margin: number;
        };
        "button, select": {
            textTransform: string;
        };
        "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":
            {
                outline: string;
            };
        "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":
            {
                borderStyle: string;
                padding: number;
            };
        canvas: {
            display: string;
        };
        "code, kbp, samp": {
            fontFamily: string;
            fontSize: string;
        };
        "details, menu": {
            display: string;
        };
        dfn: {
            fontStyle: string;
        };
        fieldset: {
            border: string;
            margin: number[][];
            padding: string[][];
        };
        h1: {
            fontSize: string;
            margin: string[][];
        };
        hr: {
            boxSizing: string;
            height: number;
            overflow: string;
        };
        html: {
            fontFamily: string;
            lineHeight: string;
            textSizeAdjust: string;
        };
        img: {
            borderStyle: string;
            verticalAlign: string;
        };
        legend: {
            boxSizing: string;
            color: string;
            display: string;
            maxWidth: string;
            padding: number;
            whiteSpace: string;
        };
        mark: {
            backgroundColor: string;
            color: string;
        };
        pre: {
            fontFamily: string;
            fontSize: string;
        };
        progress: {
            display: string;
            verticalAlign: string;
        };
        small: {
            fontSize: string;
        };
        sub: {
            bottom: string;
        };
        "sub, sup": {
            fontSize: string;
            lineHeight: number;
            position: string;
            verticalAlign: string;
        };
        summary: {
            display: string;
        };
        sup: {
            top: string;
        };
        "svg:not(:root)": {
            overflow: string;
        };
        template: {
            display: string;
        };
        textarea: {
            overflow: string;
        };
    };
};
