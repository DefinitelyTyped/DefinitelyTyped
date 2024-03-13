import * as CommonmarkReactRenderer from "commonmark-react-renderer";
import * as React from "react";

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
        renderers?: Partial<Renderers> | undefined;
    }

    type Markings = (...strings: Array<TemplateStringsArray | React.ReactElement>) => React.ReactElement;
    function customize(opts: Options): Markings;
}

declare function md(...strings: Array<TemplateStringsArray | React.ReactElement>): React.ReactElement;

export = md;
