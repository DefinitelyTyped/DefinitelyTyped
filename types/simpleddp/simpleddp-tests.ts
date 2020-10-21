import simpleDDP from 'simpleddp';

const connection = new simpleDDP({ endpoint: '', SocketConstructor: () => {} }); // $ExpectType simpleDDP
