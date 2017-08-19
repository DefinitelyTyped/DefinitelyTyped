import ipRegex = require('ip-regex');

ipRegex().test('unicorn 192.168.0.1');

ipRegex({exact: true}).test('unicorn 192.168.0.1');

'unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'.match(ipRegex());
