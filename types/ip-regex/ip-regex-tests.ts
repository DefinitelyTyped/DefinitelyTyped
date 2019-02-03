import ipRegex = require('ip-regex');

ipRegex().test('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow');
ipRegex({exact: true}).test('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow');
'unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'.match(ipRegex());

ipRegex.v4().test('unicorn 192.168.0.1');
ipRegex.v4({exact: true}).test('unicorn 192.168.0.1');
'unicorn 192.168.0.1'.match(ipRegex.v4());

ipRegex.v6().test('cake 1:2:3:4:5:6:7:8 rainbow');
ipRegex.v6({exact: true}).test('cake 1:2:3:4:5:6:7:8 rainbow');
'cake 1:2:3:4:5:6:7:8 rainbow'.match(ipRegex.v6());
