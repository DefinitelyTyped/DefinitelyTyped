import { fromBase58 } from 'bip32';

const node = fromBase58("xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi");

const child = node.derivePath('m/0');

const grandchild = child.derive(2);

grandchild.toWIF() === 'Kxtby4wzfHeCaRXma16dBNLgUE7Ct3Xkb6sRs3aZ56Bmtf1rcNWs';
