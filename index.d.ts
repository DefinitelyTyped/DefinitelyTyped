// Type definitions for pipetteur 2.0.3
// Project: pipetteur
// Definitions by: Azliya <zhangmin093@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/pipetteur

import onecolor = require('onecolor')

export = pipetteur;

declare function pipetteur(str: string): pipetteur.PipetteurReturnType[];
declare namespace pipetteur{
    type PipetteurReturnType = {
        index: number;
        line: number;
        column: number;
        match: string;
        color: onecolor.Color;
    }
}