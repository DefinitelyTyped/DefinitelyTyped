import 'react-native-get-random-values';

(() => {
    const arr: Uint8Array = crypto.getRandomValues(new Uint8Array(1));
    if (!(arr instanceof Uint8Array)) throw Error('getRandomValues() should return Uint8Array');
    console.log('getRandomValues() returned Uint8Array');
})();
