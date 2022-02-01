// Type definitions for coordenadas-do-cep 1.2
// Project: <https://github.com/viniciusm2001/coordenadas-do-cep>
// Definitions by: Carlos Alencar <https://github.com/cybalencar96>
// Definitions: <https://github.com/DefinitelyTyped/DefinitelyTyped>

export {};

interface CepCoords {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
    lat: number;
    lon: number;
}

interface InfoCep {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
}

interface Coordinates {
    lat: number;
    lon: number;
}

interface Options {
    busca_aproximada?: boolean;
    precisao?: number;
    casas_dec_dist?: number;
}

export default class CoordenadasDoCep {
    static getByEndereco(address: string): Coordinates;
    static getByCep(cep: string): CepCoords;
    static getInfoCep(cep: string): InfoCep;
    static getDistEntreCeps(cep1: string, cep2: string): number;
    static getDistEntreEnderecos(end1: string, end2: string): number;
    static getDistancia(coord1: Coordinates, coord2: Coordinates): number;
    static setOpcoes(options: Options): void;
    foo: string;
}
