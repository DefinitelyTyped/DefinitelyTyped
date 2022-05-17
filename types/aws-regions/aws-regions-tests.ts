import awsRegions from 'aws-regions';

const listHead = awsRegions.list()[0];
listHead.name === 'N. Virginia';
listHead.full_name === 'US East (N. Virginia)';
listHead.code === 'us-east-1';
listHead.public; // $ExpectType boolean
listHead.zones[0] === 'us-east-1a';

const lookupResult1 = awsRegions.lookup({ code: 'us-east-1' });
lookupResult1.name === 'N. Virginia';
lookupResult1.full_name === 'US East (N. Virginia)';
lookupResult1.code === 'us-east-1';
lookupResult1.public; // $ExpectType boolean
lookupResult1.zones[0] === 'us-east-1a';

const lookupResult2 = awsRegions.lookup({ name: 'N. Virginia' });
lookupResult2.name === 'N. Virginia';
lookupResult2.full_name === 'US East (N. Virginia)';
lookupResult2.code === 'us-east-1';
lookupResult2.public; // $ExpectType boolean
lookupResult2.zones[0] === 'us-east-1a';
