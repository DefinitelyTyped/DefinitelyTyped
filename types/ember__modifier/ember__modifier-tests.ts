import { setModifierManager, capabilities, on } from '@ember/modifier';
import Owner from '@ember/owner';

declare let owner: Owner;

on; // $ExpectType OnModifier
setModifierManager((owner) => {}, {}); // $ExpectType {}
capabilities('3.24'); // $ExpectType unknown
