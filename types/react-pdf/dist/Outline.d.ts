import * as React from 'react';
import { PDFTreeNode } from 'pdfjs-dist';

export interface Props {
    /**
     * Defines custom class name(s), that will be added to rendered element.
     * @default 'react-pdf__Outline'
     */
    className?: string | string[];

    /**
     * Function called when an outline item has been clicked.
     * Usually, you would like to use this callback to move the user wherever they requested to.
     */
    onItemClick?: ({ pageNumber }: { pageNumber: string }) => void;

    /**
     * Function called in case of an error while retrieving the outline.
     */
    onLoadError?: (error: Error) => void;

    /**
     * Function called when the outline is successfully retrieved.
     */
    onLoadSuccess?: (outline: PDFTreeNode[]) => void;
}

export default class Outline extends React.Component<Props> { }
