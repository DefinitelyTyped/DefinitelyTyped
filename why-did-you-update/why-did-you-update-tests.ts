/// <reference path="./why-did-you-update.d.ts" />
/// <reference path="../react/react.d.ts" />

import * as React from "react";
import {whyDidYouUpdate} from "why-did-you-update";

whyDidYouUpdate(React);
whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ });
