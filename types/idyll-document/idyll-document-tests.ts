import IdyllDocument, { IdyllDocumentProps } from "idyll-document";
import { createElement, ReactElement } from "react";

const doc = createElement<IdyllDocumentProps>(IdyllDocument);

// $ExpectType true
type test = typeof doc extends ReactElement<IdyllDocumentProps> ? true : false;
