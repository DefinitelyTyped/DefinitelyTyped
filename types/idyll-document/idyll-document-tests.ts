import IdyllDocument, { IdyllDocumentProps } from "idyll-document";
import { createElement } from "react";

// $ExpectType ReactElement<IdyllDocumentProps>
createElement<IdyllDocumentProps>(IdyllDocument);
