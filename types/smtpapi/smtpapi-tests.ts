/**
 * Created from usage code samples from //github.com/sendgrid/smtpapi-nodejs#usage
 */

import smtpapi = require("smtpapi");
var header = new smtpapi();

header.addTo('you@youremail.com');
header.addTo('other@otheremail.com');
header.setTos(['you@youremail.com', 'other@otheremail.com']);
header.addSubstitution('keep', ['secret']);
header.addSubstitution('other', ['one', 'two']);
header.setSubstitutions({'keep': ['secret'], 'other': ['one', 'two']});
header.addUniqueArg('cat', 'dogs');
header.setUniqueArgs({cow: 'chicken'});
header.setUniqueArgs({dad: 'proud'});
header.addCategory('tactics');
header.addCategory('advanced');
header.setCategories(['tactics', 'advanced']);
header.addSection('-charge-', 'This ship is useless.');
header.setSections({'-charge-': 'This ship is useless.', '-other': 'Another section here'});
header.addFilter('footer', 'enable', 1);
header.addFilter('footer', 'text/html', '<strong>boo</strong>');
header.setSendAt(1409348513);
header.setSendEachAt([1409348513, 14093485134]);
header.addSendEachAt([1409348513]);
header.addSendEachAt(14093485134);
header.setASMGroupID(123);
header.setIpPool("testPool");
header.setFilters({
  'footer': {
    'setting': {
      'enable': 1,
      'text/plain': 'You can haz footers!'
    }
  }
});
