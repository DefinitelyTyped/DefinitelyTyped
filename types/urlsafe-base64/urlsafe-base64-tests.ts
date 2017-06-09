
import URLSafeBase64 = require('urlsafe-base64');

var base64 = URLSafeBase64.encode(new Buffer('3Rpbmd1aXNoZWQ', 'base64'));

var buf = URLSafeBase64.decode('3Rpbmd1aXNoZWQ');

var isValid = URLSafeBase64.validate('3Rpbmd1aXNoZWQ');
