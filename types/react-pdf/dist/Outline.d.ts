import * as React from 'react';
import { getDocument } from 'pdfjs-dist';

// Internal Awaited type
export {};
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

export interface Props {
    /**
     * Defines custom class name(s), that will be added to rendered element.
     * @default 'react-pdf__Outline'
     */
    className?: string | string[] | undefined;

    /**
     * Function called when an outline item has been clicked.
     * Usually, you would like to use this callback to move the user wherever they requested to.
     */
    onItemClick?: (({ pageNumber }: { pageNumber: string }) => void) | undefined;

    /**
     * Function called in case of an error while retrieving the outline.
     */
    onLoadError?: ((error: Error) => void) | undefined;

    /**
     * Function called when the outline is successfully retrieved.
     * Here infer `Outline` type by ts trick, since it is not exposed by `pdfjs-dist`.
     */
    onLoadSuccess?: ((outline: Awaited<ReturnType<Awaited<ReturnType<typeof getDocument>['promise']>['getOutline']>>) => void) | undefined;
}

export default class Outline extends React.Component<Props> { }
