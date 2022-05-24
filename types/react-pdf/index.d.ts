// Type definitions for react-pdf 5.7
// Project: https://github.com/wojtekmaj/react-pdf/
// Definitions by: CodeDaraW <https://github.com/CodeDaraW>
//                 Nathan Hardy <https://github.com/nhardy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import Document, { Props as DocumentProps, LoadingProcessData } from './dist/Document';
import Outline, { Props as OutlineProps } from './dist/Outline';
import Page, { Props as PageProps, PDFPageItem, TextLayerItemInternal, TextItem, PDFPageProxy } from './dist/Page';
import pdfjs from './dist/pdfjs-dist';

export {
    pdfjs,
    Document,
    Page,
    Outline,
    DocumentProps,
    PageProps,
    OutlineProps,
    PDFPageItem,
    TextLayerItemInternal,
    LoadingProcessData,
    TextItem,
    PDFPageProxy,
};
