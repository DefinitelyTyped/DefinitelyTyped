// Type definitions for coordenadas-do-cep 1.2
// Project: <https://github.com/viniciusm2001/coordenadas-do-cep>
// Definitions by: Carlos Alencar <https://github.com/cybalencar96>
// Definitions: <https://github.com/DefinitelyTyped/DefinitelyTyped>
/* tslint-disable npm-naming */
export function getByEndereco(address: string): Coordinates;
export function getByCep(cep: string): CepWithCoordinates;
export function getInfoCep(cep: string): InfoCep;
export function getDistEntreCeps(cep1: string, cep2: string): number;
export function getDistEntreEnderecos(end1: string, end2: string): number;
export function getDistancia(coord1: Coordinates, coord2: Coordinates): number;
export function setOpcoes(options: Options): void;

export interface CepWithCoordinates {
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

export interface InfoCep {
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

export interface Coordinates {
    lat: number;
    lon: number;
}

export interface Options {
    busca_aproximada?: boolean;
    precisao?: number;
    casas_dec_dist?: number;
}
