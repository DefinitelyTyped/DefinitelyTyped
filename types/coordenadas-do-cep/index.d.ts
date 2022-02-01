// Type definitions for coordenadas-do-cep 1.2
// Project: <https://github.com/viniciusm2001/coordenadas-do-cep>
// Definitions by: Carlos Alencar <https://github.com/cybalencar96>
// Definitions: <https://github.com/DefinitelyTyped/DefinitelyTyped>

declare namespace CepFinder {
    function getByEndereco(address: string): Coordinates;
    function getByCep(cep: string): CepCoords;
    function getInfoCep(cep: string): InfoCep;
    function getDistEntreCeps(cep1: string, cep2: string): number;
    function getDistEntreEnderecos(end1: string, end2: string): number;
    function getDistancia(coord1: Coordinates, coord2: Coordinates): number;
    function setOpcoes(options: Options): void;

    interface Options {
        busca_aproximada?: boolean;
        precisao?: number;
        casas_dec_dist?: number;
    }

    interface Coordinates {
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
}

export = CepFinder;
