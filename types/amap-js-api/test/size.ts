import { size } from './preset';

// $ExpectType Size
new AMap.Size(10, 20);

// $ExpectType number
size.getHeight();

// $ExpectType number
size.getWidth();

// $ExpectType string
size.toString();

// $ExpectType boolean
size.contains({ x: 10, y: 10 });
