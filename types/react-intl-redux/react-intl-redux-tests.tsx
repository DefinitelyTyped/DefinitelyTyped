import * as React from "react"
import { render } from "react-dom"
import { Provider, IntlProvider, IntlState, IntlAction, intlReducer, updateIntl } from "react-intl-redux"

var action: IntlAction = updateIntl({ locale : "en", messages : {} })
var state: IntlState = intlReducer({ locale : "en", messages : {} }, action)

render(
    <IntlProvider locale="en">
        <div>Test</div>
    </IntlProvider>,
    document.getElementById("main")
)

render(
    <Provider>
        <div>Test</div>
    </Provider>,
    document.getElementById("main")
)
