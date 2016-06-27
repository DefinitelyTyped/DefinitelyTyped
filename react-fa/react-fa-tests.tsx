/// <reference types="react-dom"/>

import * as React from "react";
import { render } from 'react-dom';
import Icon = require('react-fa');

render(
	<Icon spin name="spinner" />,
	document.getElementById('main')
)
