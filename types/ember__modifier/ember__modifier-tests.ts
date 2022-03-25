import { setModifierManager, capabilities, on } from '@ember/modifier';

on; // $ExpectType OnModifier
setModifierManager(() => {}, {}); // $ExpectType {}
capabilities('3.24'); // $ExpectType unknown
