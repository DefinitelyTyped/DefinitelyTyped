import * as feather from 'feather-icons';

feather.replace(); // $ExpectType void
feather.icons['x'].toSvg(); // $ExpectType string
feather.icons['x'].name; // $ExpectType IconName
feather.icons['x'].contents; // $ExpectType string
feather.icons['x'].tags; // $ExpectType string[]
