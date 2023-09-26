import * as PDFMake from "pdfmake/interfaces";

export function renderPdf(jsx: JSX.Element): PDFMake.TDocumentDefinitions;

export const Fragment: JSX.IntrinsicElements["stack"];

declare global {
    namespace JSX {
        // tslint:disable-next-line:no-empty-interface
        interface Element {}

        type Child = Element | Element[];

        type DynamicChild =
            | Child
            | ((currentPage: number, pageCount: number, pageSize: PDFMake.ContextPageSize) => Child);

        interface ElementChildrenAttribute {
            children: DynamicChild;
        }

        type Ele<Props = {}> = ElementChildrenAttribute & Props;

        type EleNoChidlren<Props = {}> = Props;

        interface IntrinsicElements {
            document: Ele<Omit<PDFMake.TDocumentDefinitions, "content" | "header" | "footer">>;
            header: Ele;
            footer: Ele;
            content: Ele;
            stack: Ele<Omit<PDFMake.ContentStack, "stack">>;
            text: Ele<Omit<PDFMake.ContentText, "text">>;
            ol: Ele<Omit<PDFMake.ContentOrderedList, "ol">>;
            ul: Ele<Omit<PDFMake.ContentUnorderedList, "ul">>;
            table: Ele<Omit<PDFMake.ContentTable, "table"> & Omit<PDFMake.Table, "body">>;
            row: Ele<Element>;
            cell: Ele<Element>;
            columns: Ele<Omit<PDFMake.ContentColumns, "columns">>;
            column: Ele<{ width: number | string }>;

            image: EleNoChidlren<Omit<PDFMake.ContentImage, "image"> & { src: string }>;
            qr: EleNoChidlren<Omit<PDFMake.ContentQr, "qr"> & { content: string }>;
            svg: EleNoChidlren<{
                content: string;
                width?: number | undefined;
                height?: number | undefined;
                fit?: [number, number] | undefined;
            }>;
        }
    }
}
