import * as isSvg from 'is-svg';

const data = '<svg></svg>';
let result = false;

result = isSvg(data);
result = isSvg(Buffer.from(data));
result = isSvg(false);
result = isSvg(null);
result = isSvg(undefined);
result = isSvg();
