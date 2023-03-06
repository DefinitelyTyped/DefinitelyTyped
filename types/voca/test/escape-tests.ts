import escapeHtml = require('voca/escape_html');
import escapeRegExp = require('voca/escape_reg_exp');
import unescapeHtml = require('voca/unescape_html');

escapeHtml();
escapeHtml('<p>wonderful world</p>');

escapeRegExp();
escapeRegExp('(hours)[minutes]{seconds}');

unescapeHtml();
unescapeHtml('&lt;p&gt;wonderful world&lt;/p&gt;');
