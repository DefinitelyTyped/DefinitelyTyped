// Type definitions for react-markings 1.3
// Project: https://github.com/Thinkmill/react-markings#readme
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";
import * as CommonmarkReactRenderer from "commonmark-react-renderer";

declare namespace md {
    type CommonProps = CommonmarkReactRenderer.CommonProps;
    type HtmlInlineBlockProps = CommonmarkReactRenderer.HtmlInlineBlockProps;
    type CodeBlockProps = CommonmarkReactRenderer.CodeBlockProps;
    type CodeProps = CommonmarkReactRenderer.CodeProps;
    type HeadingProps = CommonmarkReactRenderer.HeadingProps;
    type SoftBreakProps = CommonmarkReactRenderer.SoftBreakProps;
    type LinkProps = CommonmarkReactRenderer.LinkProps;
    type ImageProps = CommonmarkReactRenderer.ImageProps;
    type ListProps = CommonmarkReactRenderer.ListProps;
    type Renderers = CommonmarkReactRenderer.Renderers;

    interface Options {
        renderers?: Partial<Renderers>;
    }

    type Markings = (...strings: (TemplateStringsArray | React.ReactElement)[]) => React.ReactElement;
    type Customize = (opts: Options) => Markings;
}

interface md {
    (...strings: (TemplateStringsArray | React.ReactElement)[]): React.ReactElement;
    customize: md.Customize;
}

declare const md: md;

export = md;
