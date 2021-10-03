import octicons = require('@primer/octicons');
import { IconName } from '@primer/octicons';

// $ExpectType string
octicons.alert.toSVG();

// $ExpectError
const name: IconName = 'foo';
