import * as React from "react";

export as namespace ReactDOMFactories;
export = ReactDOMFactories;

type DOMFactory<P extends React.DOMAttributes<T>, T extends Element> = (
    props?: React.ClassAttributes<T> & P | null,
    ...children: React.ReactNode[]
) => React.DOMElement<P, T>;

interface DetailedHTMLFactory<P extends React.HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
    (props?: React.ClassAttributes<T> & P | null, ...children: React.ReactNode[]): React.DetailedReactHTMLElement<P, T>;
}

interface SVGFactory extends DOMFactory<React.SVGAttributes<SVGElement>, SVGElement> {
    (
        props?: React.ClassAttributes<SVGElement> & React.SVGAttributes<SVGElement> | null,
        ...children: React.ReactNode[]
    ): React.ReactSVGElement;
}

interface ReactHTML {
    a: DetailedHTMLFactory<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    abbr: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    address: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    area: DetailedHTMLFactory<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
    article: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    aside: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    audio: DetailedHTMLFactory<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
    b: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    base: DetailedHTMLFactory<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
    bdi: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    bdo: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    big: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    blockquote: DetailedHTMLFactory<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
    body: DetailedHTMLFactory<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
    br: DetailedHTMLFactory<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
    button: DetailedHTMLFactory<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    canvas: DetailedHTMLFactory<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
    caption: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    center: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    cite: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    code: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    col: DetailedHTMLFactory<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    colgroup: DetailedHTMLFactory<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    data: DetailedHTMLFactory<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
    datalist: DetailedHTMLFactory<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
    dd: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    del: DetailedHTMLFactory<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
    details: DetailedHTMLFactory<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
    dfn: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    dialog: DetailedHTMLFactory<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
    div: DetailedHTMLFactory<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    dl: DetailedHTMLFactory<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
    dt: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    em: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    embed: DetailedHTMLFactory<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
    fieldset: DetailedHTMLFactory<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
    figcaption: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    figure: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    footer: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    form: DetailedHTMLFactory<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
    h1: DetailedHTMLFactory<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: DetailedHTMLFactory<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: DetailedHTMLFactory<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: DetailedHTMLFactory<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h5: DetailedHTMLFactory<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h6: DetailedHTMLFactory<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    head: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLHeadElement>;
    header: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    hgroup: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    hr: DetailedHTMLFactory<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
    html: DetailedHTMLFactory<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
    i: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    iframe: DetailedHTMLFactory<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
    img: DetailedHTMLFactory<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    input: DetailedHTMLFactory<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    ins: DetailedHTMLFactory<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
    kbd: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    keygen: DetailedHTMLFactory<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
    label: DetailedHTMLFactory<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    legend: DetailedHTMLFactory<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
    li: DetailedHTMLFactory<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    link: DetailedHTMLFactory<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
    main: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    map: DetailedHTMLFactory<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
    mark: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    menu: DetailedHTMLFactory<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
    menuitem: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    meta: DetailedHTMLFactory<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
    meter: DetailedHTMLFactory<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
    nav: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    noscript: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    object: DetailedHTMLFactory<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
    ol: DetailedHTMLFactory<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
    optgroup: DetailedHTMLFactory<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
    option: DetailedHTMLFactory<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
    output: DetailedHTMLFactory<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
    p: DetailedHTMLFactory<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    param: DetailedHTMLFactory<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
    picture: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    pre: DetailedHTMLFactory<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
    progress: DetailedHTMLFactory<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
    q: DetailedHTMLFactory<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
    rp: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    rt: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    ruby: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    samp: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    search: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    slot: DetailedHTMLFactory<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
    script: DetailedHTMLFactory<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
    section: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    select: DetailedHTMLFactory<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
    small: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    source: DetailedHTMLFactory<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
    span: DetailedHTMLFactory<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    strong: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    style: DetailedHTMLFactory<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
    sub: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    summary: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    sup: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    table: DetailedHTMLFactory<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
    template: DetailedHTMLFactory<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
    tbody: DetailedHTMLFactory<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    td: DetailedHTMLFactory<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
    textarea: DetailedHTMLFactory<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    tfoot: DetailedHTMLFactory<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    th: DetailedHTMLFactory<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
    thead: DetailedHTMLFactory<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    time: DetailedHTMLFactory<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
    title: DetailedHTMLFactory<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
    tr: DetailedHTMLFactory<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
    track: DetailedHTMLFactory<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
    u: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    ul: DetailedHTMLFactory<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
    "var": DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    video: DetailedHTMLFactory<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
    wbr: DetailedHTMLFactory<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    webview: DetailedHTMLFactory<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
}

interface ReactSVG {
    animate: SVGFactory;
    circle: SVGFactory;
    clipPath: SVGFactory;
    defs: SVGFactory;
    desc: SVGFactory;
    ellipse: SVGFactory;
    feBlend: SVGFactory;
    feColorMatrix: SVGFactory;
    feComponentTransfer: SVGFactory;
    feComposite: SVGFactory;
    feConvolveMatrix: SVGFactory;
    feDiffuseLighting: SVGFactory;
    feDisplacementMap: SVGFactory;
    feDistantLight: SVGFactory;
    feDropShadow: SVGFactory;
    feFlood: SVGFactory;
    feFuncA: SVGFactory;
    feFuncB: SVGFactory;
    feFuncG: SVGFactory;
    feFuncR: SVGFactory;
    feGaussianBlur: SVGFactory;
    feImage: SVGFactory;
    feMerge: SVGFactory;
    feMergeNode: SVGFactory;
    feMorphology: SVGFactory;
    feOffset: SVGFactory;
    fePointLight: SVGFactory;
    feSpecularLighting: SVGFactory;
    feSpotLight: SVGFactory;
    feTile: SVGFactory;
    feTurbulence: SVGFactory;
    filter: SVGFactory;
    foreignObject: SVGFactory;
    g: SVGFactory;
    image: SVGFactory;
    line: SVGFactory;
    linearGradient: SVGFactory;
    marker: SVGFactory;
    mask: SVGFactory;
    metadata: SVGFactory;
    path: SVGFactory;
    pattern: SVGFactory;
    polygon: SVGFactory;
    polyline: SVGFactory;
    radialGradient: SVGFactory;
    rect: SVGFactory;
    stop: SVGFactory;
    svg: SVGFactory;
    switch: SVGFactory;
    symbol: SVGFactory;
    text: SVGFactory;
    textPath: SVGFactory;
    tspan: SVGFactory;
    use: SVGFactory;
    view: SVGFactory;
}

interface ReactDOM extends ReactHTML, ReactSVG {}

declare const ReactDOMFactories: ReactDOM;
