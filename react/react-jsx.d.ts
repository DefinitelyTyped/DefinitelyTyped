// Type definitions for React v0.13.1 (JSX support)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="react.d.ts" />

declare module JSX {
    interface Element extends React.ReactElement<any> { }
    interface ElementClass extends React.Component<any, any> { }
    interface ElementAttributesProperty { props: {}; }

    interface IntrinsicElements {
        // HTML
        a: React.HTMLAttributes;
        abbr: React.HTMLAttributes;
        address: React.HTMLAttributes;
        area: React.HTMLAttributes;
        article: React.HTMLAttributes;
        aside: React.HTMLAttributes;
        audio: React.HTMLAttributes;
        b: React.HTMLAttributes;
        base: React.HTMLAttributes;
        bdi: React.HTMLAttributes;
        bdo: React.HTMLAttributes;
        big: React.HTMLAttributes;
        blockquote: React.HTMLAttributes;
        body: React.HTMLAttributes;
        br: React.HTMLAttributes;
        button: React.HTMLAttributes;
        canvas: React.HTMLAttributes;
        caption: React.HTMLAttributes;
        cite: React.HTMLAttributes;
        code: React.HTMLAttributes;
        col: React.HTMLAttributes;
        colgroup: React.HTMLAttributes;
        data: React.HTMLAttributes;
        datalist: React.HTMLAttributes;
        dd: React.HTMLAttributes;
        del: React.HTMLAttributes;
        details: React.HTMLAttributes;
        dfn: React.HTMLAttributes;
        dialog: React.HTMLAttributes;
        div: React.HTMLAttributes;
        dl: React.HTMLAttributes;
        dt: React.HTMLAttributes;
        em: React.HTMLAttributes;
        embed: React.HTMLAttributes;
        fieldset: React.HTMLAttributes;
        figcaption: React.HTMLAttributes;
        figure: React.HTMLAttributes;
        footer: React.HTMLAttributes;
        form: React.HTMLAttributes;
        h1: React.HTMLAttributes;
        h2: React.HTMLAttributes;
        h3: React.HTMLAttributes;
        h4: React.HTMLAttributes;
        h5: React.HTMLAttributes;
        h6: React.HTMLAttributes;
        head: React.HTMLAttributes;
        header: React.HTMLAttributes;
        hr: React.HTMLAttributes;
        html: React.HTMLAttributes;
        i: React.HTMLAttributes;
        iframe: React.HTMLAttributes;
        img: React.HTMLAttributes;
        input: React.HTMLAttributes;
        ins: React.HTMLAttributes;
        kbd: React.HTMLAttributes;
        keygen: React.HTMLAttributes;
        label: React.HTMLAttributes;
        legend: React.HTMLAttributes;
        li: React.HTMLAttributes;
        link: React.HTMLAttributes;
        main: React.HTMLAttributes;
        map: React.HTMLAttributes;
        mark: React.HTMLAttributes;
        menu: React.HTMLAttributes;
        menuitem: React.HTMLAttributes;
        meta: React.HTMLAttributes;
        meter: React.HTMLAttributes;
        nav: React.HTMLAttributes;
        noscript: React.HTMLAttributes;
        object: React.HTMLAttributes;
        ol: React.HTMLAttributes;
        optgroup: React.HTMLAttributes;
        option: React.HTMLAttributes;
        output: React.HTMLAttributes;
        p: React.HTMLAttributes;
        param: React.HTMLAttributes;
        picture: React.HTMLAttributes;
        pre: React.HTMLAttributes;
        progress: React.HTMLAttributes;
        q: React.HTMLAttributes;
        rp: React.HTMLAttributes;
        rt: React.HTMLAttributes;
        ruby: React.HTMLAttributes;
        s: React.HTMLAttributes;
        samp: React.HTMLAttributes;
        script: React.HTMLAttributes;
        section: React.HTMLAttributes;
        select: React.HTMLAttributes;
        small: React.HTMLAttributes;
        source: React.HTMLAttributes;
        span: React.HTMLAttributes;
        strong: React.HTMLAttributes;
        style: React.HTMLAttributes;
        sub: React.HTMLAttributes;
        summary: React.HTMLAttributes;
        sup: React.HTMLAttributes;
        table: React.HTMLAttributes;
        tbody: React.HTMLAttributes;
        td: React.HTMLAttributes;
        textarea: React.HTMLAttributes;
        tfoot: React.HTMLAttributes;
        th: React.HTMLAttributes;
        thead: React.HTMLAttributes;
        time: React.HTMLAttributes;
        title: React.HTMLAttributes;
        tr: React.HTMLAttributes;
        track: React.HTMLAttributes;
        u: React.HTMLAttributes;
        ul: React.HTMLAttributes;
        "var": React.HTMLAttributes;
        video: React.HTMLAttributes;
        wbr: React.HTMLAttributes;

        // SVG
        svg: React.SVGElementAttributes;

        circle: React.SVGAttributes;
        defs: React.SVGAttributes;
        ellipse: React.SVGAttributes;
        g: React.SVGAttributes;
        line: React.SVGAttributes;
        linearGradient: React.SVGAttributes;
        mask: React.SVGAttributes;
        path: React.SVGAttributes;
        pattern: React.SVGAttributes;
        polygon: React.SVGAttributes;
        polyline: React.SVGAttributes;
        radialGradient: React.SVGAttributes;
        rect: React.SVGAttributes;
        stop: React.SVGAttributes;
        text: React.SVGAttributes;
        tspan: React.SVGAttributes;
    }
}
