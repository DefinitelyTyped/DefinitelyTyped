
/*
The API is the same for both client-side and server-side users.

For server-side users include the module as external module:

import ISO8601Localizer = require('iso8601-localizer');

For client-side users include the module as internal module as shown below:
*/



new ISO8601Localizer('2015-06-02T14:13:12').localize();

new ISO8601Localizer('2015-06-02T14:13:12').to(-5).localize();

new ISO8601Localizer('2015-06-02T14:13:12').to(-5).returnAs('object').localize();
