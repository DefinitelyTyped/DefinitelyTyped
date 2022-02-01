import Cep from 'coordenadas-do-cep';

const a = Cep.getByEndereco('12345-678'); // $ExpectType Coordinates
const b = Cep.getByCep('12345-678'); // $ExpectType CepCoords
const c = Cep.getInfoCep('12345-678'); // $ExpectType InfoCep
const d = Cep.getDistEntreCeps("a", "b"); // $ExpectType number
const e = Cep.getDistEntreEnderecos("a", "b"); // $ExpectType number
const f = Cep.getDistancia({ lat: 1, lon: 1 }, { lat: 1, lon: 1 }); // $ExpectType number

const g = Cep.getByEndereco(); // $ExpectError
const h = Cep.getByCep(1); // $ExpectError
const i = Cep.getInfoCep(); // $ExpectError
const j = Cep.getDistEntreCeps("a"); // $ExpectError
const k = Cep.getDistEntreEnderecos("a", 1); // $ExpectError
const l = Cep.getDistancia({ }, { }); // $ExpectError

Cep.setOpcoes({}); // this function shoud return void
