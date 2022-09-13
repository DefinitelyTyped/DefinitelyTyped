// Type definitions for xml-name-validator 4.0
// Project: https://github.com/jsdom/xml-name-validator
// Definitions by: Douglas Wade <https://github.com/doug-wade>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Validate a string against the Name production
 */
 export function name(name: string): boolean;

 /**
  * Validate a string againt the QName production
  */
 export function qname(qname: string): boolean;

 /**
  * Tells you whether or not a string matches the Name or QName productions in the XML Namespaces specification.
  */
 export as namespace XmlNameValidator;
