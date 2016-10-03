/// <reference path="../chai/chai.d.ts"/>
/// <reference path="jsx-chai.d.ts"/>

import chai = require('chai');
import jsxChai = require('jsx-chai');

function testUseJsxChai() {
	chai.use(jsxChai.jsxChai);
}
