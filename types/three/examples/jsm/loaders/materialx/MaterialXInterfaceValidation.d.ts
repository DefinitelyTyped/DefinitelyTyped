import { MaterialXLog } from "./MaterialXLog.js";

/**
 * Validates the interfaces of the parsed MaterialX document, adding any problems it finds to the log.
 */
export type MaterialXInterfaceValidator = (rootNode: any, log: MaterialXLog) => void;

export function createStrictInterfaceValidator(): MaterialXInterfaceValidator;
