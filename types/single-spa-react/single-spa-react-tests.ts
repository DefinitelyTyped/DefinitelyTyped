import singleSpaReact = require('single-spa-react');
import { Lifecycles } from 'single-spa-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// $ExpectType Lifecycles
singleSpaReact({
	React,
	ReactDOM,
});
