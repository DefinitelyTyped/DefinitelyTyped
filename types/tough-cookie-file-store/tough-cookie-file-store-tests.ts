import CookieStore = require('tough-cookie-file-store');
import { CookieJar } from 'tough-cookie';
new CookieJar(new CookieStore('./cookie.json'));

/* check if cookie is empty or expired */
const cookieInstance = new CookieStore('./cookie.json');
cookieInstance.isExpired(); // will return True if the cookie is expired
cookieInstance.isEmpty(); // will return True if cookie is empty

/* request example */
/*
// Disabled due to warning in npm test:
// Error: tough-cookie-file-store depends on request but has a lower required TypeScript version.
import * as request from 'request'
var j = request.jar(new CookieStore('./cookie.json'));
const r = request.defaults({ jar : j })
r('http://www.google.com', function() {
  r('http://images.google.com')
})
*/
