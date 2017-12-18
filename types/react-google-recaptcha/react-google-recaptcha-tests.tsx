import ReCAPTCHA from 'react-google-recaptcha';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

ReactDOM.render(
	<ReCAPTCHA sitekey="xxx" onChange={a => a}/>,
	document.getElementById('example')
);
