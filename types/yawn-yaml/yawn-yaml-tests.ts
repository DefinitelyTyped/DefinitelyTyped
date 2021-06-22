import YAML from 'yawn-yaml/cjs';

const yaml = new YAML(''); // $ExpectType YAWN
yaml.json; // $ExpectType any
yaml.yaml; // $ExpectType string
yaml.getRemark(''); // $ExpectType string
yaml.setRemark('', ''); // $ExpectType boolean
