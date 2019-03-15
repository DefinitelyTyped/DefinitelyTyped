import yaml = require('config-yaml');

yaml('./simple.yaml');
yaml('./simple.yaml', { encoding: 'gbk' });
yaml('./simple.yaml', { encoding: 'utf-8' });
