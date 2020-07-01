import * as useragent from 'useragent';

// useragent.parse(useragent string[, js useragent]);
let agent = useragent.parse('');
let agent2 = useragent.parse('', '');

// useragent.lookup(useragent string[, js useragent]);
agent = useragent.lookup('');

// useragent.fromJSON(obj);
agent = useragent.parse('');
let another = useragent.fromJSON(JSON.stringify(agent));

// useragent.is(useragent string).browsername;
useragent.is('').firefox; // true
useragent.is('').safari; // false
let ua = useragent.is('');

// Agent.toAgent();
agent = useragent.parse('');
agent.toAgent(); // 'Chrome 15.0.874'

// Agent.toVersion();
agent = useragent.parse('');
agent.toVersion(); // '15.0.874'

// Agent.toJSON();
agent = useragent.parse('');
agent.toJSON(); // returns an object
JSON.stringify(agent);

// OperatingSystem.toString();
agent = useragent.parse('');
agent.os.toString(); // 'Mac OSX 10.8.1'

// OperatingSystem.toVersion();
agent = useragent.parse('');
agent.os.toVersion(); // '10.8.1'

// OperatingSystem.toJSON();
agent = useragent.parse('');
agent.os.toJSON(); // returns an object
JSON.stringify(agent.os);

// Device.toString();
agent = useragent.parse('');
agent.device.toString(); // 'Asus A100'

// Device.toVersion();
agent = useragent.parse('');
agent.device.toVersion(); // '' , no version found but could also be '0.0.0'

// Device.toJSON();
agent = useragent.parse('');
agent.device.toJSON(); // returns an object
JSON.stringify(agent.device);
