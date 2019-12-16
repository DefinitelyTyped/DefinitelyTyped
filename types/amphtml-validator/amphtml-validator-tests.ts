import * as ampHtmlValidator from "amphtml-validator";

(async () => {
    const validator = await ampHtmlValidator.getInstance();
    const result = validator.validateString("<html></html>");
    const { status, errors } = result;
    if (status === "FAIL" || status === "UNKNOWN") {
        const errs = errors.map(err => {
            const {
                severity,
                line,
                col,
                message,
                specUrl,
                code,
                params
            } = err;
            return err;
        });
    }
})();

(() => {
    const validator = ampHtmlValidator.newInstance("");
    const result = validator.validateString("<html></html>", "AMP4ADS");
    const { status, errors } = result;
})();
