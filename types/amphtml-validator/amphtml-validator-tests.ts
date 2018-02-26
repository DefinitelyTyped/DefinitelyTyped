import * as ampHtmlValidator from 'amphtml-validator'

;(async () => {
    const validator = await ampHtmlValidator.getInstance()
    const result = validator.validateString('<html></html>')
})()

;(() => {
    const validator = ampHtmlValidator.newInstance('')
    const result = validator.validateString('<html></html>')
})()
