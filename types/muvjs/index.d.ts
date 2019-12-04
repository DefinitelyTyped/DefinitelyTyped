interface View {
    elementType: keyof HTMLElementTagNameMap,
    attributes: any,
    children: any,
    genKey: (parentKey?: string, index?: number) => void,
    render: (parentKey?: string, index?: number) => Node
}

type Component<T extends keyof HTMLElementTagNameMap> = (attributes?: any) => (...children: any) => View;

declare function component<T extends keyof HTMLElementTagNameMap>(elementType: T): Component<T>;

declare function rerender(parent: HTMLElement | null): (oldView: View) => (newView: View) => (index: number) => void;

declare const div: Component<'div'>;
declare const button: Component<'button'>;
declare const label: Component<'label'>;
declare const input: Component<'input'>;
declare const textarea: Component<'textarea'>;
declare const ul: Component<'ul'>;
declare const li: Component<'li'>;
declare const img: Component<'img'>;
declare const a: Component<'a'>;
declare const abbr: Component<'abbr'>;
declare const address: Component<'address'>;
declare const area: Component<'area'>;
declare const article: Component<'article'>;
declare const aside: Component<'aside'>;
declare const audio: Component<'audio'>;
declare const b: Component<'b'>;
declare const base: Component<'base'>;
declare const bdo: Component<'bdo'>;
declare const blockquote: Component<'blockquote'>;
declare const body: Component<'body'>;
declare const br: Component<'br'>;
declare const canvas: Component<'canvas'>;
declare const caption: Component<'caption'>;
declare const cite: Component<'cite'>;
declare const code: Component<'code'>;
declare const col: Component<'col'>;
declare const colgroup: Component<'colgroup'>;
declare const datalist: Component<'datalist'>;
declare const dd: Component<'dd'>;
declare const del: Component<'del'>;
declare const details: Component<'details'>;
declare const dfn: Component<'dfn'>;
declare const dialog: Component<'dialog'>;
declare const dl: Component<'dl'>;
declare const dt: Component<'dt'>;
declare const em: Component<'em'>;
declare const embed: Component<'embed'>;
declare const fieldset: Component<'fieldset'>;
declare const figcaption: Component<'figcaption'>;
declare const figure: Component<'figure'>;
declare const footer: Component<'footer'>;
declare const form: Component<'form'>;
declare const head: Component<'head'>;
declare const header: Component<'header'>;
declare const h1: Component<'h1'>;
declare const h2: Component<'h2'>;
declare const h3: Component<'h3'>;
declare const h4: Component<'h4'>;
declare const h5: Component<'h5'>;
declare const h6: Component<'h6'>;
declare const hr: Component<'hr'>;
declare const html: Component<'html'>;
declare const i: Component<'i'>;
declare const iframe: Component<'iframe'>;
declare const ins: Component<'ins'>;
declare const kbd: Component<'kbd'>;
declare const legend: Component<'legend'>;
declare const link: Component<'link'>;
declare const map: Component<'map'>;
declare const mark: Component<'mark'>;
declare const menu: Component<'menu'>;
declare const meta: Component<'meta'>;
declare const meter: Component<'meter'>;
declare const nav: Component<'nav'>;
declare const object: Component<'object'>;
declare const ol: Component<'ol'>;
declare const optgroup: Component<'optgroup'>;
declare const option: Component<'option'>;
declare const output: Component<'output'>;
declare const p: Component<'p'>;
declare const param: Component<'param'>;
declare const pre: Component<'pre'>;
declare const progress: Component<'progress'>;
declare const q: Component<'q'>;
declare const s: Component<'s'>;
declare const samp: Component<'samp'>;
declare const script: Component<'script'>;
declare const section: Component<'section'>;
declare const select: Component<'select'>;
declare const small: Component<'small'>;
declare const source: Component<'source'>;
declare const span: Component<'span'>;
declare const strong: Component<'strong'>;
declare const style: Component<'style'>;
declare const sub: Component<'sub'>;
declare const summary: Component<'summary'>;
declare const sup: Component<'sup'>;
declare const table: Component<'table'>;
declare const tbody: Component<'tbody'>;
declare const td: Component<'td'>;
declare const tfoot: Component<'tfoot'>;
declare const th: Component<'th'>;
declare const thead: Component<'thead'>;
declare const tr: Component<'tr'>;
declare const time: Component<'time'>;
declare const title: Component<'title'>;
declare const track: Component<'track'>;
declare const u: Component<'u'>;
declare const varElement: Component<'var'>;
declare const video: Component<'video'>;

type MUV<M, U, V, I, S, A, E> = {
    model: M,
    update: (m: M) => (a: A) => { model: M, effects?: E[] },
    view: (d: (a: A) => void) => (m: M) => View,
    ignition?: (d: (a: A) => void) => void,
    subscriptions?: (d: (a: A) => void) => (e: E) => void
};

declare function muv<M, U, V, I, S, A, E>(muv: MUV<M, U, V, I, S, A, E>): (rootId: string) => void;
