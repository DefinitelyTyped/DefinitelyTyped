import * as React from "react";
import { render } from "react-dom";

declare const container: Element;

import { CardComponent, CardNumber, CardExpiry, CardCVV } from "@chargebee/chargebee-js-react-wrapper";

render(<CardComponent />, container);
render(<CardNumber />, container);
render(<CardExpiry />, container);
render(<CardCVV />, container);
