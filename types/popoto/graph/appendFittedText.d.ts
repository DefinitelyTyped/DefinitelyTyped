export const measureTextWidth: (text: string) => number;

export const extractLines: (text: string) => { width: number, text: string }[];

/**
 * Create the text representation of a node by slicing the text into lines to fit the node.
 *
 * @param selection
 * @param textParam
 * @param radiusParam
 * @param classParam
 */
export default function appendFittedText(selection: any, textParam: string, radiusParam: number, classParam?: any): void;
