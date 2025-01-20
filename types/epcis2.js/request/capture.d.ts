export default capture;
/**
 * Make capture request to provided Url. Custom user options are merged with
 * the globally defined settings and request defaults.
 * If the EPCISDocument provided isn't valid and the `documentValidation` field of settings is true,
 * the functions throws an Error.
 *
 * @param epcisDocument - The url of the request
 * @param [customOptions] - User options for this single request
 * @returns Response promise
 */
declare function capture(epcisDocument: EPCISDocument, customOptions?: Settings): Promise<any>;
import EPCISDocument from "../entity/epcis/EPCISDocument";
import { Settings } from "../settings";
