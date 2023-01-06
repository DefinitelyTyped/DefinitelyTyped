export default capture;
/**
 * Make capture request to provided Url. Custom user options are merged with
 * the globally defined settings and request defaults.
 * If the EPCISDocument provided isn't valid and the `documentValidation` field of settings is true,
 * the functions throws an Error.
 *
 * @param {EPCISDocument} epcisDocument - The url of the request
 * @param {Settings} [customOptions] - User options for this single request
 * @returns {Promise} - Response promise
 */
declare function capture(epcisDocument: EPCISDocument, customOptions?: Settings): Promise<any>;
import EPCISDocument from "../entity/epcis/EPCISDocument";
import { Settings } from "../settings";
