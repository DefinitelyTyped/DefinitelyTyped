import { ReactElement } from 'react';

export function renderToString(element: ReactElement<any>): string;
export function renderToStaticMarkup(element: ReactElement<any>): string;
export var version: string;

export as namespace ReactDOMServer;