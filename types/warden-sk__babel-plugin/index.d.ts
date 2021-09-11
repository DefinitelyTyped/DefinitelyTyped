// Type definitions for @warden-sk/babel-plugin 1.1
// Project: https://github.com/warden-sk/design
// Definitions by: Marek Kobida <https://github.com/marekkobida>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'react';
import * as t from './types';
import { EncodedClassName } from '@warden-sk/babel-plugin/private/decodeClassName';
import { EncodedResponsiveClassName } from '@warden-sk/babel-plugin/private/decodeResponsiveClassName';

export {};

interface A {
  alignContent?: EncodedResponsiveClassName<typeof t.AlignContent[number]>;
  alignItems?: EncodedResponsiveClassName<typeof t.AlignItems[number]>;
  alignSelf?: EncodedResponsiveClassName<typeof t.AlignSelf[number]>;
  className?: EncodedClassName;
  display?: EncodedResponsiveClassName<typeof t.Display[number]>;
  flex?: EncodedResponsiveClassName<typeof t.Flex[number]>;
  flexDirection?: EncodedResponsiveClassName<typeof t.FlexDirection[number]>;
  flexWrap?: EncodedResponsiveClassName<typeof t.FlexWrap[number]>;
  justifyContent?: EncodedResponsiveClassName<typeof t.JustifyContent[number]>;
  justifyItems?: EncodedResponsiveClassName<typeof t.JustifyItems[number]>;
  justifySelf?: EncodedResponsiveClassName<typeof t.JustifySelf[number]>;
  m?: EncodedResponsiveClassName<typeof t.S[number]>;
  mB?: EncodedResponsiveClassName<typeof t.S[number]>;
  mL?: EncodedResponsiveClassName<typeof t.MarginLeft[number]>;
  mR?: EncodedResponsiveClassName<typeof t.S[number]>;
  mT?: EncodedResponsiveClassName<typeof t.S[number]>;
  mX?: EncodedResponsiveClassName<typeof t.S[number]>;
  mY?: EncodedResponsiveClassName<typeof t.S[number]>;
  p?: EncodedResponsiveClassName<typeof t.S[number]>;
  pB?: EncodedResponsiveClassName<typeof t.S[number]>;
  pL?: EncodedResponsiveClassName<typeof t.S[number]>;
  pR?: EncodedResponsiveClassName<typeof t.S[number]>;
  pT?: EncodedResponsiveClassName<typeof t.S[number]>;
  pX?: EncodedResponsiveClassName<typeof t.S[number]>;
  pY?: EncodedResponsiveClassName<typeof t.S[number]>;
  width?: EncodedResponsiveClassName<typeof t.Width[number]>;
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      a: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | A;
      abbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      address: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      area: DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement> | A;
      article: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      aside: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      audio: DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> | A;
      b: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      base: DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement> | A;
      bdi: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      bdo: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      blockquote: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement> | A;
      body: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement> | A;
      br: DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement> | A;
      button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | A;
      canvas: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> | A;
      caption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      cite: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      code: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      col: DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement> | A;
      colgroup: DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement> | A;
      data: DetailedHTMLProps<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement> | A;
      datalist: DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement> | A;
      dd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      del: DetailedHTMLProps<DelHTMLAttributes<HTMLElement>, HTMLElement> | A;
      details: DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement> | A;
      dfn: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | A;
      dl: DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement> | A;
      dt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      em: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      embed: DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement> | A;
      fieldset: DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> | A;
      figcaption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      figure: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      footer: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      form: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> | A;
      h1: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h2: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h3: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h4: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h5: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      h6: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> | A;
      head: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> | A;
      header: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      hr: DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> | A;
      html: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement> | A;
      i: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      iframe: DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> | A;
      img: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | A;
      input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | A;
      ins: DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement> | A;
      kbd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> | A;
      legend: DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement> | A;
      li: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> | A;
      link: DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> | A;
      main: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      map: DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement> | A;
      mark: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      menu: DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement> | A;
      meta: DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement> | A;
      meter: DetailedHTMLProps<MeterHTMLAttributes<HTMLElement>, HTMLElement> | A;
      nav: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      noscript: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      object: DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement> | A;
      ol: DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> | A;
      optgroup: DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement> | A;
      option: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> | A;
      output: DetailedHTMLProps<OutputHTMLAttributes<HTMLElement>, HTMLElement> | A;
      p: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> | A;
      param: DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement> | A;
      picture: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      pre: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> | A;
      progress: DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement> | A;
      q: DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> | A;
      rp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      rt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      ruby: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      s: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      samp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      script: DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement> | A;
      section: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      select: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> | A;
      slot: DetailedHTMLProps<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement> | A;
      small: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      source: DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement> | A;
      span: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> | A;
      strong: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      style: DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement> | A;
      sub: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      summary: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      sup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      table: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> | A;
      tbody: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | A;
      td: DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> | A;
      template: DetailedHTMLProps<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement> | A;
      textarea: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> | A;
      tfoot: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | A;
      th: DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> | A;
      thead: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> | A;
      time: DetailedHTMLProps<TimeHTMLAttributes<HTMLElement>, HTMLElement> | A;
      title: DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> | A;
      tr: DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> | A;
      track: DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement> | A;
      u: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      ul: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> | A;
      var: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
      video: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> | A;
      wbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> | A;
    }
  }
}
